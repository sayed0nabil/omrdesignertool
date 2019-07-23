
const path = require('path');
// Built-in node modules
const fs = require('fs');
const  express = require('express'),
       passport = require('passport'),
       shelljs  = require('shelljs');
       router  = express.Router();
// Custom Models
const Paper = require('../../models/Paper'),
      Image = require('../../models/Image');
// Validation Modules
const createPaperValidationErrors = require('../../validations/createpapervalidation');
const { dealingWithGoogle } = require('../google/main');
// @router GET /api/papers
// @desc   See My Papers
// @access public 
router.get('/', passport.authenticate('jwt', { session: false}), (req, res) => {
    Paper.find({
        user: req.user.id
    })
    .then( papers => {
        res.send(papers);
    })
    .catch(err => {
        res.status(400).send({
            msg: 'can not connect to db'
        })
    })
});
// @router GET /api/papers
// @desc   See My Papers
// @access public 
router.post('/', (req, res) => {
    Paper.find({
        access: true,
        user: { $ne: req.body.userId }
    })
    .populate('user', ['email'])
    .then( papers => {
        res.send(papers);
    })
    .catch( err => {
        res.status(400).send({
            msg: 'can not connect to db'
        });
    });
});
// @router GET /api/papers/:userId
// @desc Fetch public paper of user
// @access Public
router.get('/:userId', (req, res) => {
    Paper.find({
        user: req.params.userId,
        access: true
    })
    .populate('user', 'email')
    .then(papers => {
        res.send(papers);
    })
    .catch(err => {
        res.status(400).send('can not connect to DB');
    })
});
// @route POST /api/papers/createpaper
// @desc Create a new paper
// @access Private
router.post('/createpaper', passport.authenticate('jwt', {session:false}), (req, res) => {
    const errors = createPaperValidationErrors(req.body);
    // console.log(req.user);
    if(Object.entries(errors).length === 0){
        const access = req.body.access === 'private'?false: true
        Paper.findOne({
            user: req.user,
            name: req.body.name,
            access
        })
        .then( paper => {
            if(paper){
                res.status(400).send({
                    name: 'You have the same paper name in your repositry'
                })
            }
            else{
                if(req.body.dataImages){
                    req.body.dataImages.images.forEach(img => {
                        const newImage = new Image({
                            name: img.name,
                            user: req.user._id,
                            link: img.link
                        })
                        newImage.save();
                    })
                }
                const newPaper = new Paper({
                    name: req.body.name,
                    access,
                    user: req.user._id,
                    content: JSON.stringify({
                        width: req.body.width,
                        height: req.body.height,
                        background: req.body.bg,
                        filename: req.body.name,
                        questionBlockArray: req.body.questionBlockArray?req.body.questionBlockArray:[],
                        contentBlockArray: req.body.contentBlockArray?req.body.contentBlockArray:[],
                        seatNumber: req.body.seatNumber?req.body.seatNumber: {},
                        modelNumber: req.body.modelNumber?req.body.modelNumber:{}
                    })
                });
                newPaper.save()
                .then(paper => {
                    res.send(paper);
                })
                .catch(err => {
                    res.status(400).send({
                        db: 'something go failed'
                    })
                })
            }
        })
    }
    else{
        res.status(400).send(errors);
    }
});
// @route GET /api/papers/preview/:paperId/:userId
// @desc   Preview Any Public Paper
// @access Public
router.get('/preview/:paperId/:userId', (req, res) => {
    Paper.findById(req.params.paperId)
    .then(paper => {
        if(paper){
            Image.find({user: req.params.userId})
            .then( async images => {
                let imgs = [], urls = {};
                await Promise.all(images.map(async img => {
                    await dealingWithGoogle(1, img.link)
                    .then( file => {
                        urls[img.name] = file.thumbnailLink;
                    }).catch(err => res.status(400).send(err));
                }))
                res.send({
                    ...JSON.parse(paper.content),
                    urls
                });
            })
        }else{
            res.status(404).send({
                paper: 'paper not found'
            });
        }
    })
    .catch(err => {
        res.status(404).send({
            paper: 'paper id not a valid id'
        });
    });
});
// @route POST /api/papers/edit
// @desc   Edit Logged User Paper
// @access Public
router.post('/edit', passport.authenticate('jwt', {session:false}), (req, res) => {
    Paper.findByIdAndUpdate(req.body.paperId, {
        content: req.body.data
    }, {new: true})
    .then(paper => {
        if(paper){
            res.send(paper);
        }else{
            res.status(404).send({
                paper: 'paper not found'
            })
        }
    })
    .catch( err => res.status(400).send({
        paper: 'paper id not valid'
    }))
});

// @route POST /api/papers
// @desc  Delete Logged User Paper
// @access Public
router.post('/delete', passport.authenticate('jwt', {session:false}), (req, res) => {
    Paper.findOneAndDelete({
        _id: req.body.paperId,
        user: req.user._id
    })
    .then( paper => {
        if(paper){
            res.send(paper)
        }else{
            res.status(404).send({
                paper: 'paper not found'
            })
        }
    })
    .catch(err => {
        res.status(400).send({
            paper: 'paper id is not valid'
        })
    });
});
module.exports = router;
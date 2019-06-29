

const express = require('express'),
passport = require('passport'),
multer   = require('multer'),
path     = require('path'),
router  = express.Router();

// Custom Models
const Image = require("../../models/Image");


// @route /api/posts/createpost
// @desc Create new Post
// @access Private
router.post('/upload', passport.authenticate('jwt', {session:false}), (req, res) => {
    // Set Disk Storage
    const storage = multer.diskStorage({
        destination: `./client/src/data/${req.user.id}`,
        filename: function(req, file, cb){
            cb(null, file.originalname);
        }
    });
    const upload = multer({
        storage: storage,
        limits:{fileSize: 10000000000},
    }).single("myImage");
    upload(req, res, (err) => {
        // console.log("Request ---", req.body);
        // console.log("Request File ---", req.file);
        //Here you get file.
        /*Now do where ever you want to do*/
        if(err)
            res.status(400).send({
                err
            })
        if(!err){
            Image.findOne({name: req.file.originalname, user: req.user.id})
            .then(image => {
                if(image)
                    res.status(400).send({
                        image: 'Image Already Exist'
                    })
                else{
                    const newImage = new Image({
                        name: req.file.originalname,
                        user: req.user.id
                    });
                    newImage.save()
                    .then(image => {
                        Image.find({user: req.user.id})
                        .then(images => {
                            res.send({
                                images
                            })
                        })
                        .catch(err => res.status(400).send({
                            err
                        }))
                    })
                    .catch(err => {
                        res.status(400).send({
                            err: 'Can not save name of image in DB'
                        })
                    })      
                }
            })
        }
     });
})

module.exports = router;
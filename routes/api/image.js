

const express = require('express'),
passport = require('passport'),
multer   = require('multer'),
path     = require('path'),
router  = express.Router();

// Custom Models
const Image = require("../../models/Image");
const { dealingWithGoogle } = require('../google/main');

// @route /api/posts/createpost
// @desc Create new Post
// @access Private
router.post('/upload', passport.authenticate('jwt', {session:false}), (req, res) => {
    // Set Disk Storage
    const storage = multer.diskStorage({
        destination: `./`,
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
            dealingWithGoogle(2, req.file.originalname)
            .then( id => {
                Image.findOne({
                    name: req.file.originalname,
                    user: req.user.id
                 })
         .then(image => {
             if(image)
                 res.status(400).send({
                     image: 'Image Already Exist'
                 })
             else{
                 const newImage = new Image({
                     name: req.file.originalname,
                     user: req.user.id,
                     link: id
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
            }).catch(err => res.status(400).send(err));
            
        }
     });
})

router.post('/getImage', passport.authenticate('jwt', {session:false}), (req, res) => {
    Image.findOne({
        name: req.body.name,
        user: req.user.id
     }).then( img => {
         if(img){
            dealingWithGoogle(1, img.link)
            .then( file => {
                res.send(file);
            }).catch(err => res.status(400).send(err));
         }else{
             res.status(404).send({img: 'Image Not Found'})
         }
     }).catch(err => res.status(400).send(err))
})

module.exports = router;
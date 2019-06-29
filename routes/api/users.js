// Built-in node Modules
const fs = require('fs'),
      path = require('path');
// Custom npm Modules
const express = require('express'),
      bcryptjs = require('bcryptjs'),
      mkdirp   = require('mkdirp'),
      shelljs  = require('shelljs'),
      jwt      = require('jsonwebtoken'),
      passport = require('passport');
      router = express.Router();
// Custom Models
const User = require('./../../models/User');
// Custom Validations
const isRegisterValid = require('../../validations/registervalid'),
      isLoginValid    = require('../../validations/loginvalid');
// Relative Path /api/users
router.get('/', (req, res) => res.json({msg: 'Users Works'}));
// Public Route
router.post('/register', (req, res) => {
    let errors = isRegisterValid(req.body);
    if(Object.entries(errors).length === 0){
        User.findOne({email: req.body.email}).then((result) => {
            if(result){
                res.status(400).send({
                    email: 'Email already exist'
                })
            }
            else{
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password1,
                });
                newUser.save().then(user=>{
                    shelljs.mkdir('-p', path.resolve(`client/src/data/${user.id}`));
                    res.send(user);
                }).catch(err=>res.status(400).send(err));
            }
        });
    }
    else{
        res.status(400).send(errors);
    }
        
    
});
// Public Route
router.post('/login', (req, res) => {
    const errors = isLoginValid(req.body);
    if(Object.entries(errors).length === 0){
        User.findOne({
            email: req.body.email
        }).then(user => {
            if(user){
                bcryptjs.compare(req.body.password, user.password, (err, success) => {
                    if(success){
                        const payload  = {
                            id  : user._id,
                            name: user.name,
                            email: user.email
                        }
                        jwt.sign(
                            payload,
                            "somesecret",
                            {expiresIn: 3600000},
                            (err, token) => {
                                if(err) throw err;
                                res.send({
                                    success: true,
                                    token
                                })
                            }
                        )
                    }
                    else
                        res.status(400).send({
                            password: "Password is incorrect"
                        });
                })
            }else{
                res.status(400).send({
                    email: "email not found"
                })
            }
        })
    }
    else{
        res.status(400).send(errors);
    }
    
});
// Private Route
router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.send(req.user);
})
module.exports = router;


const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
})

const Image = mongoose.model('images', imageSchema);

module.exports = Image;
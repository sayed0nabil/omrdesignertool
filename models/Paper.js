

const mongoose = require('mongoose');

const paperSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    access:{
        type: Boolean,
        required: true
    },
    content: {
        type: String
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
})

const Paper = mongoose.model('papers', paperSchema);

module.exports = Paper;
const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    Name: {
        type:String,
        required:true
    },
    Surname: {
        type:String,
        required:true
    },
    CreatedDate: {
        type:Date,
        default:Date.now
    },
    City: {
        type:String,
        required:true
    },
    Address: {
        type:String,
        required:false
    },
    Phone: {
        type:String,
        required:false
    },
});

module.exports = mongoose.model('Users', postSchema, 'PERSON')
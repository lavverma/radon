const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    price: {
        indianPrice: String,
        europePrice: String,
    },
    year: {
        type: Number,
        default: 2021
    },
    tags: [String],
    authorName: String,
    tootalPages: Number,
    stockAvailable: Boolean
}, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema) //newbooks

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover

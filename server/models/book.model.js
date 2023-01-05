const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    createdBy: {
        type: String,
    },
    productName: {
        type: String,
    },
    bookAuthor: {
        type: String,
    },
    bookGenre: {
        type: String,
    },
    bookFormat: {
        type: String,
    },
    productPrice: {
        type: String,
    },
    productCategory: {
        type: String,
    },
    productDescription: {
        type: String,
    },
    productImg: {
        type: String,
    },
    productRating: {
        type: String,
    },
    productComment: {
        type: String, 
    },
}, 
{ timestamps: true });

module.exports.Book = mongoose.model("Book", BookSchema);
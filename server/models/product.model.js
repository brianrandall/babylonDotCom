const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    createdBy: {
        type: String,
    },
    productName: {
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
    }
}, 
{ timestamps: true });

module.exports.Product = mongoose.model("Product", ProductSchema);
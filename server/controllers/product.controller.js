const { Product } = require('../models/product.model'); 
const { faker } = require('@faker-js/faker')
 
module.exports.index = (req, res) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createProduct = (req, res) => {
    console.log(req.body)
    Product.exists({productName : req.body.productName})
        .then(productExists => {
            if (productExists) {
                return Promise.reject("product already exists....")
            }
            return Product.create(req.body)
        })
        .then(saveResult => res.json(saveResult)) 
        .catch(err => res.status(400).json(err));
}

module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json(err));
}

module.exports.getAllProductsByRating = (req, res) => {
    Product.find({productRating: req.params.rating})
        .then(productsByRating => res.json(productsByRating))
        .catch(err => res.json(err));
}


module.exports.getAllProductsByCategory = (req, res) => {
    Product.find({productCategory: req.params.category})
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json(err));
}

module.exports.getOneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json(err));
}

module.exports.updateProduct = (req, res) => {
    console.log(req.body)
    Product.findOneAndUpdate({_id:req.params}, req.body, {new:true, runValidators:true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.status(400).json(err));
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err));
}

module.exports.seedProducts = (req, res) => {
    const categories = ['Appliances', 'Arts & Crafts', 'Books', 'Automotive', 'Baby', 'Beauty & Personal Care', 'Camera & Photo Products', 'CDs & Vinyl', 'Cell Phones & Accessories', 'Clothing, Shoes & Jewelery', 'Computers & Accessories', 'Electronics', 'Gift Cards', 'Grocery', 'Home & Kitchen', 'Industrial & Scientific', 'Kitchen & Dining', 'Office Products', 'Patio, Lawn & Garden', 'Pet Supplies', 'Software', 'Sports & Outdoors', 'Tools & Home Improvement', 'Toys & Games', 'Video Games', ]
    const products = []
    for (let i = 0; i < 2000; i++) {
        products.push(
            {
                createdBy: faker.internet.userName(),
                productName: faker.commerce.productName(),
                productCategory: categories[Math.floor(Math.random() * categories.length)],
                productPrice: faker.commerce.price(1, 3000, 2, '$'),
                productDescription: faker.commerce.productDescription(),
                productImg: faker.image.image(),
                productRating: faker.datatype.float({min: 0, max: 5, precision: 0.1}),
                productComment: faker.random.words(20)
            }
        ) 
    }
    Product.insertMany(products)
    .then(saveResult => res.json(saveResult)) 
    .catch(err => res.status(400).json(err))
}
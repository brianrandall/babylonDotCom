const ProductController = require('../controllers/product.controller');

module.exports = function(app) {
    app.get('/api', ProductController.index);
    app.post('/api/product', ProductController.createProduct)
    app.get('/api/seed', ProductController.seedProducts) 
    app.get('/api/product', ProductController.getAllProducts);
    app.get('/api/product/:category', ProductController.getAllProductsByCategory);
    app.get('/api/product/:id', ProductController.getOneProduct);
    app.put('/api/product/:id', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);  
}
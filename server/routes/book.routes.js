const BookController = require('../controllers/book.controller');

module.exports = function(app) {
    app.post('/api/book', BookController.createBook)
    app.get('/api/book/seed', BookController.seedBooks)
    app.get('/api/book', BookController.getAllBooks);
    app.get('/api/book/:id', BookController.getOneBook);
    app.get('/api/book/genre/:genre', BookController.getBooksByGenre);
    app.get('/api/book/format/:format', BookController.getBooksByFormat);
    app.put('/api/book/:id', BookController.updateBook);
    app.delete('/api/book/:id', BookController.deleteBook);

}
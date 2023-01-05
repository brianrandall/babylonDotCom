const { Book } = require('../models/book.model'); 
const { faker } = require('@faker-js/faker')

module.exports.seedBooks = (req, res) => {
    const formats = ['Paperback', 'Hardcover', 'Audible Audiobook']
    const genres = ['Arts & Photograpgy', 'Biographies & Memoirs', 'Business', 'Childrens Books', 'Comics & Graphic Novels', 'Computers & Technology', 'Cookbooks, Food & Wine', 'Crafts & Hobbies', 'Educational', 'Engineering & Transportation', 'Health, Fitness & Dieting', 'History', 'Humor', 'Law', 'Literature & Fiction', 'Medical Books', 'Mystery, Thriller & Suspense', 'Parenting & Relationships', 'Politics & Social Science', 'Religion & Spirituality', 'Romance', 'Science & Math', 'Sci-Fi & Fantasy', 'Self-Help', 'Sports & Outdoors', 'Test Preparation', 'Travel' ]
    const books = []
    for (let i = 0; i < 500; i++) {
        books.push(
            {
                createdBy: faker.internet.userName(),
                productName: faker.music.songName(),
                bookAuthor: faker.name.fullName(),
                bookGenre: genres[Math.floor(Math.random() * genres.length)],
                productCategory: 'Books',
                bookFormat: formats[Math.floor(Math.random() * formats.length)],
                productPrice: faker.commerce.price(1, 100, 2, '$'),
                productDescription: faker.commerce.productDescription(),
                productImg: faker.image.image(),
                productRating: faker.datatype.float({min: 0, max: 5, precision: 0.1}),
                productComment: faker.random.words(20)
            }
        ) 
    }
    Book.insertMany(books)
    .then(saveResult => res.json(saveResult)) 
    .catch(err => res.status(400).json(err))
}

module.exports.getAllBooks = (req, res) => {
    Book.find()
        .then(allBooks => res.json(allBooks))
        .catch(err => res.json(err));
}

module.exports.getOneBook = (req, res) => {
    Book.findOne({_id:req.params.id})
        .then(oneBook => res.json(oneBook))
        .catch(err => res.json(err));
}

module.exports.getBooksByGenre = (req, res) => {
    Book.find({bookGenre: req.params.genre})
        .then(booksByGenre => res.json(booksByGenre))
        .catch(err => res.json(err));
}

module.exports.getBooksByFormat = (req, res) => {
    Book.find({bookFormat: req.params.format})
        .then(booksByFormat => res.json(booksByFormat))
        .catch(err => res.json(err));
}

module.exports.createBook = (req, res) => {
    console.log(req.body)
    Book.exists({bookName : req.body.bookName})
        .then(bookExists => {
            if (bookExists) {
                return Promise.reject("book already exists....")
            }
            return Book.create(req.body)
        })
        .then(saveResult => res.json(saveResult)) 
        .catch(err => res.status(400).json(err));
}

module.exports.updateBook = (req, res) => {
    Book.findOneAndUpdate({_id:req.params.id},
        req.body,
        {new:true, runValidators:true})
        .then(updatedBook => res.json(updatedBook))
        .catch(err => res.status(400).json(err));
}

module.exports.deleteBook = (req, res) => {
    Book.deleteOne({_id:req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err));
}


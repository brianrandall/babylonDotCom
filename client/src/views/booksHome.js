import React, { useEffect, useState } from 'react'
import NavBar from '../components/navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'

const BooksMain = () => {

    const [books, setBooks] = useState([])

    const genres = ['Arts & Photograpgy', 'Biographies & Memoirs', 'Business', 'Childrens Books', 'Comics & Graphic Novels', 'Computers & Technology', 'Cookbooks, Food & Wine', 'Crafts & Hobbies', 'Educational', 'Engineering & Transportation', 'Health, Fitness & Dieting', 'History', 'Humor', 'Law', 'Literature & Fiction', 'Medical Books', 'Mystery, Thriller & Suspense', 'Parenting & Relationships', 'Politics & Social Science', 'Religion & Spirituality', 'Romance', 'Science & Math', 'Sci-Fi & Fantasy', 'Self-Help', 'Sports & Outdoors', 'Test Preparation', 'Travel' ]

    const formats = ['Paperback', 'Hardcover', 'Audible Audiobook']

    useEffect(() => {
        axios.get('http://localhost:8000/api/book')
            .then(res => setBooks(res.data))
            .catch(err => console.log(err))
    }, [])

    console.log(books)




  return (
    <div>
        <NavBar />
        <img src={require('../components/img/babylonBooks.png')} className='booksLogo' width='300px' style={{marginTop: '20px'}}/>
        <div className='booksContainer'> 
            <div className='leftBookCol'>
                <strong>Popular Genres</strong>
                <div className='genres'>
                {genres.map((category, i) => {
                    return (
                    <div key={i}>
                        <Link to={`/books/${category}`}>
                            {category}
                        </Link>
                    </div>
                    )
                })}
                </div>
                <strong>Book Formats</strong>
                <div className='genres'>
                {formats.map((format, i) => {
                    return (
                    <div key={i}>{format}</div>
                    )
                })}
                </div>

            </div>
            <div className='rightBookCol'>
                <h4>
                    Best Sellers
                </h4>
                <div className='bestSellers'>
                    {books.slice(0, 30).map((book, i) => {
                    return (
                    <div key={i} className='bestSellerBooks'>
                        <Link to={`/book/${book._id}`}>
                            <img src={book.productImg} width='150px' />
                        </Link>
                        <span style={{fontSize: 'x-small'}}>{book.productName}</span>
                        <span style={{fontSize: 'x-small', fonstStyle: 'italic'}}>Rating {book.productRating} / 5</span>
                        <span style={{fontSize: 'x-small', color: 'red'}}>{book.productPrice}</span>
                        
                    </div>
                    )
                })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default BooksMain
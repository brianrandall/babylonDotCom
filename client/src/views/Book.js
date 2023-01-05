import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import NavBar from '../components/navbar'

const Book = () => {

    const [book, setBook] = useState({})
    const [booksByGenre, setBooksByGenre] = useState([])

    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/book/${id}`)
            .then(res => setBook(res.data))
            .catch(err => console.log(err))
    }, [id])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/book/genre/${book.bookGenre}`)
            .then(res => setBooksByGenre(res.data))
            .catch(err => console.log(err))
    }, [book])

    console.log('***', booksByGenre)


  return (
    <div>
        <NavBar/>
        <div className='bookContainer'>
            <div className='bookImg'>
                <img src={book.productImg} width='100%' />
            </div>
            <div className='bookInfo'>
                <h3>{book.productName}</h3>
                <span style={{fontSize: 'small'}}> by {book.bookAuthor}</span>
                <span style={{fontSize: 'small'}}> Rating {book.productRating} / 5</span>
                <hr/>
                <span style={{marginTop: '5px'}}>{book.bookFormat}</span>
                <hr/>
                <span style={{fontWeight: 'bold', fontSize: 'small'}}>About this book...</span>
                <span>{book.productDescription}</span>
            </div>
            <div className='purchaseBook'>
                <span style={{fontSize: 'small', fontWeight: 'bold'}}>Price: </span>
                <span style={{fontSize: 'small', color: 'red'}}>{book.productPrice}</span>
                <span style={{fontSize: 'small', marginTop: '15px'}}>FREE delivery if you spend $25 or more on items shipped by Babylon</span>
                <span style={{fontSize: 'large', marginTop: '15px', color: 'green'}}>In Stock</span>
                <select>
                    <option>Qty: 1</option>
                    {
                        (() => {
                            let options = []
                            for (let i = 1; i <= 20; i++) {
                                options.push(<option key={i} value={i}>{i}</option>)
                            }
                            return options
                        })()
                    }    
                </select>
                <div className='addToCart'>
                    <span>Add to Cart</span>
                </div>
                <div className='buyNow'>
                    <span>Buy Now</span>
                </div>
            </div>
        </div>
        <div style={{marginLeft: '1px'}}>
        <Link to={'/books'}>Back to Books</Link> or...
        </div>
        <div className='similarBooks'>
            <span> See more {book.bookGenre} </span>
            <div className='bestSellers'>
                    {booksByGenre.slice(0, 10).map((book, i) => {
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
  )
}

export default Book
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import BestElectronics from './bestElectronics'
import NewAppliances from './newAppliances'

const ProductList = () => {

    const [books, setBooks] = useState([])

    const backgroundImg = ['produce', 'tools', 'holiday']
    let picture = backgroundImg[Math.floor(Math.random() * backgroundImg.length)]
    console.log(picture);

    useEffect(() => {
        axios.get('http://localhost:8000/api/book')
            .then(res => setBooks(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
            <div className={picture}>
                <div className='categoryContainer'>
                    <div className='mainCategory'>
                        <span>Get in style with </span>
                        <span>BabylonEssentials</span>
                        <img src={require('./img/site_ads/apparel.png')} />
                    </div>
                    <div className='mainCategory'>
                    <span>Shop our awesome</span>
                    <span> Black Friday deals</span>
                        <img src={require('./img/site_ads/blFriday.png')} />
                    </div>
                    <div className='mainCategory'>
                    <span>Conquer the outdoors with </span>
                        <span>BabylonActive</span>
                        <img src={require('./img/site_ads/outdoor.png')} />
                    </div>
                    <div className='mainCategory'>
                        <span>Get cozy with </span>
                        <span>BabylonOutdoor</span>
                        <img src={require('./img/site_ads/patio.png')} />
                    </div>
                </div>
                <h2 style={{marginLeft: '3%'}}>
                    Shop our collection of Best Selling novels on <Link to={'/books'}>BabylonBooks</Link>
                </h2>
                <div className='bestSellers'>
                    {books.slice(0, 5).map((book, i) => {
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
                <div className='bestSellers'>
                    {books.slice(6, 11).map((book, i) => {
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
                <p>
                    <BestElectronics />
                </p>
                <p>
                    <NewAppliances />
                </p>

            </div>
    )
}

export default ProductList
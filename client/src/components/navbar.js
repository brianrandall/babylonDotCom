import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {

    const username = ''
    const num = 9
    const nav = useNavigate()

    const [selectedCategory, setSelectedCategory] = useState('')
    const [searchTerm, setSearchTerm] = useState('')

    const categories = ['Appliances', 'Arts & Crafts', 'Books', 'Automotive', 'Baby', 'Beauty & Personal Care', 'Camera & Photo Products', 'CDs & Vinyl', 'Cell Phones & Accessories', 'Clothing, Shoes & Jewelery', 'Computers & Accessories', 'Electronics', 'Gift Cards', 'Grocery', 'Home & Kitchen', 'Industrial & Scientific', 'Kitchen & Dining', 'Office Products', 'Patio, Lawn & Garden', 'Pet Supplies', 'Software', 'Sports & Outdoors', 'Tools & Home Improvement', 'Toys & Games', 'Under $10', 'Video Games', ]
    console.log(categories);

    const searchFor = (e) => {
        {selectedCategory === '' ? nav(`/search/${searchTerm}`) : nav(`/search/${selectedCategory}/${searchTerm}`)}
    }


  return (
    <div className='nav'>
        <Link to={'/'}>
            <img src={require('./img/logo.png')} alt='logo' height='30px'/>
        </Link>
        <span>
            {username === '' ? 'Welcome Guest' : `Welcome ${username}`}
        </span>
        <div className='search'>
            <select onChange={(e) => setSelectedCategory(e.target.value)} >
                <option value=''>All</option>
                    {categories.map((category, i) => {
                    return (
                    <option key={i}>{category}</option>
                    )
                })}
            </select>
            <div className='searchBar'>
                <input type='text' placeholder='Search' className='navText' onChange={(e) => setSearchTerm(e.target.value)} ></input>
                <span> {selectedCategory === '' ? '...in All Categories' : `...in ${selectedCategory}`}</span>
            </div>
            <div className='navButton' onClick={ searchFor } >
            <img src={require('./img/search.png')} height='20px' />
            </div>
        </div>
        <div>
            Login 
        </div>
        <div>
            Orders
        </div>
        <div className='cartDiv'>
            <div className='cartNum'>{num}</div>
            <img src={require('./img/cart.png')} height='20px' width='30px' />
            <small style={{marginLeft: '3px'}}>Cart</small>
        </div>

    </div>
  )
}

export default NavBar
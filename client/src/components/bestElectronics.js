import React, { useEffect, useState }from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const BestElectronics = () => {

    const [electronics, setElectronics] = useState([])


    useEffect(() => {
        axios.get('http://localhost:8000/api/product/Electronics')
            .then(res => setElectronics(res.data))
            .catch(err => console.log(err))
    }, [])

  return (
    <div>
        <h2 style={{marginLeft: '3%'}}>
                    Best sellers in Electronics
                </h2>
        <div className='bestSellers'>
                    {electronics.slice(0, 5).map((x, i) => {
                    return (
                    <div key={i} className='bestSellerBooks'>
                        <Link to={`/`}>
                            <img src={x.productImg} width='150px' alt='pictureOfAnElectronicItem'/>
                        </Link>
                        <span style={{fontSize: 'x-small'}}>{x.productName}</span>
                        <span style={{fontSize: 'x-small', fonstStyle: 'italic'}}>Rating {x.productRating} / 5</span>
                        <span style={{fontSize: 'x-small', color: 'red'}}>{x.productPrice}</span>
                    </div>
                    )
                })}
                </div>
    </div>
  )
}

export default BestElectronics
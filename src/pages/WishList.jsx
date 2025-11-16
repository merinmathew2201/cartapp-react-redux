import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function WishList() {
  const userWishList = useSelector(state=>state.wishlistReducer)
  return (
    <>
    <Header/>
      <div className='m-5 container'>
      {
        userWishList?.length>0?

        <>
          <h1 className='pt-5 fw-bold text-primary text-center'>Wishlist</h1>
          <div className="row ">
          {
            userWishList?.map(product=>(
              <div key={product?.id} className="col-md-3 my-2 ">
                  <Card className='border' >
                  <Card.Img height={'250px'} variant="top" src={product?.thumbnail} />
                  <Card.Body className='text-center'>
                    <Card.Title>{product?.title}</Card.Title>
                    <button className='btn'><FontAwesomeIcon icon={faHeartCircleXmark} className='text-danger fs-4' /></button>
                    <button className='btn'><FontAwesomeIcon icon={faCartPlus} className='text-success fs-4' /></button>
                  </Card.Body>
                </Card>
              </div>
            ))
          }
        </div>
        </>
      :
      <div style={{minHeight:'80vh'}} className='d-flex justify-content-center align-items-center flex-column'>
        <img width={'25%'} src="https://shanzandnikz.com/assets/imgs/vector/empty-cart.gif" alt="empty cart" />
        <h3>Your Wishlist is empty!!!</h3>
        <Link to={'/'} className='btn btn-primary'> Shop More</Link>
      </div>
      }
      </div>
    </>
  )
}

export default WishList
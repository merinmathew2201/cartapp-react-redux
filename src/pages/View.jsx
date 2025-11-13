import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function View() {
  return (
    
    <>
      <Header/>
      <div className="my-5 container">
        <div className="row py-5">
          <div className="col-md-6">
            <img height={'500px'} src="https://swissbeauty.in/cdn/shop/files/FOP_a5fd0225-d379-445c-98a5-252192cc6e28.jpg?v=1753704594&width=620" alt="" />
            <div className='d-flex  justify-content-between my-5'>
              <button className='btn btn-primary'>ADD TO WISHLIST</button>
              <button className='btn btn-success'>ADD TO CART</button>
            </div>
          </div>
          <div className="col-md-6">
            <h1 className='fw-bold'>title</h1>
            <h4 className='text-danger'>price</h4>
            <p>Brand</p>
            <p>Category</p>
            <p><strong>Description</strong>:</p>
            <h5 className='fw-bold'>Client Reviews</h5>
            <div className="p-2 border rounded shadow">
              <h6><strong>name:</strong>comment</h6>
              <p><strong>Rating:</strong>number<FontAwesomeIcon icon={faStar} className='text-warning' /></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default View
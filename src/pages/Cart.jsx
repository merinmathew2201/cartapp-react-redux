import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


function Cart() {
  return (
    <>
    <Header/>
    <div className='container pt-5'>
      <h1 className='fw-bold text-danger my-5'>Cart Summary</h1>
      <div className="row mb-5">
        <div className="col-md-8 p-5 rounded border ">
          <table className="table ">
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>name</td>
                <td><img width={'50px'} height={'50px'} src="https://swissbeauty.in/cdn/shop/files/FOP_a5fd0225-d379-445c-98a5-252192cc6e28.jpg?v=1753704594&width=620" alt="product" /></td>
                <td>
                  <div className='d-flex'>
                    <button className="btn fs-3" >-</button>
                    <input style={{width:'50px'}} type="text" className="form-control" value={0} readOnly />
                    <button className="btn fs-4">+</button>

                  </div>
                </td>
                <td>$200</td>
                <td><buttton className="btn"><FontAwesomeIcon icon={faTrash} className='text-danger' /></buttton></td>
              </tr>
            </tbody>
          </table>
          <div className="float-end mt-3">
            <button className="btn btn-danger me-5">EMPTY CART</button>
            <Link to={'/'} className='btn btn-info'>SHOP MORE</Link>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className='p-5 rounded shadow border'>
            <h3 className='fw-bold'>Total Amount: <span className='text-danger'> $19.99</span></h3>
            <hr />
            <div className="d-grid">
              <button className='btn btn-success'>CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Cart
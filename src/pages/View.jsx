import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import Swal from 'sweetalert2'
import { addToCart } from '../redux/slices/cartSlice'

function View() {
  // get path parameter from url
  const {id} = useParams()
  // console.log(id);
  // state to store product details
  const [product,setProduct] = useState({})
  // console.log(product);
  const dispatch = useDispatch()
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const userCart = useSelector(state=>state.cartReducer)
  console.log(userCart);
  
  useEffect(()=>{
    getProductDetails()
  },[])

  const getProductDetails =()=>{
    const allProducts = JSON.parse(sessionStorage.getItem("products"))
    setProduct(allProducts.find(item=>item.id==id))
  }

  const handleAddToWishlist = ()=>{
    const existingProduct = userWishlist?.find(item=>item.id==id)
    if(existingProduct){
      Swal.fire({
        title: 'Sorry!!',
        text: ' Product already in your wishlist...',
        icon: 'error',
        confirmButtonText: 'OK'
})
    }else{
      dispatch(addToWishlist(product))
    }
  }

  const handleAddCart = ()=>{
    const existingProduct = userCart?.find(item=>item.id==id)
    dispatch(addToCart(product))
    Swal.fire({
        title: 'Success',
        text: existingProduct?  ` Quantity of ${product.title}, updated in your cart`:"Product added to your Cart",
        icon: 'success',
        confirmButtonText: 'OK'
})

  }
  
  return (
    
    <>
      <Header/>
      <div className="my-5 container">
        <div className="row py-5">
          <div className="col-md-6">
            <img height={'500px'} src={product?.thumbnail} alt="" />
            <div className='d-flex  justify-content-between my-5'>
              <button onClick={handleAddToWishlist} className='btn btn-primary'>ADD TO WISHLIST</button>
              <button onClick={handleAddCart} className='btn btn-success'>ADD TO CART</button>
            </div>
          </div>
          <div className="col-md-6">
            <h1 className='fw-bold'>{product?.title}</h1>
            <h4 className='text-danger'>$ {product?.price}</h4>
            <p><strong>Brand   :</strong>{product?.brand}</p>
            <p><strong>Category  :</strong>{product?.category}</p>
            <p><strong>Description</strong>: {product?.description}</p>
            <h5 className='fw-bold'>Client Reviews</h5>
            {
              product?.reviews?.length>0 && 
              product?.reviews?.map((item,index)=>(
                <div key={index} className="p-2 border rounded my-2 shadow">
                  <h6><strong>{item.reviewerName}:</strong>{item.comment}</h6>
                  <p><strong>Rating: </strong>{item?.rating}<FontAwesomeIcon icon={faStar} className='text-warning' /></p>
                </div>
              ))
              }
          </div>
        </div>
      </div>
    </>
  )
}

export default View
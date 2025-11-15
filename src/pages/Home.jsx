import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getAllProducts } from '../redux/slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'

function Home() {
  const dispatch = useDispatch()
  const {allProducts,loading,error} = useSelector((state)=>state.productReducer)
  console.log(allProducts);
  

  useEffect(()=>{
    dispatch(getAllProducts())
  },[])

  return (
    <>
    <Header/>
    <div className='m-5'>
      {
        loading?
        <div className="p-5 text-center">
          <img width={'50px'} src="https://i.sstatic.net/kOnzy.gif" alt="loading" />
          <span>Loading....</span>
        </div>
        :
        <div className="row py-5">
        {
          allProducts?.length>0?
          allProducts?.map(product=>(
            <div key={product?.id} className="col-md-3 my-2 ">
              <Card className='border' >
              <Card.Img height={"250px"} variant="top" src={product?.thumbnail} />
              <Card.Body className='text-center'>
                <Card.Title>{product?.title.slice(0,18)}...</Card.Title>
                
                <Link to={`./products/${product?.id}/view`} className='btn btn-primary'>View more...</Link>
              </Card.Body>
            </Card>
            </div>
          ))
          :
          <p className='fw-bold text-center'>Products not Found</p>

        }
      </div>
      }
      </div>
    </>
  )
}

export default Home
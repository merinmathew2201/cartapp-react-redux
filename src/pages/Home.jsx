import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <Header/>
    <div className='m-5'>
      <div className="row py-5">
        <div className="col-md-3 my-2 ">
          <Card className='border' >
          <Card.Img height={"250px"} variant="top" src="https://swissbeauty.in/cdn/shop/files/FOP_a5fd0225-d379-445c-98a5-252192cc6e28.jpg?v=1753704594&width=620" />
          <Card.Body className='text-center'>
            <Card.Title>Card Title</Card.Title>
            
            <Link to={'./products/1/view'} className='btn btn-primary'>View more...</Link>
          </Card.Body>
        </Card>
        </div>
      </div>
      </div>
    </>
  )
}

export default Home
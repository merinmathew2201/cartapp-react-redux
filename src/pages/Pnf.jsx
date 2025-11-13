import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <>
    <Header/>
    <div className='d-flex justify-content-center align-items-center flex-column my-5'>
      <img height={'300px'} width={'400px'} src="https://assets-v2.lottiefiles.com/a/6915cc2c-1178-11ee-a783-6b784bd85af7/vUmMyG7Nho.gif" alt="" />
      <p>Sorry! The Page you have been looking for is not here.</p>
      <Link to={'/'} className="btn btn-primary ">Go Back Home</Link>
    </div>
    </>
  )
}

export default Pnf
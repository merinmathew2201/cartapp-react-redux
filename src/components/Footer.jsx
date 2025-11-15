import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faPhone, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:'250px'}} className='bg-primary text-light p-3'>
      <div className=' d-flex'>
        <div className='mx-5'>
          <h6 className='fw-bold'><FontAwesomeIcon className='me-1' icon={faTruckFast} />DailyCart</h6>
          <p>Designed and built with all the love in the world by  the luminar team  with the help of our contributors.</p>
          <p>Code licensed Luminar,docs CC by 3.0</p>
          <p>Currently v5.3.2</p>
        </div>
        <div className='mx-5 d-flex flex-column'>
          <h6 className='fw-bold'>Links</h6>
          <Link to={'/'} className='text-decoration-none text-light'>Home</Link>
          <Link to={'/wishlist'} className='text-decoration-none text-light'>Wishlist</Link>
          <Link to={'/cart'} className='text-decoration-none text-light'>Cart</Link>
        </div>
        <div className='mx-5 d-flex flex-column'>
          <h6 className='fw-bold'>Guides</h6>
          <a className='text-decoration-none text-light' href='https://react.dev/'>React</a>
          <a className='text-decoration-none text-light' href='https://react-bootstrap.github.io/'>React Bootstrap</a>
          <a href='https://www.npmjs.com/package/react-router-dom' className='text-decoration-none text-light'>React Router</a>
        </div>
        <div>
          <h6 className='fw-bold'>Contact Us</h6>
          <div className='d-flex align-items-center'><input type="text" className="form-control me-2" placeholder='Enter your email here' /><button className='btn'><FontAwesomeIcon icon={faArrowRight} className='text-light'/></button></div>
          <FontAwesomeIcon icon={faTwitter} className='me-2 mt-3'/>
          <FontAwesomeIcon icon={faInstagram} className='me-2 mt-3'/>
          <FontAwesomeIcon icon={faFacebook} className='me-2 mt-3' />
          <FontAwesomeIcon icon={faLinkedin} className='me-2 mt-3'/>
          <FontAwesomeIcon icon={faGithub} className='me-2 mt-3'/>
          <FontAwesomeIcon icon={faPhone} />
        </div>
      </div>
      <p className='text-center pt-5'>Copyright &copy; August 2025 Batch, Daily Cart. Built with React Redux</p>
    </div>
    
  )
}

export default Footer
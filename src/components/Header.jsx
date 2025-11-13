import { faCartShopping, faHeart, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Navbar,Container,Nav, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar expand="lg" className="bg-primary fixed-top">
      <Container>
        <Navbar.Brand><Link to={'/'} className='text-decoration-none text-light '><FontAwesomeIcon className='me-1' icon={faTruckFast} />DailyCart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link  ><Link to={'/wishlist'} className='text-decoration-none text-light '><FontAwesomeIcon className='me-1 text-danger' icon={faHeart} />Wishlist<Badge bg="secondary" className='ms-1'>10</Badge></Link></Nav.Link>
            <Nav.Link ><Link to={'/cart'} className='text-decoration-none text-light '><FontAwesomeIcon className='me-1 text-success' icon={faCartShopping} />Cart <Badge bg="secondary" className='ms-1'>2</Badge></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
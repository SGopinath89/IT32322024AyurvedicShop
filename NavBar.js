import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import './NavBar.css';
import logo from './Logo.png';
 
function NavBar(){
    return(
        <>
            <Navbar  className='navbr'>
                <Container>
                    <Navbar.Brand href='#Home'className='nbrand'>
                        <img src={logo} alt="Logo" className="navbar-logo" />
                    </Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link href = "#home" className='link'>Home</Nav.Link>
                        <Nav.Link href='#shop' className='link'>Shop</Nav.Link>
                        <Nav.Link href ='#aboutus' className='link'>About Us</Nav.Link>
                        <Nav.Link href='#getintouch' className='link'>Get in Touch</Nav.Link>
                        <Nav.Link href='#currency' className='link'>LKR</Nav.Link>
                        <Nav.Link href='#price' className='link'>0.00</Nav.Link>
                        <Nav.Link href='#items' className='link'>0 items</Nav.Link>
                        <Nav.Link href='#cart' className='link'>Cart</Nav.Link>
                        <Nav.Link href='#login' className='link'>Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;
import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
const Header = () => {
    return (
        <Container className='mb-5'>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism without fear or favour</small></p>
                <p className=''>{moment().format('dddd, MMMM D, YYYY')}</p>
            </div>
            <div className='d-flex bg-info px-4 py-2 rounded'>
                <Button variant='danger'>Latest</Button>
                <Marquee pauseOnHover speed={100}>Journalism without fear or favour Journalism without fear or favour</Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="">Home</Nav.Link>
                            <Nav.Link href="">About</Nav.Link>
                            <Nav.Link href="">Career</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            <Nav.Link href="">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="">
                                <Button variant='secondary'>Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;
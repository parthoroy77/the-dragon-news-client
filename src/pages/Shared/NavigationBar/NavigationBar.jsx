import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
const NavigationBar = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Container>
                <Navbar collapseOnSelect expand="lg" bg='light' variant="light">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='text-decoration-none me-3 text-secondary' to='/category/0'>Home</Link>
                            <Link className='text-decoration-none me-3 text-secondary' to=''>About</Link>
                            <Link className='text-decoration-none me-3 text-secondary' to=''>Contact</Link>
                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            {
                                user &&
                                <FaUserCircle style={{ fontSize: '1.5rem' }}></FaUserCircle>
                            }
                            {user
                                ? <Button variant='secondary'>LogOut</Button>
                                : <Link to='/login'>
                                    <Button variant='secondary'>Login</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavigationBar;
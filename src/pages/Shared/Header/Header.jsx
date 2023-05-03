import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import NavigationBar from '../NavigationBar/NavigationBar';
const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <Container className=''>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism without fear or favour</small></p>
                <p className=''>{moment().format('dddd, MMMM D, YYYY')}</p>
            </div>
            <div className='d-flex bg-info px-4 py-2 rounded'>
                <Button variant='danger'>Latest</Button>
                <Marquee pauseOnHover speed={100}>Journalism without fear or favour Journalism without fear or favour</Marquee>
            </div>
        </Container>
    );
};

export default Header;
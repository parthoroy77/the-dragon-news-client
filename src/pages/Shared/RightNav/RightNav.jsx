import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'
import QZone from '../Q-Zone/QZone';
import bg from '../../../assets/bg.png'
import './RightNav.css'
const RightNav = () => {
    return (
        <div>
            <div>
                <h4>Login With</h4>
                <Button className='mb-2 w-100' variant='outline-primary'><FaGoogle></FaGoogle> Login With Google</Button>
                <Button className='mb-2 w-100' variant='outline-secondary'><FaGithub></FaGithub> Login With GitHub</Button>
            </div>
            <div className='mt-5'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item>
                        <FaFacebook /> Facebook    
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FaInstagram /> Instagram    
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FaTwitter /> Twitter    
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <QZone></QZone>
            </div>
            <div className='mt-3 learn-more'>
                <div className='text-center text-white'>
                    <h2>
                        Create an <br /> Amazing <br /> Newspaper
                    </h2>
                    <p>
                        Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                    </p>
                    <Button variant='danger'>Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;
import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import RightNav from '../pages/Shared/RightNav/RightNav';

const NewsLayout = () => {
    return (
        <div>
            <div>
                <Header></Header>
                <Container className='mt-5'>
                    <Row>
                        <Col lg={9}>
                            <Outlet></Outlet>
                        </Col>
                        <Col lg={3}>
                            <RightNav></RightNav>
                        </Col>
                    </Row>
                </Container>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default NewsLayout;
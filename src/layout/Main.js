import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shired/Footer/Footer';
import Header from '../Pages/Shired/Header/Header';
import LeftSideNav from '../Pages/Shired/LeftSideNav/LeftSideNav';
import RightSIdeNav from '../Pages/Shired/RightSIdeNav/RightSIdeNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="7">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="3">
                       <RightSIdeNav></RightSIdeNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;
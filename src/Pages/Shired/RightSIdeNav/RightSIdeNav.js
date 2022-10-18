import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa";
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSIdeNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Log in with Google</Button>{' '}
                <Button variant="outline-dark"><FaGithub></FaGithub> Log In with github</Button>{' '}
            </ButtonGroup>

            <div className='mt-5'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2' disabled><FaFacebook></FaFacebook> Cras justo odio</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch> Porta ac consectetur ac</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>

        </div>
    );
};

export default RightSIdeNav;
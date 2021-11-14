import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';

// import OwlCarousel from 'react-owl-carousel2';


export const banner1 = './images/slider1.png';
export const banner2 = './images/slider2.png';
export const banner3 = './images/slider3.png';

// const options = {
//     items: 1,
//     nav: true,
//     rewind: true,
//     autoplay: true
// };

// https://htmlstream.com/front-v4.0/demo-shop/index.html

const Banner = () => {



    return (
        <>
            <div className="main">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="slider-img-1">
                                <img src={banner1} alt="banner" />
                            </div>
                        </Col>
                        <Col md={6} className="m-auto">
                            <div className="caption-1">
                                <h2>Apple iPad Pro</h2>
                                <p>The iPad Pro lets you access your email, take notes, manage your schedule and tasks, and pretty much anything else you could need with a huge plethora of apps to pick from in</p>
                            </div>
                            <div className="add-to-cart d-flex">
                                <Button className="btn btn-primary btn1">$15 -Add to cart</Button>
                                <span className="add-icon" title="save for latter"><FontAwesomeIcon icon={faHeart} className="heart" /></span>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Banner

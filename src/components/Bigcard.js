import React from 'react';
import { Card, Row, Button, Col, Container } from 'react-bootstrap';

const bigImg1 = "./images/big1.jpg"
const bigImg2 = "./images/big2.jpg"

const Bigcard = () => {
    return (
        <>
            <Container fluid className="big-card">

                <Row>
                    <Col md={6} sm={6}>
                        <Card className="big-img">
                            <img src={bigImg1} />
                            <div className="inner-text">
                                <p className="text-danger">Limited Time Only</p>
                                <h1>70% OFF</h1>
                                <Row >
                                    <Col md={12} >
                                        <Row className="remove-gatter justify-content-md-center">
                                            <Col xs={4} md={4}>
                                                <div className="time-date text-center">
                                                    <span className="timing">365</span>
                                                    <div className="card-title">
                                                        <p>Days</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={4} md={4}>
                                                <div className="time-date text-center">
                                                    <span className="timing">24</span>
                                                    <div className="card-title">
                                                        <p>Hrs</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={4} md={4}>
                                                <div className="time-date text-center">
                                                    <span className="timing">00</span>
                                                    <div className="card-title">
                                                        <p>Mnts</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <div className="shop-btn">
                                    <Button variant="outline-primary" className="rounded-pill">Shop</Button>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={6} sm={6}>
                        <Card className="big-img">
                            <img src={bigImg2} />
                            <div className="inner-text">
                                <h3>$109.99</h3>
                                <h4>Nakto 26 Bicycle</h4>
                                <p className="text-white-50">NAKTO bicycles to save the environment and bring fun to our friends!</p>
                                <div className="shop-btn">
                                    <Button variant="outline-primary">Shop</Button>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Bigcard

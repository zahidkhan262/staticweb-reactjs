import { faReply, faShippingFast, faSms } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
const Services = () => {
    return (
        <>
            <div class="services-section">
                <Container>
                    <Row>
                        <Col md={4}>
                            <div class="services d-flex d-flex-1">
                                <div class="services-icon">
                                    <FontAwesomeIcon icon={faSms} className="ser-icon" />
                                </div>
                                <div class="services-info">
                                    <h3>24/7 Support</h3>
                                    <p>World wide from $27</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div class="services d-flex d-flex-1">
                                <div class="services-icon">
                                    <FontAwesomeIcon icon={faReply} className="ser-icon" />
                                </div>
                                <div class="services-info">
                                    <h3>30 Return</h3>
                                    <p>World wide from $27</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div class="services d-flex d-flex-1">
                                <div class="services-icon">
                                    <FontAwesomeIcon icon={faShippingFast} className="ser-icon" />
                                </div>
                                <div class="services-info">
                                    <h3>Free Delivery</h3>
                                    <p>World wide from $27</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Services

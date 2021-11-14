import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';




const Products = () => {
    return (
        <>
            <div className="products">
                <div className="products-heading text-center">
                    <h3>The better way to shop with Front top-products</h3>
                </div>

                <Container>
                    <Row>
                        <Col md={4}>
                            <Card>
                                <Row className="remove-gatter">
                                    <Col md={8}>
                                        <div className="grid-card">
                                            <img src="./images/a1.jpg" />
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="grid-card">
                                            <img src="./images/a18.jpg" />
                                        </div>
                                        <Row>
                                            <Col md={12}>
                                                <div className="grid-card">
                                                    <img src="./images/a18.jpg" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Card.Body className="text-center">
                                    <h4>T-shirt</h4>
                                    <p>Starting from $29.99</p>
                                    <div className="view-all">
                                        <Button variant="outline-primary">View All</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Row className="remove-gatter">
                                    <Col md={8}>
                                        <div className="grid-card">
                                            <img src="./images/a10.jpg" />
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="grid-card">
                                            <img src="./images/a15.jpg" />
                                        </div>
                                        <Row>
                                            <Col md={12}>
                                                <div className="grid-card">
                                                    <img src="./images/a13.jpg" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Card.Body className="text-center">
                                    <h4>Tech covers</h4>
                                    <p>Starting from $399.99</p>
                                    <div className="view-all">
                                        <Button variant="outline-primary">View All</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Row className="remove-gatter">
                                    <Col md={8}>
                                        <div className="grid-card">
                                            <img src="./images/a5.jpg" />
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="grid-card" border-0>
                                            <img src="./images/a6.jpg" />
                                        </div>
                                        <Row>
                                            <Col md={12}>
                                                <div className="grid-card">
                                                    <img src="./images/a8.jpg" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Card.Body className="text-center">
                                    <h4 >Caps</h4>
                                    <p>Starting from $13.99</p>
                                    <div className="view-all">
                                        <Button variant="outline-primary">View All</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <p className="text-center text-dark my-3">Limited time only, while stocks last.</p>
            </div>
        </>
    )
}

export default Products

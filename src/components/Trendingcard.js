import React, { useState } from 'react'
import { Row, Col, Container, Card, Button } from 'react-bootstrap';






const Trendingcard = () => {

    const [cardData] = useState([
        { image_path: "./images/a4.jpg", title: 'Herschel backpack in dark', price: 399, star_icon: "./images/star.png" },
        { image_path: "./images/a9.jpg", title: 'Herschel backpack in dark', price: 699, star_icon: "./images/star.png" },
        { image_path: "./images/a7.jpg", title: 'Herschel backpack in dark', price: 599, star_icon: "./images/star.png" },
        { image_path: "./images/a11.jpg", title: 'Herschel backpack in dark', price: 799, star_icon: "./images/star.png" },
        { image_path: "./images/a12.jpg", title: 'Herschel backpack in dark', price: 999, star_icon: "./images/star.png" },
        { image_path: "./images/a7.jpg", title: 'Herschel backpack in dark', price: 699, star_icon: "./images/star.png" },
        { image_path: "./images/a11.jpg", title: 'Herschel backpack in dark', price: 899, star_icon: "./images/star.png" },
        { image_path: "./images/a4.jpg", title: 'Herschel backpack in dark', price: 899, star_icon: "./images/star.png" },
    ]);



    return (
        <>
            <div className="trending">
                <div className="trending-heading text-center">
                    <h2>What's trending</h2>
                </div>
                <Container>
                    <Row md={4}>
                        {cardData.map((item) => {
                            console.log(item)
                            return (
                                <>
                                    <Col md={3} sm={6} xs={6}>
                                        <Card className="my-2">
                                            <img src={item.image_path} />
                                            <Card.Body>
                                                <p className="card_title">${item.title}</p>
                                                <div className="row">
                                                    <div className="d-flex-2 my-2">
                                                        <span><strong>${item.price}</strong></span>
                                                        <span className="rating">
                                                            <img src={item.star_icon} width="15px" height="15px" />
                                                            <img src={item.star_icon} width="15px" height="15px" />
                                                            <img src={item.star_icon} width="15px" height="15px" />
                                                            <img src={item.star_icon} width="15px" height="15px" />
                                                        </span>
                                                    </div>
                                                    <Button className="btn btn-primary my-1">Add to cart</Button>
                                                    <Button variant="outline-warning">Buy Now</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </>
                            )
                        })
                        }
                    </Row>
                </Container>
                <div className="add-to-cart text-center my-3">
                    <Button variant="outline-primary">View all products</Button>
                </div>
            </div>
        </>
    )
}

export default Trendingcard

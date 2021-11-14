import React from 'react'
import { Row, Col, Container, Navbar, ListGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const logo = './images/logo.svg';
const Footers = () => {
    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col md={3} sm={6}>
                            <div className="m-auto">
                                <Navbar.Brand href="/" className="logo">
                                    <img src={logo} alt="logo" />
                                </Navbar.Brand>
                                <div className="copy-right pt-5">
                                    <p>© Front. 2021 Htmlstream.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={6}>
                            <ListGroup className="text-center">
                                <h4>Account</h4>
                                <ListGroup.Item className="li">Placing an order</ListGroup.Item>
                                <ListGroup.Item className="li">Shipping options</ListGroup.Item>
                                <ListGroup.Item className="li">Tracking a package</ListGroup.Item>
                                <ListGroup.Item className="li">Country availability</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={3} sm={6}>
                            <ListGroup className="text-center">
                                <h4>Company</h4>
                                <ListGroup.Item className="li">Financing</ListGroup.Item>
                                <ListGroup.Item className="li">Recycling</ListGroup.Item>
                                <ListGroup.Item className="li">Return policy</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={3} sm={6}>
                            <ListGroup className="text-center">
                                <h4>Resources</h4>
                                <ListGroup.Item className="li">Help</ListGroup.Item>
                                <ListGroup.Item className="li">Your Account</ListGroup.Item>
                            </ListGroup>
                            <DropdownButton id="dropdown-item-button" title="Dropdown button" className="text-center my-2">
                                <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                                <Dropdown.Item as="button">Action</Dropdown.Item>
                                <Dropdown.Item as="button">Another action</Dropdown.Item>
                                <Dropdown.Item as="button">Something else</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                    </Row>
                </Container>
                <div className="social-icons text-center">
                    <FontAwesomeIcon icon={faFacebook} className="s-icon" />
                    <FontAwesomeIcon icon={faTwitter} className="s-icon" />
                    <FontAwesomeIcon icon={faInstagram} className="s-icon" />
                    <FontAwesomeIcon icon={faGithub} className="s-icon" />
                </div>
            </footer>
        </>
    )
}

export default Footers

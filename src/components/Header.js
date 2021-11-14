import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';


export const logo = './images/logo.svg';


const Header = () => {
    return (
        <>
            <Navbar bg="light" expand="lg" fixed="top">
                <Container>


                    <Navbar.Brand href="/" className="logo">
                        <img src={logo} alt="logo" />
                    </Navbar.Brand>


                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">


                        <Nav className="m-auto">
                            <Nav.Link className="px-3" exact to="/">Home</Nav.Link>
                            <NavDropdown className="px-3" title="Listing" id="basic-nav-dropdown">
                                <NavDropdown.Item to="/">Action</NavDropdown.Item>
                                <NavDropdown.Item to="/">Another action</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="px-3" to="/">Product Overview</Nav.Link>
                            <NavDropdown className="px-3" title="Blogs" id="basic-nav-dropdown">
                                <NavDropdown.Item to="/">Action</NavDropdown.Item>
                                <NavDropdown.Item to="/">Another action</NavDropdown.Item>
                                <NavDropdown.Item to="/">Something</NavDropdown.Item>
                                <NavDropdown.Item to="/">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>


                        <div classsName="social-icons">
                            <FontAwesomeIcon icon={faSearch} className="s-icon" />
                            <FontAwesomeIcon icon={faShoppingCart} className="s-icon" />
                        </div>
                        <div className="login-btn">
                            <Button className="btn btn-primary btn1">Login</Button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header

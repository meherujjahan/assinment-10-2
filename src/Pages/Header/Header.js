import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import './Header.css'

const Menu = () => {
    const { user, logOut } = UseAuth();



    return (
        <div className="">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" Navbar sticky="top">
                <Container>
                    <Navbar.Brand href="/home"><h1 className="company-name">Central Hospital</h1></Navbar.Brand>
                    <Navbar.Toggle sticky="top" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto nav-link" sticky="top">
                            <Link className="items" to="/home">Home</Link>
                            <Link className="items" to="/service">Service</Link>
                            <Link className="items" to="/doctor">Doctors</Link>

                            <Link className="items" to="/about">About</Link>
                            <Link className="items" to="/contact">Conatct</Link>
                            {user?.email ?
                                <Link className="items" onClick={logOut} variant="light">Logout</Link> :
                                <Link className="items" as={Link} to="/login">Login</Link>}
                            <Navbar.Text>
                                <Link className="items" to="">{user?.displayName}</Link>
                            </Navbar.Text>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menu;
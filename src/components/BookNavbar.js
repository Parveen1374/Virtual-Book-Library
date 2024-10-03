// src/components/BasicNavbar.js

import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { LibraryContext } from '../context/LibraryContext'; // Import the context
import '../App.css';

const BookNavbar = () => {
    const { myLibrary } = useContext(LibraryContext); // Use context to get myLibrary
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Navbar expand="lg" className={`sticky-top transition-navbar ${scrolled ? 'scrolled' : ''} border`}>
            <Container>
                <Navbar.Brand as={Link} to="/" className='fs-3'>Book Library</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto mr-5">
                        <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
                        <Nav.Link as={Link} to="/mylibrary" className="nav-link me-5">
                            My Library 
                            {myLibrary.length > 0 && (
                                <span className="badge bg-primary ms-2">{myLibrary.length}</span>
                            )}
                        </Nav.Link>
                        <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip id="profile-tooltip">Profile</Tooltip>}
                        >
                            <Nav.Link className="d-flex align-items-center nav-link">
                                <FaUserCircle size={30} />
                            </Nav.Link>
                        </OverlayTrigger>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default BookNavbar;

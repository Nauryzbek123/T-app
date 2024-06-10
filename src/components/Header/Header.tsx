import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const navigate = useNavigate();

    const handleCreateAnnouncement = () => {
        navigate('/create');
    };

    return (
        <Navbar expand="lg" bg="dark" variant="dark" className="px-3">
            <Container style={{ maxWidth: '1238px', padding: '20px' }}>
                <Navbar.Brand className="ml-auto" href="/" style={{ color: 'white' }}>T-AppScreen</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav" className="justify-content-end">
                    <Nav className="mx-4">
                        <Nav.Item>
                            <Nav.Link href="/profile" style={{ color: 'white' }}>
                                <FontAwesomeIcon icon={faUser} className="mr-2"/> My Profile
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Button variant="outline-light" className="mr-3" onClick={handleCreateAnnouncement}>Create Announcement</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;

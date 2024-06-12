import React, { useState } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { getAccessToken, resetAccessToken } from '../../utils/token';
import axios from 'axios';

const Header: React.FC = () => {
    const navigate = useNavigate();
    const token = getAccessToken();
    const [isLoading, setIsLoading] = useState(false);

    const handleCreateAnnouncement = () => {
        navigate('/create');
    };

    const handleLogout = async () => {
        setIsLoading(true);
        try {
          const token = getAccessToken();
          if (token) {
            await axios.post('https://lost-and-found.kz/api/auth/logout', {}, {
              headers: {
                'Authorization': `Bearer ${token}`
              },
              withCredentials: true
            });
          }
          console.log('succesfull logout')
          resetAccessToken();
          navigate('/');
        } catch (error) {
          console.error('Error during logout:', error);
        }
      }

    return (
        <Navbar expand="lg" bg="dark" variant="dark" className="px-3">
            <Container style={{ maxWidth: '1238px', padding: '20px' }}>
                <Navbar.Brand className="ml-auto" href="/" style={{ color: 'white' }}>T-AppScreen</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav" className="justify-content-end">
                    <Nav className="mx-4">
                        {token ? (
                            <>
                                <Nav.Item>
                                    <Nav.Link href="/profile" style={{ color: 'white' }}>
                                        <FontAwesomeIcon icon={faUser} className="mr-2"/> My Profile
                                    </Nav.Link>
                                </Nav.Item>
                                <Button variant="outline-light" className="mr-3" onClick={handleCreateAnnouncement}>Create Announcement</Button>
                                <Button variant="outline-light" className="mr-3" onClick={handleLogout}>Log Out</Button>
                            </>
                        ) : (
                           <>
                            <Nav.Item>
                                <Nav.Link href="/registration" style={{ color: 'white' }}>
                                    <FontAwesomeIcon icon={faUser} className="mr-1"/>Register
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link href="/login" style={{ color: 'white' }}>
                                <FontAwesomeIcon icon={faUser} className="mr-1"/>Login
                            </Nav.Link>
                        </Nav.Item>
                           </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
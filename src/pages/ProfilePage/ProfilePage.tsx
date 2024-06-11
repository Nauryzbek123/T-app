import React, { useState } from 'react';
import { Container, Tab, Tabs, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProfilePage.css';
import Items from "../MainPage/components/Items/Items";
import {Item} from "../../utils/interfaces";


const activeAnnouncements: Item[] = [
  { id: 4, images: {0: {original_url: require("../../assets/img/mainIcon.png")}}, date: '2023-04-01', title: 'Lost Phone', location: 'Park', type: 'Lost', category: 'Phones' },
  { id: 4, images: {0: {original_url: require("../../assets/img/mainIcon.png")}}, date: '2023-04-01', title: 'Found Keys', location: 'Library', type: 'Found', category: 'Keys' },
  // Add more announcements as needed
];

const archiveAnnouncements: Item[] = [
  { id: 4, images: {0: {original_url: require("../../assets/img/mainIcon.png")}}, date: '2023-04-01', title: 'Lost Book', location: 'Cafeteria', type: 'Lost', category: 'Books & Notes' },
  { id: 4, images: {0: {original_url: require("../../assets/img/mainIcon.png")}}, date: '2023-04-01', title: 'Found Watch', location: 'Gym', type: 'Found', category: 'Watch' },
  // Add more announcements as needed
];

const ProfilePage: React.FC = () => {
  const [key, setKey] = useState('active');
  const [profileData, setProfileData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value
    });
  };

  const handleProfileSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Profile data:', profileData);
    // Add your profile update logic here
  };

  return (
      <Container style={{ maxWidth: '1238px', padding: '20px' }} className="mb-5">
        <h1 className="my-4 text-center">My Profile</h1>
        <Tabs
            id="profile-tabs"
            activeKey={key}
            onSelect={(k) => setKey(k || 'active')}
            className="mb-3"
        >
          <Tab eventKey="active" title="Active Announcements">
            <Items items={activeAnnouncements} />
          </Tab>
          <Tab eventKey="archive" title="Archive Announcements">
            <Items items={archiveAnnouncements} />
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <Form onSubmit={handleProfileSubmit}>
              <Form.Group controlId="name" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={profileData.name}
                    onChange={handleInputChange}
                    required
                />
              </Form.Group>
              <Form.Group controlId="phone" className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                    type="text"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleInputChange}
                    required
                />
              </Form.Group>
              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleInputChange}
                    required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Form>
          </Tab>
        </Tabs>
      </Container>
  );
};

export default ProfilePage;

import React, { useEffect, useState } from 'react';
import { Container, Tab, Tabs, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProfilePage.css';
import Items from "../MainPage/components/Items/Items";
import {Item} from "../../utils/interfaces";
import axios from 'axios';
import { getAccessToken, getUserId, getUserInfo } from '../../utils/token';
import {SERVICE_URL} from "../../config";

const ProfilePage: React.FC = () => {
  const [key, setKey] = useState('active');
  const id = getUserId();
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    phone: '', 
  });
  const [activeAnnouncements, setActiveAnnouncements] = useState<Item[]>([]);
  const [archiveAnnouncements, setArchiveAnnouncements] = useState<Item[]>([]);

  useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo) {
      setProfileData(userInfo);
    }

    const fetchAnnouncements = async () => {
      const token = getAccessToken();
      if (!token) {
        return;
      }

      try {
        const activeResponse = await axios.get(`${SERVICE_URL}/api/item?filter[status]=progressing&filter[user_id]=${id?.id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          withCredentials: true
        });

        const archiveResponse = await axios.get(`${SERVICE_URL}/api/item?filter[status]=completed&filter[user_id]=${id?.id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          withCredentials: true
        });

        setActiveAnnouncements(activeResponse.data.data);
        setArchiveAnnouncements(archiveResponse.data.data);
      } catch (error) {
        console.error('Error fetching announcements:', error);
      }
    };

    if (id) {
      fetchAnnouncements();
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value
    });
  };

  const handleProfileSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Profile data:', profileData);
    console.log('id',id);
    
    const token = getAccessToken();
    if (!token) {
        // Handle token not found, maybe redirect to login page
        return;
    }
    try {
      const response = await axios.put(
        `https://lost-and-found.kz/api/user/${id?.id}`,
        profileData,
        {
          headers: {
              Authorization: `Bearer ${token}`
          },
          withCredentials: true
      }
      );

      console.log('Registration successful:', response.data);
      // Add any additional logic you need after successful registration
    } catch (error) {
      console.error('Error during registration:', error);
      // Handle the error appropriately in your application
    }
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

import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import axios from "axios";
import "./Registration.css";
import { useNavigate } from "react-router-dom";
import { setAccessToken, setUserInfo } from "../../../utils/token";


const RegistrationPage = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [profileData, setProfileData] = useState({
    name: '',
    phone: '',
    email: '', 
    password: '', 
    password_confirmation: ''
  });
  // setUserInfo(profileData.name,profileData.email,profileData.phone);

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value
    });
  };

  const handleProfileSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('reg:', profileData);

    try {
      const response = await axios.post(
        'https://lost-and-found.kz/api/auth/register',
        profileData,
        {
          withCredentials: true
        }
      );
      console.log('Registration successful:', response);
      const token = response.data?.token;
      console.log('token:',token);
      if(token){
        setAccessToken(token); 
        navigate('/')
      }
      // Handle successful registration (e.g., navigate to another page, show a success message)
    } catch (error) {
      console.error('Error during registration:', error);
      // Handle registration error (e.g., show an error message)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="main-Auth">
      <p className="large-txt">
        The largest community <br /> of photo enthusiasts
      </p>
      <div className="fieldCont">
        <div className="fields">
          <p>Sign up for a free account</p>
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
            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={profileData.password}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="password_confirmation" className="mb-3">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                name="password_confirmation"
                value={profileData.password_confirmation}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Save Changes'}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;

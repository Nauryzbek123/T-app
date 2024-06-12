import { Button, Input, Form } from "antd";
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setAccessToken, setUserId, setUserInfo } from "../../../utils/token";
import axios from "axios";

const style = {
  width: "494px",
  height: "40px",
  marginLeft: "35px",
  marginTop: "12px",
  border: "1px solid rgba(0, 0, 0, 0.5)",
};

export const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [profileData, setProfileData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value
    });
  };

  const handleProfileSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    console.log('login:', profileData);

    try {
      const response = await axios.post(
        'https://lost-and-found.kz/api/auth/login',
        profileData,
        {
          withCredentials: true
        }
      );
      console.log('Login successful:', response);
      const token = response.data?.token;
      const name = response.data?.user.name;
      const phone = response.data?.user.phone;
      const email = response.data?.user.email;
      const id = response.data?.user.id;
      console.log('id',id);
      
      setUserInfo(name,email,phone,);
      setUserId(id)
      if (token) {
        setAccessToken(token);
        navigate('/');
      }
    } catch (error) {
      console.error('Error during login:', error);
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
          <p>Log in to your account</p>
          <Form onFinish={handleProfileSubmit}>
            <Input
              placeholder="Email address or call number"
              style={style}
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
            />
            <Input
              placeholder="Password"
              style={style}
              type="password"
              name="password"
              value={profileData.password}
              onChange={handleInputChange}
            />
            <Button
              htmlType="submit"
              style={{
                width: "130px",
                height: "40px",
                backgroundColor: "#18A0FB",
                color: "white",
                marginLeft: "34px",
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textDecoration: "none",
              }}
              loading={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Log In'}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

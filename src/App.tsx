import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { MainPage } from "./pages/MainPage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { LoginPage } from "./pages/Auth/Login";
import { FooterCont } from "./components/Footer";
import { RegistrationPage } from "./pages/Auth/Registration";
import { getAccessToken } from "./utils/token";
import { UserModel } from "./models/User.model";
import CreateAnnouncement from "./pages/CreateAnnouncement/CreateAnnouncement";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AnnouncementPage from "./pages/AnnouncementPage/AnnouncementPage";

const App = () => {
  const [token, setToken] = useState<string | null>(getAccessToken());
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserModel | null>(null);

  useEffect(() => {
    if (token) {
    } else {
      setIsLoading(false);
      setUser(new UserModel());
    }
  }, [token]);
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<MainPageWithHeader />} />
        <Route path="login" element={<LoginPageWithHeader />} />
        <Route path="registration" element={<RegistrationPageWithHeader/>} />
          <Route path="create" element={<CreateAnnouncementWithHeader />} />
          <Route path="profile" element={<ProfilePageWithHeader />} />
          <Route path="/item/:id" element={<AnnouncementPageWithHeader />} />
          <Route path="/edit/:id" element={<CreateAnnouncementWithHeader />} />
      </Routes>
      <FooterCont />
    </BrowserRouter>
  );
};

const MainPageWithHeader = () => (
  <>
    <Header />
    <MainPage />
  </>
);
const LoginPageWithHeader = () => (
  <>
    <Header />
    <LoginPage />
  </>
);

const RegistrationPageWithHeader = () => (
  <>
    <Header />
    <RegistrationPage/>
  </>
);

const CreateAnnouncementWithHeader = () =>(
  <>
    <Header/>
    <CreateAnnouncement />
  </>
);

const ProfilePageWithHeader = () =>(
  <>
    <Header/>
    <ProfilePage />
  </>
);

const AnnouncementPageWithHeader = () =>(
  <>
    <Header/>
    <AnnouncementPage />
  </>
);

export default App;



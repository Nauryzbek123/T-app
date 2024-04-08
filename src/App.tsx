import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { MainPage } from "./pages/MainPage";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  useRoutes,
  Outlet,
} from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { FooterCont } from "./components/Footer";
import { RegistrationPage } from "./pages/Registration";
import { UserPage } from "./pages/UserPage";
import { DashboardPage } from "./pages/Dashboard";
import { AddNotificationPage } from "./pages/AddNotification";
import { HistoryPage } from "./pages/HistoryPage";
import { MessagePage } from "./pages/MessagePage";
import { FaqPage } from "./pages/FaqPage";
import NavTabs from "./pages/UserPage/UserPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPageWithHeader />} />
        <Route path="login" element={<LoginPageWithHeader />} />
        <Route path="registration" element={<RegistrationPageWithHeader />} />
        <Route path="userpage" element={<UserPage />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="addnotification" element={<AddNotificationPage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="message" element={<MessagePage />} />
          <Route path="faq" element={<FaqPage />} />
        </Route>
       
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
    <RegistrationPage />
  </>
);

export default App;

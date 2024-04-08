import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./UserPage.css";
import { Link, Outlet, useLocation } from "react-router-dom";


export const UserPage = () =>{
    return (
        <div className="userPage">
          <div className="userPageNav">
            <Link to="/userpage/dashboard"> Search </Link>
            <Link to="/userpage/addnotification"> List </Link>
            <Link to="/userpage/history"> Add </Link>
            <Link to="/userpage/message"> List </Link>
            <Link to="/userpage/faq"> Add </Link>
          </div>
    
          <Outlet />
        </div>
      );
}


  export default UserPage;







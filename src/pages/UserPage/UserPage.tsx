import * as React from "react";
import "./UserPage.css";
import { Link, Outlet, useLocation } from "react-router-dom";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export const UserPage = () => {
    const location = useLocation();

  return (
    <div className="userPage">
      <div className="userPageNav">
        <img
          src={require("../../assets/img/mainIcon.png")}
          alt=""
          className="LogoUser"
          style={{backgroundColor: "#F0F0F0"}}
        />
        <a className="T-app-user">T-AppScreen</a>
        <div className={`NavIconText ${location.pathname === "/userpage/dashboard" ? "activeLink" : ""}`}>
          <img
            src={require("../../assets/icons/dashboard.svg").default}
            alt=""
            className="UserIcon"
          />

          <NavLink className="linkText" to="/userpage/dashboard" end>
            Dashboard
          </NavLink>
        </div>
        <div className={`NavIconText ${location.pathname === "/userpage/addnotification" ? "activeLink" : ""}`}>
          <img
            src={require("../../assets/icons/addN.svg.svg").default}
            alt=""
            className="UserIcon"
          />

          <NavLink className="linkText" to="/userpage/addnotification" end>
            Add Notification
          </NavLink>
        </div>
        <div className={`NavIconText ${location.pathname === "/userpage/history" ? "activeLink" : ""}`}>
          <img
            src={require("../../assets/icons/hist.svg").default}
            alt=""
            className="UserIcon"
          />

          <NavLink className="linkText" to="/userpage/history" end>
            History
          </NavLink>
        </div>
        <div className={`NavIconText ${location.pathname === "/userpage/message" ? "activeLink" : ""}`}>
          <FontAwesomeIcon
            icon={faEnvelope}
            className="UserIcon"
            style={{ fontSize: "50px", marginLeft: "19px", color: "#4147D5" }}
          />

          <NavLink className="linkText" to="/userpage/message" end>
            Message
          </NavLink>
        </div>
        <div className={`NavIconText ${location.pathname === "/userpage/faq" ? "activeLink" : ""}`}>
          <img
            src={require("../../assets/icons/faq.svg.svg").default}
            alt=""
            className="UserIcon"
          />

          <NavLink className="linkText" to="/userpage/faq" end>
            FAQ
          </NavLink>
        </div>

        <div className="NavIconText" style={{marginTop: "350px"}}>
          <img
            src={require("../../assets/icons/settings.svg").default}
            alt=""
            className="UserIcon"
          />

          <Link className="linkText" to="/userpage/faq">
            Settings
          </Link>
        </div>

        <div className="NavIconText" >
          <img
            src={require("../../assets/icons/logout.svg").default}
            alt=""
            className="UserIcon"
          />

          <Link className="linkText" to="/userpage/faq">
            Log Out
          </Link>
        </div>
      </div>

      <div className="tabContent">
        <Outlet />
      </div>
    </div>
  );
};

export default UserPage;

// export const UserPage = () => {
//     const pathname = window.location.pathname;

//     const getIndex = (path: string) => {
//         switch (path) {
//           case '/userpage/dashboard':
//             return 0;
//           case '/userpage/addnotification':
//             return 1;
//           case '/userpage/history':
//             return 2;
//           case '/userpage/message':
//             return 3;
//           case '/userpage/faq':
//             return 4;
//           default:
//             return 0;
//         }
//       };

//     return (
//       <div className="userPage">
//         <Tabs
//           orientation="vertical"
//           variant="scrollable"
//           value={getIndex(pathname)}
//         >
//           <Tab label="Search" component={Link} to="/userpage/dashboard" />
//           <Tab label="List" component={Link} to="/userpage/addnotification" />
//           <Tab label="Add" component={Link} to="/userpage/history" />
//           <Tab label="List" component={Link} to="/userpage/message" />
//           <Tab label="Add" component={Link} to="/userpage/faq" />
//         </Tabs>

//         <Outlet />
//       </div>
//     );
//   };

//   export default UserPage;

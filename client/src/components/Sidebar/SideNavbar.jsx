// import React from "react";
// import { Link } from "react-router-dom";
// import useStyles from './styles';

// const Links = [
//   {
//     to: "/",
//     title: "Home"
//   },
//   {
//     to: "/form",
//     title: "Create Course"
//   },
//   {
//     to: "/membership",
//     title: "Membership"
//   },
//   {
//     to: "/updatecourses",
//     title: "Update Courses"
//   },
//   {
//       to: "/profile",
//       title : "View Profile"
//   }
// ];
// const SideNavbar = () => {
//   const classes = useStyles();
//   return (
//     <div className={classes.container} style={{ width: '300px',minWidth: '200px',padding:"20px", backgroundColor:"white"}}>
//       {Links.map(({ to, title }) => {
//         return (
//           <div className={classes.links}>
//             <Link to={to} className={classes.links}>{title}</Link>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export { SideNavbar };

import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@mui/material";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import lms from "../../images/lms.png";

import * as actionType from "../../constants/actionTypes";
import useStyles from "./styles";
// import React,{ useState} from 'react';
// import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
// import { useSelector } from 'react-redux';

const SideNavbar = () => {
  // const [currentId, setCurrentId] = useState(0);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push("/auth");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  return (
    <>
      <div style={{ display: "flex", width: "100%", height: "100%"}}>
        <div style={{ width: "340px", backgroundColor: "rgb(255,255,255)" }}>
          <div style={{ padding: "20px" }}>
            <img
              src="https://teachable.com/static/images/common/teachable_wordmark.svg"
              alt=""
            />
          </div>
          {/* Profile section */}
          <section style={{ padding: "40px 40px 80px 40px" }}>
            <div style={{ textAlign: "center" }}>
              <div>
                {user?.result ? (
                  <div className={classes.profile}>
                      <Link to="/profile" className={classes.brandContainer} >
                         <img src={user?.result.imageUrl ? (user?.result.imageUrl) : "https://us.123rf.com/450wm/happyvector071/happyvector0711904/happyvector071190415714/121105442-creative-illustration-of-default-avatar-profile-placeholder-isolated-on-background-art-design-grey-p.jpg?ver=6"} alt={user?.result.name.charAt(0)} width="90px" style={{ borderRadius:"50%", border:"1.5px solid #DDDDDD"}}/>
                      </Link>
                    <div>
                      <Link to="/profile" className={classes.brandContainer}>
                        <p className={classes.userName}>
                          {" "}
                          {user?.result.name}{" "}
                          <span style={{fontWeight: "200", fontSize: "14px"}}>{user?.result.email}</span>
                        </p>
                      </Link>
                    </div>
                    <div>
                     {/* {user?.result.email} */}
                    </div>
                  </div>
                ) : (
                  <Button
                    component={Link}
                    to="/auth"
                    variant="contained"
                    color="primary"
                  >
                    Sign In
                  </Button>
                )}
              </div>
            </div>
          </section>
          {/* school sectiomn navbar */}
          <section style={{paddingLeft: "20px"}}>
            <Link to="/myschools" style={{ color: "grey", textDecoration : "none"}}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".5rem",
                  padding: "15px 30px",
                }}
              >
                <div>
                  <AccountBalanceRoundedIcon />
                </div>
                <div>MY SCHOOLS</div>
              </div>
            </Link>
            <Link to='myschools/createnewschool' style={{ color: "grey",textDecoration : "none" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".5rem",
                  padding: "15px 30px",
                }}
              >
                <div>
                  <AddCircleOutlineIcon />
                </div>
                <div>CREATE NEW SCHOOLS</div>
              </div>
            </Link>
            <Link to="/updatecourses" style={{ color: "grey",textDecoration : "none" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".5rem",
                  padding: "15px 30px",
                }}
              >
                <div>
                  <SettingsIcon />
                </div>
                <div>UPDATE COURSES</div>
              </div>
            </Link>
            <Link to="/membership" style={{ color: "grey" , textDecoration : "none"}}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".5rem",
                  padding: "15px 30px",
                }}
              >
                <div>
                  <CreditCardIcon />
                </div>
                <div>BILLINGS</div>
              </div>
            </Link>
            <Link style={{ color: "grey",textDecoration : "none" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".5rem",
                  padding: "10px 30px",
                }}
              >
                <div>
                  <HelpOutlineIcon />
                </div>
                <div>HELP</div>
              </div>
            </Link>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: ".5rem",
                padding: "15px 30px",
                cursor: "pointer",
                color: "grey"
              }}
              onClick={logout}
            >
              <div>
                <ExitToAppRoundedIcon />
              </div>
              <div>
                <div>Logout</div>
              </div>
            </div>
            {/* </Link> */}
          </section>
        </div>
        {/* <<<-----------------------COURSE AREA -------------------------------->>>*/}
        {/* <div style={{width: "80%", backgroundColor:"whitesmoke"}}>
         
        </div> */}
      </div>
    </>
  );
};
export { SideNavbar };

import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Button, styled, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom"
import './headerStyle.css'
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
// import MainHeader from "./MainHeader";
// import SideDrawer from "./SideDrawer";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: drawerWidth,
    display: "grid",
    gridTemplateRows: "auto auto 1fr auto",
  },
}));

const MainStyle = styled("main")(({ theme }) => ({
  flexGrow: 1,
  minHeight: "100vh",
  padding: theme.spacing(2.5),
}));

const DashboardLayout = (props) => {
  // window width
  const { windows } = props;
  const [toggleMenu, setToggleMenu] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const classes = useStyles();

  // toggle drawer
  const handleToggleDrawer = () => setToggleMenu(!toggleMenu);
  const handleToggleClose = () => setToggleMenu(false);

  // I don't know the work of container yet
  const container =
    windows !== undefined ? () => windows().document.body : undefined;

  const handleLogout = () => {
    localStorage.setItem("token", null)
    localStorage.setItem("isLoggedIn", 0);
    window.location = "/login"
    
  }
  

  return (
    <>
      <div style={{ marginTop: '-19px', height: "70px", backgroundColor: 'rgb(238, 75, 2)', display: "flex", height: "90px", alignItems: "center", justifyContent: "center" }}>
        <Link style={{ flex: "1", paddingTop: '17px', paddingLeft: '15px', color: '#e3d2d2' }} to="/create-trade"><h1>Dashboard</h1></Link>
        <div>
        <Link style={{ marginTop: '17px', marginRight: "10px",  color: '#e3d2d2' }} to="/login">Login</Link>
        <Link style={{ marginTop: '17px', marginRight: "10px", color: '#e3d2d2' }}  onClick={handleLogout}>Logout</Link>
        </div>
      </div>
      <Box sx={{ display: "flex" }}>

        {/* Content */}
        <MainStyle>
          <Toolbar />
          {/* Main parts */}
          {props.children}
        </MainStyle>
      </Box>
    </>

  );
};

export default DashboardLayout;

export const drawerWidth = 240;

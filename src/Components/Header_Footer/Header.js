import React , { useState, useEffect } from 'react';
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core//IconButton";
import "../../Resources/style.css"
 import SideDrawer from "./SideDrawer";
const Header = () => {
   const [drawerOpen, setDrawwerOpen] = useState(false);
   const [headerShow, setHandlerShow] = useState(false);
   // const toggleDrawer = (val) => {
   //     setDrawwerOpen(val)
   // }

   useEffect(() => {
     window.addEventListener("scroll", HandlerShow);
   });
   const HandlerShow = () => {
     if (window.scrollY > 0) {
       setHandlerShow(true);
     } else {
       setHandlerShow(false);
     }
   };
   function toggleDrawer(val) {
     setDrawwerOpen(val);
   }
    return (
      <header className="head">
        <nav className="navbar navbar-expand-md ">
          {/* <a class="navbar-brand" href="#">Carousel</a> */}
          <AppBar
            position="fixed"
            style={{
              backgroundColor: headerShow ? "#2f2f2f" : "transparent",
              boxShadow: "none",
              padding: "10px 0px",
            }}
          >
            <ToolBar>
              <div className="header_logo">
                <div className="font_righteous header_logo_venue">
                  The Venue
                </div>
                <div className="header-logo_title">Musical Events</div>
              </div>

              <IconButton
                className="menuButton"
                aria-label="Menu"
                color="inherit"
                onClick={() => toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <SideDrawer
                open={drawerOpen}
                onClose={(val) => toggleDrawer(val)}
              />
            </ToolBar>
          </AppBar>
        </nav>
      </header>
    );
};

export default Header;
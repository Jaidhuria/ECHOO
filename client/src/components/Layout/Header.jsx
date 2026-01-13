import { AppBar, Backdrop, Box, IconButton, Toolbar, Typography } from '@mui/material';
import React, { Suspense, lazy } from 'react';
import { orange } from "../../constants/color";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from 'react';
import Notifications from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';

const SearchDialog = lazy(() => import('./specific/Search'));
const NewGroup = lazy(() => import('./specific/NewGroup'));
const NotificationsDialog = lazy(() => import('./specific/Notifications'));



const Header = () => {

  const Navigate = useNavigate();

  const [ismobile, SetIsMobile] = useState(false);
  const [isSearch, SetIsSearch] = useState(false);
  const [isNewGroup, SetIsNewGroup] = useState(false);
  const [isNotification, SetIsNotification] = useState(false);

  const handleMobile = () => {
    SetIsMobile(prev => !prev);
  };

  const OpenSearch = () => {
    SetIsSearch(prev => !prev);
  };

  const OpenNewGroup = () => {
    SetIsNewGroup(prev => !prev);
  };


  const OpenNotification = () => {
    SetIsNotification(prev => !prev);
  };

  const NavigateToGroups = () => Navigate("/Groups");

  const LogoutHandler = () => {
    console.log("logout");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, height: "4rem" }}>
        <AppBar
          position="static"
          sx={{ bgcolor: orange, height: "4rem", justifyContent: "center" }}
        >
          <Toolbar
            sx={{
              minHeight: "4rem !important",
              height: "4rem",
              alignItems: "center"
            }}
          >

            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              ECHOO
            </Typography>

            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            <Box>
              <IconBtn title={"Search"}
                icon={<SearchIcon />}
                onClick={OpenSearch} />

              <IconBtn title={"New Group"}
                icon={<AddIcon />}
                onClick={OpenNewGroup} />

              <IconBtn title={"Manage Groups"}
                icon={<GroupIcon />}
                onClick={NavigateToGroups} />


              <IconBtn title={"Notification"}
                icon={<Notifications />}
                onClick={OpenNotification} />


              <IconBtn title={"Logout"}
                icon={<LogoutIcon />}
                onClick={LogoutHandler} />


            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {isSearch && <Suspense fallback={<Backdrop open />}><SearchDialog /></Suspense>}
      {isNewGroup && <Suspense fallback={<Backdrop open />}><NewGroup /></Suspense>}
      {isNotification && <Suspense fallback={<Backdrop open />}><NotificationsDialog /></Suspense>}
    </>
  );
};


const IconBtn = ({ title, onClick, icon }) => (
  <Tooltip title={title}>
    <IconButton color="inherit" size="large" onClick={onClick}>
      {icon}
    </IconButton>
  </Tooltip>
);
export default Header;
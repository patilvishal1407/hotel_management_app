import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EmployeeDashboard from './EmployeeDashboard';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import HomeIcon from '@mui/icons-material/Home';
import { useLocation } from 'react-router-dom'; import {

  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  MenuItem,
  Menu,
  Collapse,
  Tooltip,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CelebrationIcon from '@mui/icons-material/Celebration';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import Groups2Icon from '@mui/icons-material/Groups2';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import BadgeIcon from '@mui/icons-material/Badge';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import StarPurple500RoundedIcon from '@mui/icons-material/StarPurple500Rounded';
import EmailSend from './EmailSend'

// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';
// import ListItemButton from '@mui/material/ListItemButton';
// import { useNavigate } from 'react-router-dom';

import Customers from './Customers'
import Login from './Login'
// import { Block } from '@material-ui/icons';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#fff', // Change the background color of the app bar
    color: '#333', // Change the text color of the app bar
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#f5f5f5', // Change the background color of the drawer
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    // transition: theme.transitions.create('margin', {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
    // margin: 'auto', // Center the content
    textAlign: 'center',
    marginRight: '100px',
  },
  contentShift: {
    // Add new class for content when the drawer is open
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: '100px',
    marginRight: '100px', // Adjust the value to match the drawer width
    textAlign: 'center',
  },

  toolbar: theme.mixins.toolbar,
  menuItemIcon: {
    minWidth: 'auto', // Reduce the minimum width of the menu item icon
  },
  profileButton: {
    marginLeft: 'auto', // Move the profile button to the right side
    marginRight: theme.spacing(2), // Add some spacing to the right of the profile button
  },
  mailButton: {
    marginLeft: 'auto', // Move the profile button to the right side
    marginRight: theme.spacing(2), // Add some spacing to the right of the profile button
  },

  nested: {
    paddingLeft: theme.spacing(2),
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [dropdownopen1, setdropdownopen1] = React.useState(false);
  const [dropdownopen2, setdropdownopen2] = React.useState(false);
  const [dropdownopen3, setdropdownopen3] = React.useState(false);
  const [dropdownopen4, setdropdownopen4] = React.useState(false);

  const [activePage, setActivePage] = useState('');

  let location = useLocation();

  const handlePageClick = (page) => {
    setActivePage(page);
  };
  //  let navigate = useNavigate()

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  const handleDropdown1 = () => {
    setdropdownopen1(!dropdownopen1);
  };
  const handleDropdown2 = () => {
    setdropdownopen2(!dropdownopen2);
  };
  const handleDropdown3 = () => {
    setdropdownopen3(!dropdownopen3);
  };
  const handleDropdown4 = () => {
    setdropdownopen4(!dropdownopen4);
  };

  const userName = location.state && location.state.user && location.state.user.Emp_Name;
  // const  userPicture=location.state && location.state.user && location.state.user[0].Picture;
  const userProfile = location.state.user.Picture
  console.log("userProfile", userProfile)
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          {/* <Link to="/Updateemp"> */}
          <IconButton>
            <HomeIcon />
          </IconButton>
          {/* </Link> */}
          <Typography variant="h6" style={{ marginLeft: '30px' }}>
            HOTEL 5<StarPurple500RoundedIcon />
          </Typography>


          <div className={classes.profileButton}>
            <Tooltip title="Profile">
              <IconButton
                color="inherit"
                // className={classes.profileButton}
                onClick={handleMenuClick}
              >
                <AccountCircleIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Send Mail">
              <IconButton
                color="inherit"
                onClick={() => handlePageClick('Send Mail')}
              // className={classes.mailButton}
              >
                <MailRoundedIcon />
              </IconButton>
            </Tooltip>
          </div>

          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Account</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />

        <List>
          <ListItem button onClick={handleDropdown1}>
            <ListItemIcon>
              <Groups2Icon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
            {dropdownopen1 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={dropdownopen1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>

              <ListItem button className={classes.nested} onClick={() => handlePageClick('Rooms customers')}>
                <ListItemIcon>
                  <MeetingRoomIcon />
                </ListItemIcon >
                <ListItemText primary="Rooms customers" />
              </ListItem>

              <ListItem button className={classes.nested} onClick={() => handlePageClick('Booking Details')}>
                <ListItemIcon>
                  <BookmarkAddedIcon />
                </ListItemIcon>
                <ListItemText primary="Booking Details" />
              </ListItem>

              <ListItem button className={classes.nested} onClick={() => handlePageClick('Event Details')}>
                <ListItemIcon>
                  <CelebrationIcon />
                </ListItemIcon>
                <ListItemText primary="Event Details" />
              </ListItem>

              <ListItem button className={classes.nested} onClick={() => handlePageClick('Food Orders')}>
                <ListItemIcon>
                  <FastfoodIcon />
                </ListItemIcon>
                <ListItemText primary="Food Orders" />
              </ListItem>
            </List>
          </Collapse>

          <Divider />

          <ListItem button onClick={handleDropdown2}>
            <ListItemIcon>
              <BadgeIcon />
            </ListItemIcon>
            <ListItemText primary="Employees" />
            {dropdownopen2 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={dropdownopen2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>

              <ListItem button className={classes.nested} onClick={() => handlePageClick('All Employees')} >
                <ListItemText primary="All Employees" />
              </ListItem>
              <ListItem button className={classes.nested} onClick={() => handlePageClick('Salaries ')}>
                <ListItemText primary="Salaries" />
              </ListItem>

            </List>
          </Collapse>

          <Divider />

          <ListItem button onClick={handleDropdown3}>

            <ListItemIcon>
              <ProductionQuantityLimitsIcon />
            </ListItemIcon>
            <ListItemText primary="All Menu" />
            {dropdownopen3 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={dropdownopen3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested} onClick={() => handlePageClick('products Menu ')}>
                <ListItemText primary="products Menu" />
              </ListItem>
              <ListItem button className={classes.nested} onClick={() => handlePageClick('Food Menu ')}>
                <ListItemText primary="Food Menu" />
              </ListItem>
              <ListItem button className={classes.nested} onClick={() => handlePageClick('Room Menu ')}>
                <ListItemText primary="Room Menu" />
              </ListItem>
              <ListItem button className={classes.nested} onClick={() => handlePageClick('Departments Menu ')}>
                <ListItemText primary="Departments Menu" />
              </ListItem>
            </List>
          </Collapse>

          <Divider />

          <ListItem button onClick={handleDropdown4}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="List 4" />
            {dropdownopen4 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={dropdownopen4} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Dropdown Item 1" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Dropdown Item 2" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Dropdown Item 3" />
              </ListItem>
            </List>
          </Collapse>


          {/* <ListItem button onClick={handleDropdownClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="List 5" />
            {dropdownopen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={dropdownopen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Dropdown Item 1" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Dropdown Item 2" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Dropdown Item 3" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Dropdown Item 4" />
              </ListItem>
            </List>
          </Collapse> */}

        </List>
        <Divider />
      </Drawer>

      <main className={`${classes.content} ${open ? classes.contentShift : ''}`} >
        <div className={classes.toolbar} />
        {activePage === 'Rooms customers' ? (
          <Typography variant="h6" gutterBottom>
            <Customers />
          </Typography>
        ) : activePage === 'Booking Details' ? (
          <Typography variant="h6" gutterBottom>
            <Login />
          </Typography>
        ) : activePage === 'All Employees' ? (
          <Typography variant="h6" gutterBottom>
            <EmployeeDashboard />
          </Typography>
        ) : activePage === 'Send Mail' ? (
          <Typography variant="h6" gutterBottom>
            <EmailSend />
          </Typography>
        ) : (
          <>
<br></br>
            <Typography variant="h4"   gutterBottom >
              Hello<span>      </span>
              <ListItemIcon>
                <WavingHandIcon />
              </ListItemIcon>
              {userName}
            </Typography>

            <Typography variant="h5" gutterBottom>
              Welcome to the Hotel 5*
            </Typography>


            <img className="profilepic" alt="userimage" src={`http://localhost:8085/${userProfile}`}></img>
          </>
        )}
      </main>
    </div>
  );
};

export default Dashboard;

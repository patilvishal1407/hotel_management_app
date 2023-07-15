import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom'
export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)} sx={{width: '12ch',marginTop: '30px' }}>
          <AccountCircleIcon />
          </Button>
          <Menu {...bindMenu(popupState)} sx={{width: '18ch',marginTop:'3px' }}>
           <Link to="/Signup">
               <MenuItem onClick={popupState.close}>SignUp</MenuItem></Link> 
           <Link to="/Login">
               <MenuItem onClick={popupState.close}>LogIn</MenuItem></Link>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}


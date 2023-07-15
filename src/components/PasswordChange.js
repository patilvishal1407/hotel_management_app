import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function FormPropsTextFields() {
  let nav = useNavigate();

  const [Email, setEmail] = useState("");
  const [currentPassword, setcurrentPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [conformPassword, setconformPassword] = useState("");

  
  const changePassword = async (e) => {
    e.preventDefault();
    console.log(Email, currentPassword, newPassword,conformPassword);
    try {
        if (newPassword !== conformPassword) {
            alert("New password & conformPassword didn't match");
            return;
          }
      const requestData = {
        Email: Email,
        currentPassword: currentPassword,
        newPassword: newPassword
      };
  
      const response = await axios.put(
        'http://localhost:8085/api/employees/validate/PasswordChange',
        requestData
      );
  
      const result = response.data;
      console.log("Change Password Success:", result);
      alert("Password changed successfully");
  
      if (result.message === 'Password changed successfully') {
        nav('/Login');
      }
    } catch (error) {
      console.error('Change Password Error:', error);
      alert("Error in changing password");
    }
  };

 return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '55ch' }, marginTop: '6ch',

      }}
      noValidate
      autoComplete="off"
    > <h1>Change Password</h1>
      <Grid container spacing={3}
        sx={{ justifycontent: 'center', marginLeft: '20ch' }}>
         
        <Grid item xl={6}> <TextField
          id="Email"
          label="email"
          type="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        /></Grid>
        <br></br>
        <Grid item xl={6}><TextField
          id="currentPassword"
          label="Current Password"
          type="password"
          value={currentPassword}
          onChange={(e) => setcurrentPassword(e.target.value)}
        /></Grid>
        <br></br>
       <Grid item xl={6}><TextField
          id="newPassword"
          label="New Password"
          type="password"
          value={newPassword}
          onChange={(e) => setnewPassword(e.target.value)}
        /></Grid>  
        <Grid item xl={6}><TextField
          id="conformPassword"
          label="conform Password"
          type="password"
          value={conformPassword}
          onChange={(e) => setconformPassword(e.target.value)}
        /></Grid>
      </Grid>

      <Grid item xl={6} marginTop='8ch' >
        <Button variant="contained" sx={{ width: '15ch', height: '6ch'}} onClick={changePassword}>
          Submit
        </Button>

        <Link to="/Login">
          <Button variant="contained" sx={{ width: '15ch', height: '6ch', marginLeft: '2ch' }}>
            Log in
          </Button>
        </Link>
      </Grid>
    </Box>
  );
}

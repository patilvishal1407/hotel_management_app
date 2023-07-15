import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function FormPropsTextFields() {
  let nav = useNavigate();

  const [Emp_Name, setEMP_Name] = useState("");
  const [Phone, setPhone] = useState("");
  const [DOB, setDOB] = useState("");
  const [Gender, setGender] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Picture, setPicture] = useState(null);

  const SignUpForm = async (e) => {
    // e.preventDefault();
    console.log(Emp_Name, Phone, DOB, Gender, Email, Password, Picture);
    try {
      const dataToSend = new FormData();
      dataToSend.append('Emp_Name', Emp_Name);
      dataToSend.append('Phone', Phone);
      dataToSend.append('DOB', DOB);
      dataToSend.append('Gender', Gender);
      dataToSend.append('Email', Email);
      dataToSend.append('Password', Password);
      dataToSend.append('Picture', Picture);

      const response = await axios.post('http://localhost:8085/api/employees/validate/Signup', dataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      const result = response.data;
      console.log("SignUp SuccessFul", result);
      alert("SignUp success");

      if (result.message === 'SignUp successful') {
        nav('/Login');
      }
    } catch (error) {
      console.error('SignUpForm error:', error);
      alert("error");
    }
  };

  return (

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '55ch' }, marginTop: '5ch',
      }}
      noValidate
      autoComplete="off"
    > <h1>Sign up</h1>
      <Grid container spacing={2}
        sx={{ justifycontent: 'center', marginLeft: '20ch' }}>
        <Grid item xl={6}><TextField
          id="Emp_Name"
          label="Name"
          type="text"
          value={Emp_Name}
          onChange={(e) => setEMP_Name(e.target.value)}
        /></Grid>
        <Grid item xl={6}><TextField
          id="Phone"
          label="Phone No"
          type="number"
          value={Phone}
          onChange={(e) => setPhone(e.target.value)}
        /></Grid>
        <Grid item xl={6}><TextField
          id="DOB"
          label="Date Of Birth"
          type="date"
          value={DOB}
          onChange={(e) => setDOB(e.target.value)}
          InputLabelProps={
            { shrink: true }
          }
        /></Grid>
        <Grid item xl={6}><TextField
          id="Gender"
          label="Gender"
          type="text"
          value={Gender}
          onChange={(e) => setGender(e.target.value)}
        /></Grid>
        <Grid item xl={6}> <TextField
          id="Email"
          label="email"
          type="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        /></Grid>
        <Grid item xl={6}><TextField
          id="Password"
          label="Password"
          type="password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        /></Grid>
        <Grid item xl={6}><TextField
          id="Picture"
          label=""
          type="file"
          onChange={(e) => setPicture(e.target.files[0])}
        /></Grid>
      </Grid>

      <Grid item xl={6} marginTop='8ch'>
        <Button variant="contained" sx={{ width: '15ch', height: '4ch' }} onClick={SignUpForm}>
          Submit
        </Button>

        <Link to="/Login">
          <Button variant="contained" sx={{ width: '15ch', height: '4ch', marginLeft: '2ch' }}>
            Log in
          </Button>
        </Link>
      </Grid>
    </Box>
  );
}

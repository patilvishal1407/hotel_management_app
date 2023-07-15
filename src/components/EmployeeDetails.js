import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, TextField, Button } from '@material-ui/core';
import { MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function EmployeeDetails({ employee, updateEmployee }) {
  const nav = useNavigate();
  const [departments, setDepartments] = useState([]);
  const [roles, setRoles] = useState([]);
  const [editedData, setEditedData] = useState(employee);

  useEffect(() => {
    getDepartments();
    getRoles();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(employee.Emp_Id, editedData);
    alert('Successfully Edited Data');
    nav('/EmployeeDashboard');
  };

  const getRoles = async () => {
    try {
      const response = await axios.get('http://localhost:8085/api/departments/getDepartments/getRoleName');
      const dataroles =response.data;
      setRoles(response.data.employeesData);
      // console.error('37setDepartments', response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getDepartments = async () => {
    try {
      const response = await axios.get('http://localhost:8085/api/departments/getDepartments/getDeptId');
      const data =response.data;
      setDepartments(response.data.employeesData);
      // console.error('37setDepartments', response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  console.error('37setDepartments', departments);
  console.error('37setRoles', roles);

  return (
    <div className='editEmployee' >
      <Typography variant="h4" sx={{ marginTop: '7vh' }}>Edit Employee Details</Typography>
      <form onSubmit={handleSubmit}>
        <br></br>
        <Typography variant="h5" >Emp Id: {employee.Emp_Id}</Typography>
        <br></br>
        <Grid container spacing={3}>

          <Grid item xs={3}>
            <TextField
              label="Name"
              type="text"
              name="Emp_Name"
              value={editedData.Emp_Name}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              label="Phone"
              type="text"
              name="Phone"
              value={editedData.Phone}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              label="Email"
              type="text"
              name="Email"
              value={editedData.Email}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              label="Gender"
              type="text"
              name="Gender"
              value={editedData.Gender}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              label="DOB"
              type="Date"
              name="DOB"
              value={editedData.DOB}
              onChange={handleChange}
              fullWidth
              InputLabelProps={
                { shrink: true }
              }
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              label="Age"
              type="number"
              name="Age"
              value={editedData.Age}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={3}>
          <TextField
            label="Department"
            type="text"
            name="Dept_Id"
            select
            value={editedData.Dept_Id}
            onChange={handleChange}
            fullWidth
          >
            {departments.length>0 && departments.map((department) => (
              <MenuItem key={department.Dept_Id} 
              value={department.Dept_Id}>
                {department.Dept_Id }
              </MenuItem>
            ))}
          </TextField>
          </Grid>

          <Grid item xs={3}>
            <TextField
              label="Role"
              type="text"
              name="Role_Id"
              select
              value={editedData.Role_Id}
              onChange={handleChange}
              fullWidth
            >
            {roles.length>0 && roles.map((roles) => (
              <MenuItem sx={{textalign:'Left'}} key={roles.Role_Name} 
              value={roles.Role_Name}>
                {roles.Role_Name}
                  </MenuItem>
                ))}
            </TextField>
        </Grid>

          <Grid item xs={3}>
            <TextField
              label="Joining Date"
              type="date"
              name="Joining_Dt"
              value={editedData.Joining_Dt}
              onChange={handleChange}
              fullWidth
              InputLabelProps={
                { shrink: true }
              }
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              label="Experiance"
              type="number"
              name="Experiance"
              value={editedData.Experiance}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              label="Qualification"
              type="text"
              name="Qualification"
              value={editedData.Qualification}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              label="Address"
              type="text"
              name="Address"
              value={editedData.Address}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Govt_Id"
              type="text"
              name="Govt_Id"
              value={editedData.Govt_Id}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          
          <Grid item xs={6}>
            <TextField
              label="Picture"
              type="text"
              name="Picture"
              value={editedData.Picture}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <br></br>
          <Grid>
            <Grid item xs={3}>
              <Button type="submit" variant="contained" color="primary"
                onClick={handleSubmit}>
                Submit
              </Button>
            </Grid>
          </Grid>

        </Grid>
      </form>
    </div>
  );
}

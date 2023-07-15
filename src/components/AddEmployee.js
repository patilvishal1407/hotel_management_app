import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, TextField, Button } from '@material-ui/core';
import axios from 'axios';

 import { useNavigate } from 'react-router-dom';


export default function AddEmployee() {
    //   const [editedData, setEditedData] = useState(employee);

     let nav = useNavigate();

    const [Emp_Name, setEmp_Name] = useState("");
    const [Phone, setPhone] = useState("");
    const [DOB, setDOB] = useState("");
    const [Gender, setGender] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Age, setAge] = useState("");
    const [Dept_Id, setDept_Id] = useState("");
    const [Role_Id, setRole_Id] = useState("");
    const [Joining_Dt, setJoining_Dt] = useState("");
    const [Experience, setExperience] = useState("");
    const [Qualification, setQualification] = useState("");
    const [Address, setAddress] = useState("");
    const [Govt_Id, setGovt_Id] = useState("");
    const [Picture, setPicture] = useState(null);

    const AddEmployee = async (e) => {
        // e.preventDefault();
        console.log(Emp_Name, Phone, DOB, Gender, Email, Password, Age, Dept_Id, Role_Id, Joining_Dt, Experience, Qualification, Address, Govt_Id, Picture);
        try {
            const dataToSend = new FormData();
            dataToSend.append('Emp_Name', Emp_Name);
            dataToSend.append('Phone', Phone);
            dataToSend.append('DOB', DOB);
            dataToSend.append('Gender', Gender);
            dataToSend.append('Email', Email);
            dataToSend.append('Password', Password);
            dataToSend.append('Age', Age);
            dataToSend.append('Dept_Id', Dept_Id);
            dataToSend.append('Role_Id', Role_Id);
            dataToSend.append('Joining_Dt', Joining_Dt);
            dataToSend.append('Experience ', Experience);
            dataToSend.append('Qualification', Qualification);
            dataToSend.append('Address', Address);
            dataToSend.append('Govt_Id', Govt_Id);
            dataToSend.append('Picture', Picture);

            const response = await axios.post('http://localhost:8085/api/employees/addemployeedashboard/addEmployee', dataToSend,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            const result = response.data;
            console.log("New Employee Created Successfull ", result);
            alert("Created New Employee success");
            nav('/EmployeeDashboard');
        } catch (error) {
            console.error('SignUpForm error:', error);
            alert("error");
        }
    };

    return (
        <div className='editEmployee' >
            <Typography variant="h4" sx={{ marginTop: '7vh' }}>Add New Employee</Typography>
            <form>
                <br></br>
                <Grid container spacing={3}>

                    <Grid item xs={3}>
                        <TextField
                            label="Name"
                            type="text"
                            name="Emp_Name"
                            value={Emp_Name}
                            onChange={(e) => setEmp_Name(e.target.value)}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            label="Phone"
                            type="text"
                            name="Phone"
                            value={Phone}
                            onChange={(e) => setPhone(e.target.value)}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            label="DOB"
                            type="Date"
                            name="DOB"
                            value={DOB}
                            onChange={(e) => setDOB(e.target.value)}
                            fullWidth
                            InputLabelProps={
                                { shrink: true }
                            }
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            label="Gender"
                            type="text"
                            name="Gender"
                            value={Gender}
                            onChange={(e) => setGender(e.target.value)}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            label="Email"
                            type="text"
                            name="Email"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            label="Password"
                            type="password"
                            name="Password"
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            label="Age"
                            type="number"
                            name="Age"
                            value={Age}
                            onChange={(e) => setAge(e.target.value)}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            label="Dept_Id"
                            type="text"
                            name="Dept_Id"
                            value={Dept_Id}
                            onChange={(e) => setDept_Id(e.target.value)}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            label="Role_Id"
                            type="text"
                            name="Role_Id"
                            value={Role_Id}
                            onChange={(e) => setRole_Id(e.target.value)}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            label="Joining Date"
                            type="date"
                            name="Joining_Dt"
                            value={Joining_Dt}
                            onChange={(e) => setJoining_Dt(e.target.value)}
                            fullWidth
                            InputLabelProps={
                                { shrink: true }
                            }
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            label="Experience "
                            type="number"
                            name="Experience "
                            value={Experience}
                            onChange={(e) => setExperience(e.target.value)}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            label="Qualification"
                            type="text"
                            name="Qualification"
                            value={Qualification}
                            onChange={(e) => setQualification(e.target.value)}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            label="Address"
                            type="text"
                            name="Address"
                            value={Address}
                            onChange={(e) => setAddress(e.target.value)}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            label="Govt_Id"
                            type="text"
                            name="Govt_Id"
                            value={Govt_Id}
                            onChange={(e) => setGovt_Id(e.target.value)}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            label=""
                            type="file"
                            id="Picture"
                            onChange={(e) => setPicture(e.target.files[0])}
                            fullWidth
                        />
                    </Grid>


                    <Grid sx={{ marginLeft: 120 }}>
                        <Grid item xs={3}>
                            <Button type="submit" variant="contained" color="primary"
                                onClick={AddEmployee}>
                                Add Employee
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>
            </form>
        </div>
    );
}

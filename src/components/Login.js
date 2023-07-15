import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Grid, Modal } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function BasicButtons() {
  let navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [OTP, setOTP] = useState("");
  const [Password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [Error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [Newpassword, setNewpassword] = useState("");

  const handleLogin = async () => {
    try {
      console.log("Logging in...");
      const response = await axios.post("http://localhost:8085/api/employees/validate/Login", {
        Email,
        Password,
      });
      console.log("Login response:", response);
      if (response.data.message === "Login successful") {
        navigate("/Updateemp", { state: response.data });
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred during login");
    }
  };

  const handleForgetPassword = async () => {
    try {
      const response = await axios.post("http://localhost:8085/api/employees/validate/forget-password", {
        Email,
      });
      setSuccessMessage(response.data.otp);
      console.log("OTP:", response.data.otp);
    } catch (error) {
      console.error("Forget password error:", error);
      setError("Failed to generate OTP");
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleFormSubmit = async (e) => {
   console.log("Entered Details is :",Email,OTP, Newpassword)
    // e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8085/api/employees/validate/verifyOTP", {
        Email,
        OTP,
        Newpassword,
      });
      setSuccessMessage(response.data.message);
      handleModalClose();
    } catch (error) {
      console.error("Verify OTP error:", error);
      setError("Failed to verify OTP");
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "45ch" },
        marginTop: "6ch",
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <h1>Log In</h1>
        <TextField
          id="Email"
          label="Email"
          value={Email}
          type="text"
          autoComplete="current-Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        {showPassword && (
          <TextField
            id="Password"
            label="Password"
            type="password"
            value={Password}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
        )}
      </div>
      <Grid item xl={6} marginTop="8ch">
        <Button variant="contained" sx={{ width: "15ch", height: "6ch" }} onClick={handleLogin}>
          Log in
        </Button>

        <Link to="/PasswordChange">
          <Button variant="contained" sx={{ width: "15ch", height: "6ch", marginLeft: "2ch" }}>
            Change Password
          </Button>
        </Link>

        <Button
          variant="contained"
          sx={{ width: "15ch", height: "6ch", marginLeft: "2ch" }}
          onClick={() => setShowModal(true)}
        >
          Forget Password
        </Button>
      </Grid>  

      <Modal
        open={showModal} 
        onClose={handleModalClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            textAlign: "center",
            borderRadius: "20px",
            m: 1,
          }}
        >
          <h2 id="modal-title">Enter Email Address</h2>
          <form>
            <TextField
              sx={{ width: "45ch", m: 1 }}
              id="email-modal"
              label="Email"
              value={Email}
              type="text"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <TextField
              sx={{ width: "45ch", m: 1 }}
              id="otp-modal"
              label="OTP"
              value={OTP}
              type="text"
              onChange={(e) => setOTP(e.target.value)}
            />
            <br />
            <TextField
              sx={{ width: "45ch", m: 1 }}
              id="Password"
              label="New Password"
              value={Newpassword}
              type="password"
              onChange={(e) => setNewpassword(e.target.value)}
            />
           <br />
            <Button onClick={handleForgetPassword} variant="contained">
              Get OTP
            </Button>
            <Button onClick={handleFormSubmit} variant="contained" >
              Verify OTP
            </Button>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}
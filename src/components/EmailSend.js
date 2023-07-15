import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import axios from 'axios';

const SendEmailForm = () => {
  const [name, setName] = useState('');
  const [recipient, setRecipient] = useState([]);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [results, setResults] = useState([]);

  const handleEmailSubmit = async (e) => {
    // e.preventDefault();
console.log(name,recipient)
    try {
      const response = await axios.post('http://localhost:8085/api/employees/mail/sendMail', {
        name,
        recipient,
        subject,
        message
      }); 

      if (response.status === 200) {
        const data = response.data;
        setResults(data);
        console.log('Response:', data); 
        alert("mail sent SuccessFully")
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      <h1>Send Email</h1>
      <form onSubmit={handleEmailSubmit}>
        <Grid container spacing={2}>

        <Grid item xs={6}>
            <TextField
              type="text"
              label="Name"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              type="email"
              label="Recipient"
              fullWidth
              value={recipient.join(',')}
              onChange={(e) => setRecipient(e.target.value.split(','))}
              required
             
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              type="text"
              label="Subject"
              fullWidth
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              multiline
            
              label="Message"
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Send Email
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default SendEmailForm;


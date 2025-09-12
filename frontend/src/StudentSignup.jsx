import React, { useState } from 'react';
import axios from 'axios';
import {
  Paper,
  Typography,
  TextField,
  Button,
} from '@mui/material';

const StudentSignup = () => {
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // Use /signup endpoint on backend
      const response = await axios.post('http://127.0.0.1:5000/signup', signupData, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: false, // set to true if backend uses cookies/sessions
      });
      if (response.data && response.data.message) {
        alert(response.data.message);
      } else {
        alert('Signup successful!');
      }
      setSignupData({ name: '', email: '', password: '' });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        alert(`Signup failed: ${error.response.data.message}`);
      } else {
        alert('Signup failed. Please check the backend.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Student Signup
      </Typography>
      <TextField
        fullWidth
        label="Name"
        name="name"
        variant="outlined"
        margin="dense"
        value={signupData.name}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        variant="outlined"
        margin="dense"
        value={signupData.email}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Password"
        name="password"
        type="password"
        variant="outlined"
        margin="dense"
        value={signupData.password}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        sx={{ mt: 2 }}
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? 'Signing Up...' : 'SIGN UP'}
      </Button>
    </Paper>
  );
};

export default StudentSignup;
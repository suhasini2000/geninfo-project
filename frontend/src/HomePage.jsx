import React from 'react';
import pic1 from './assets/images/pic1.jpg';
import StudentSignup from './StudentSignup';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Link,
} from '@mui/material';

export default function HomePage() {
  return (
    <Box>
      <Typography variant="h2" align="center" sx={{ mt: 3, mb: 2, fontWeight: 'bold', color: 'blue', fontFamily: 'Comic Sans' }}>
        GenInfotech
      </Typography>

      <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 'bold', color: 'blue', fontFamily: 'Comic Sans' }}>
        Build Apps. Build Skills. Build the Future.
      </Typography>

      {/* Navbar */}
      <Box
        component="nav"
        sx={{
          backgroundColor: '#1976d2',
          display: 'flex',
          justifyContent: 'center',
          gap: 4,
          py: 1.5,
        }}
      >
        {['Home', 'Courses', 'Contact'].map((item) => (
          <Link
            key={item}
            href="#"
            underline="none"
            sx={{
              color: 'white',
              fontWeight: 500,
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            {item}
          </Link>
        ))}
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 3,
          px: 3,
          py: 4,
        }}
      >
        {/* Left: Signup + Admin Login */}
        <Box sx={{ flex: 1 }}>
          <StudentSignup />

          {/* Admin Login */}
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Admin Login
            </Typography>
            <TextField fullWidth label="Username" variant="outlined" margin="dense" />
            <TextField fullWidth label="Password" type="password" variant="outlined" margin="dense" />
            <Button variant="contained" sx={{ mt: 2 }}>
              LOGIN
            </Button>
          </Paper>
        </Box>

        {/* Right: About Section */}
        <Box sx={{ flex: 2 }}>
          <Box
            sx={{
              position: 'relative',
              backgroundImage: `url(${pic1})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: 650,
              width: '100%',
              borderRadius: 2,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(255, 255, 255, 0.75)', zIndex: 1 }} />

            <Box sx={{ position: 'relative', zIndex: 2, px: 4, py: 5, maxWidth: '90%', maxHeight: '100%', overflowY: 'auto' }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: 'blue' }}>
                About GenInfotech
              </Typography>

              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>
                🚀 Who We Are
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7, mb: 2 }}>
                At <strong>GenInfotech</strong>, we're not just a software training centre — we're a launchpad for
                the next generation of digital creators...
              </Typography>

              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>
                💡 What You Learn
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7, mb: 2 }}>
                Hands-on projects, expert training in <strong>AI, React, Python, Flutter, Node.js</strong>...
              </Typography>

              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>
                🎯 Mentorship & Career
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7, mb: 2 }}>
                Real-world readiness with mentorship and support.
              </Typography>

              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>
                🌟 Why Choose Us?
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                Innovation meets education. Join the next-gen tech community.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Box sx={{ textAlign: 'center', py: 2, bgcolor: '#f5f5f5' }}>
        <Typography variant="body2">© 2025 GenInfotech. All rights reserved.</Typography>
      </Box>
    </Box>
  );
}

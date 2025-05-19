import React from 'react';
import pic1 from './assets/images/pic1.jpg';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Link
} from '@mui/material';

export default function HomePage() {
  return (
    <Box>
      {/* Title */}
      <Typography variant="h2" align="center" sx={{ mt: 3, mb: 2, fontWeight: 'bold' ,color:'blue',fontFamily:'Comic Sans'}}>
        GenInfotech
      </Typography>

      <Typography variant="h4" align="center" sx={{ mt: 3, mb: 2, fontWeight: 'bold' ,color:'blue',fontFamily:'Comic Sans'}}>
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
        {/* Left: Login Section */}
        <Box sx={{ flex: 1 }}>
          {/* Student Login */}
          <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Student Login
            </Typography>
            <TextField fullWidth label="Email" variant="outlined" margin="dense" />
            <TextField fullWidth label="Password" type="password" variant="outlined" margin="dense" />
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              <Button variant="contained">SIGN IN</Button>
              <Button variant="outlined">SIGN UP</Button>
            </Box>
          </Paper>

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

        {/* Right: About Section with Background Image */}
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
            {/* Overlay */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                bgcolor: 'rgba(255, 255, 255, 0.75)',
                zIndex: 1,
              }}
            />

            {/* Text Content */}
            <Box
              sx={{
                position: 'relative',
                zIndex: 2,
                px: 4,
                py: 5,
                maxWidth: '90%',
                maxHeight: '100%',
                overflowY: 'auto',
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 ,color: 'blue'}}>
                About GenInfotech
              </Typography>
              

              {/* Subsection: Who We Are */}
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>
                🚀 Who We Are
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7, mb: 2 }}>
                At <strong>GenInfotech</strong>, we're not just a software training centre — we're a launchpad
                for the next generation of digital creators. We empower learners with cutting-edge
                skills to build <strong>web and mobile-based applications</strong> using the latest in
                <strong> AI tools and modern technologies</strong>.
              </Typography>

              {/* Subsection: What You Learn */}
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>
                💡 What You Learn
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7, mb: 2 }}>
                We offer hands-on training in real-world projects, expert-led sessions on topics like
                <strong> AI, React, Flutter, Python, and Node.js</strong>. Students gain real experience
                through interactive sessions and project-based learning.
              </Typography>

              {/* Subsection: Mentorship & Career */}
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>
                🎯 Mentorship & Career Guidance
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7, mb: 2 }}>
                With personalized mentorship and career guidance, GenInfotech bridges the gap between
                learning and real-world job readiness. We prepare you not just to learn — but to build,
                innovate, and thrive in today’s fast-paced tech environment.
              </Typography>

              {/* Subsection: Why Choose Us */}
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>
                🌟 Why Choose Us?
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                Whether you're starting your journey or upskilling for your next big opportunity,
                GenInfotech is where <strong>innovation meets education</strong>. Join a community
                that encourages creativity, critical thinking, and continuous growth.
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

'use client';
import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: 'column', sm: 'row' }}
          textAlign={{ xs: 'center', sm: 'left' }}
        >
          <Box>
            <IconButton
              component={Link}
              href="mailto:aren.kerr@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              <Email />
            </IconButton>
            <IconButton
              component={Link}
              href="https://github.com/arenkerr"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              <GitHub />
            </IconButton>
            <IconButton
              component={Link}
              href="https://www.linkedin.com/in/aren-kerr/"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              <LinkedIn />
            </IconButton>
          </Box>
          <Typography variant="body2" sx={{ mb: { xs: 2, sm: 0 } }}>
            © {new Date().getFullYear()} Aren Kerr
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

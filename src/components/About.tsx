'use client';
import { Box, Typography } from '@mui/material';
import { text } from '@/lib/config';
import Image from 'next/image';
import { useThemeMode } from '@/context/ThemeContext';

export default function About() {
  const { mode } = useThemeMode();

  return (
    <Box id="About">
      <Image
        src={`/images/me-${mode}.png`}
        alt="drawing of Aren"
        width="120"
        height="175"
      />
      <Typography variant="h1" mb={2}>
        {text.about.title}
      </Typography>
      <Typography>{text.about.description}</Typography>
    </Box>
  );
}

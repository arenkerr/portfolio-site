import { Box, Typography } from '@mui/material';
import { text } from '@/lib/config';

export default function About() {
  return (
    <Box id="About">
      <Typography variant="h1" mb={2}>
        {text.about.title}
      </Typography>
      <Typography>{text.about.description}</Typography>
    </Box>
  );
}

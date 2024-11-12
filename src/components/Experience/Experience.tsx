import { Box, Typography } from '@mui/material';
import { text } from '@/lib/config';
import ExperienceTimeline from './Timeline';

const Experience = () => {
  return (
    <Box id="Experience">
      <Typography variant="h2" mb={2}>
        {text.experience.title}
      </Typography>
      <ExperienceTimeline />
    </Box>
  );
};

export default Experience;

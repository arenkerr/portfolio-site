'use client';
import { Typography } from '@mui/material';
import { text } from '@/lib/config';
import ExperienceTimeline from './Timeline';
import { Element } from 'react-scroll';

const Experience = () => {
  return (
    <Element name="Experience">
      <Typography variant="h2" mb={2}>
        {text.experience.title}
      </Typography>
      <ExperienceTimeline />
    </Element>
  );
};

export default Experience;

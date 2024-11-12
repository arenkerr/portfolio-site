import About from '@/components/About';
import Experience from '@/components/Experience/Experience';
import Projects from '@/components/Projects/Projects';
import { Stack } from '@mui/material';

export default function Home() {
  return (
    <Stack spacing={6}>
      <About />
      <Experience />
      <Projects />
    </Stack>
  );
}

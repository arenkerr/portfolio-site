'use client';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import ProjectsTab from './ProjectsTab';
import ActivityTab from './ActivityTab';
import { useState } from 'react';
import { Element } from 'react-scroll';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TabsSection = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Element name="Projects">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Projects" {...a11yProps(0)} />
          <Tab label="Activity" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ProjectsTab />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ActivityTab />
      </CustomTabPanel>
    </Element>
  );
};

const Projects = () => {
  return (
    <Box id="Projects">
      <Typography variant="h4" mb={2}>
        Projects
      </Typography>

      <TabsSection />
    </Box>
  );
};

export default Projects;

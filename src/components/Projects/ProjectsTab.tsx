'use client';
import { useState, useEffect } from 'react';
import { Box, Chip, Link, Paper, Typography } from '@mui/material';
import { Project } from '@/types/github.types';
import moment from 'moment';
import { getRepos } from '@/api/github';

const ProjectsTab = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getRepos();

      if (data) {
        setProjects(data);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Box id="Projects">
      {projects?.map((project: Project) => (
        <Paper
          key={project.name}
          sx={{
            p: 2,
            mb: 2,
          }}
        >
          <Link href={project.html_url} variant="subtitle1" target="_blank">
            {project.name}
          </Link>
          <Typography variant="body2" mb={2}>
            {project.description}
          </Typography>

          <Box mt={2}>
            <Chip label={project.language} size="small" color="secondary" />
            <Typography variant="body2" mt={2}>
              <em>Updated {moment(project.updated_at).fromNow()}</em>
            </Typography>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default ProjectsTab;

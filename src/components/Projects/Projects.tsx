import { Box, Chip, Link, Paper, Typography } from '@mui/material';
import { text } from '@/lib/config';
import { getRepos } from '@/api/github';
import { Project } from '@/types/github.types';
import moment from 'moment';

const Projects = async () => {
  const projects = await getRepos();
  return (
    <Box id="Projects">
      <Typography variant="h2" mb={2}>
        {text.projects.title}
      </Typography>
      <Typography variant="h4" mb={2}>
        Projects
      </Typography>

      <Box>
        {projects?.map((project: Project) => (
          <Paper
            key={project.name}
            sx={{
              p: 2,
              mb: 2,
            }}
          >
            <Link href={project.html_url} variant="subtitle1">
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
    </Box>
  );
};

export default Projects;

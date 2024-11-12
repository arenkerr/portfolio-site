import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { text } from '@/lib/config';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const ExperienceTimeline = () => {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {text.experience.jobs.map((job) => (
        <TimelineItem key={job.title}>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="subtitle1">{job.years}</Typography>
            <Accordion elevation={0}>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon color="primary" />}
                sx={{ justifyContent: 'flex-start', flexGrow: 0 }}
              >
                <Typography variant="subtitle1">{job.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List
                  sx={{
                    listStyleType: 'disc',
                    pl: 2,
                    '& .MuiListItem-root': {
                      display: 'list-item',
                    },
                  }}
                >
                  {job.description?.map((bullet) => (
                    <ListItem key={bullet}>{bullet}</ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default ExperienceTimeline;

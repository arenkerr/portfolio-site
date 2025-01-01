'use client';
import { Avatar, Box, Grid2, Link, Paper, Typography } from '@mui/material';
import { Activity } from '@/types/github.types';
import moment from 'moment';
import { getActivity } from '@/api/github';
import { useEffect, useState } from 'react';
import { ACTIVITY_NAMES } from '@/lib/constants/github.constants';

const ActivityTab = () => {
  const [activity, setActivity] = useState<Activity[]>([]);

  useEffect(() => {
    const fetchActivity = async () => {
      const data = await getActivity();

      if (data) {
        setActivity(data);
      }
    };

    fetchActivity();
  }, []);

  return (
    <Box id="Activity">
      {activity?.map((activity: Activity) => (
        <Paper
          key={activity.id}
          sx={{
            p: 2,
            mb: 2,
          }}
        >
          <Grid2 container spacing={1}>
            <Grid2>
              <Avatar alt="github avatar" src={activity.actor.avatar_url} />
            </Grid2>
            <Grid2>
              <Typography variant="subtitle1">
                {activity.actor.display_login} {ACTIVITY_NAMES[activity.type]}
              </Typography>
              {activity.repo && (
                <Link
                  href={`https://www.github.com/${activity.repo.name}`}
                  variant="subtitle1"
                  target="_blank"
                >
                  {activity.repo.name}
                </Link>
              )}

              <Box mt={2}>
                <Typography variant="body2" mt={2}>
                  <em>{moment(activity.created_at).fromNow()}</em>
                </Typography>
              </Box>
            </Grid2>
          </Grid2>
        </Paper>
      ))}
    </Box>
  );
};

export default ActivityTab;

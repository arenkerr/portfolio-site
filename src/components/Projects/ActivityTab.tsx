'use client';
import { Box, Grid2, Paper, Typography } from '@mui/material';
import { Activity } from '@/types/github.types';
import moment from 'moment';
import { getActivity } from '@/api/github';
import { useEffect, useState } from 'react';
import { ACTIVITY_NAMES } from '@/lib/constants/github.constants';
import Image from 'next/image';

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
              <Image
                src={activity.actor.avatar_url}
                alt="github avatar"
                width="45"
                height="45"
              />
            </Grid2>
            <Grid2>
              <Typography variant="subtitle1">
                {activity.actor.display_login} {ACTIVITY_NAMES[activity.type]}
              </Typography>
              {activity.repo && (
                <Typography variant="body2" mb={2}>
                  {activity.repo.name}
                </Typography>
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

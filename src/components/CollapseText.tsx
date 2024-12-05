'use client';
import { Button, Collapse, Typography } from '@mui/material';
import { useState } from 'react';

interface CollapseTextProps {
  text: string;
}

export default function CollapseText({ text }: CollapseTextProps) {
  const [showReadMore, setShowReadMore] = useState(false);

  return (
    <>
      <Button
        onClick={() => setShowReadMore(!showReadMore)}
        variant="text"
        disableElevation
        disableRipple
        sx={{
          textDecoration: 'underline',
          textTransform: 'none',
          padding: 0,
          '&.MuiButtonBase-root:hover': {
            bgcolor: 'transparent',
          },
          '&.MuiButtonBase-root:active': {
            bgcolor: 'transparent',
          },
        }}
      >{`Read ${showReadMore ? 'Less' : 'More'}`}</Button>
      <Collapse in={showReadMore}>
        <Typography mt={2}>{text}</Typography>
      </Collapse>
    </>
  );
}

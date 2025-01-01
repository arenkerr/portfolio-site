'use client';
import { Box, Button, Collapse, Typography } from '@mui/material';
import { useState } from 'react';
import MarkdownText from './MarkdownText';

interface CollapseTextProps {
  text: string;
  markdown?: boolean;
}

export default function CollapseText({ text, markdown }: CollapseTextProps) {
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
        {markdown ? (
          <Box mt={2}>
            <MarkdownText text={text} />
          </Box>
        ) : (
          <Typography mt={2}>text</Typography>
        )}
      </Collapse>
    </>
  );
}

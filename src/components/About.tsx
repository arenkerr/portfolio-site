'use client';
import { Typography } from '@mui/material';
import { text } from '@/lib/config';
import Image from 'next/image';
import { useThemeMode } from '@/context/ThemeContext';
import { Element } from 'react-scroll';
import { useState } from 'react';
import CollapseText from './CollapseText';

export default function About() {
  const { mode } = useThemeMode();

  return (
    <Element name="About">
      <Image
        src={`/images/me-${mode}.png`}
        alt="drawing of Aren"
        width="120"
        height="175"
      />
      <Typography variant="h1" mb={1}>
        {text.about.title}
      </Typography>
      <Typography variant="subtitle2" color={'textSecondary'}>
        <em>they/them</em>
      </Typography>
      <Typography mt={2}>
        {text.about.description} <CollapseText text={text.about.readMore} />
      </Typography>
    </Element>
  );
}

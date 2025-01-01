'use client';
import { Link, Typography } from '@mui/material';
import { text } from '@/lib/config';
import Image from 'next/image';
import { useThemeMode } from '@/context/ThemeContext';
import { Element } from 'react-scroll';
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
      <Typography mt={2} component={'div'}>
        {text.about.description}{' '}
        <CollapseText text={text.about.readMore} markdown={true} />
      </Typography>
      <Typography mt={2}>
        If you would like to get in touch, you can email me at{' '}
        <Link href="mailto:aren.kerr@gmail.com">aren.kerr@gmail.com</Link>.
      </Typography>
    </Element>
  );
}

'use client';
import { createTheme } from '@mui/material/styles';
import { Nunito, Lora } from 'next/font/google';

export const nunito = Nunito({ subsets: ['latin'], weight: ['400', '700'] });
export const lora = Lora({ subsets: ['latin'], weight: ['400'] });

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: nunito.style.fontFamily,
    h1: {
      fontFamily: lora.style.fontFamily,
      fontSize: '36px',
    },
  },
});

export default theme;

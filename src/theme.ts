'use client';
import { createTheme } from '@mui/material/styles';
import { Nunito, Lora } from 'next/font/google';
import { THEME_COLORS } from './lib/constants/theme.constants';

export const nunito = Nunito({ subsets: ['latin'], weight: ['400', '700'] });
export const lora = Lora({ subsets: ['latin'], weight: ['400'] });

const shared = createTheme({
  typography: {
    fontFamily: nunito.style.fontFamily,
    h1: {
      fontFamily: lora.style.fontFamily,
      fontSize: '48px',
    },
  },
});

const dark = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: THEME_COLORS.GREEN_900,
      paper: THEME_COLORS.GREEN_900,
    },
    text: {
      primary: THEME_COLORS.GREEN_100,
    },
  },
  typography: shared.typography,
});

const light = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: THEME_COLORS.GREEN_100,
      paper: THEME_COLORS.GREEN_100,
    },
    text: {
      primary: THEME_COLORS.GREEN_900,
    },
  },
  typography: shared.typography,
});

const darkMode = createTheme(shared, dark);
const lightMode = createTheme(shared, light);

export { darkMode, lightMode };

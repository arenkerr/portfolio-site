'use client';
import { createTheme } from '@mui/material/styles';
import { Nunito, Lora } from 'next/font/google';
import { THEME_COLORS } from './lib/constants/theme.constants';

export const nunito = Nunito({ subsets: ['latin'], weight: ['400', '700'] });
export const lora = Lora({ subsets: ['latin'], weight: ['400'] });

const shared = createTheme({
  palette: {
    secondary: {
      main: THEME_COLORS.GREEN_400,
    },
  },
  typography: {
    fontFamily: nunito.style.fontFamily,
    h1: {
      fontFamily: lora.style.fontFamily,
      fontSize: '48px',
    },
    h2: {
      fontFamily: lora.style.fontFamily,
      fontSize: '36px',
    },
    h3: {
      fontFamily: lora.style.fontFamily,
      fontSize: '24px',
    },
    h4: {
      fontFamily: lora.style.fontFamily,
      fontSize: '18px',
    },
    subtitle1: {
      fontWeight: 700,
    },
  },
  components: {
    MuiAccordionSummary: {
      styleOverrides: {
        content: {
          flexGrow: 0,
        },
        root: {
          padding: 0,
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
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
    primary: {
      main: THEME_COLORS.GREEN_100,
    },
    secondary: {
      main: THEME_COLORS.GREEN_400,
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
    primary: {
      main: THEME_COLORS.GREEN_900,
    },
    secondary: {
      main: THEME_COLORS.GREEN_400,
    },
  },
  typography: shared.typography,
});

const darkMode = createTheme(shared, dark);
const lightMode = createTheme(shared, light);

export { darkMode, lightMode };

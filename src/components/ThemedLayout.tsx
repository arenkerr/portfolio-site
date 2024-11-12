'use client';
import { ThemeProvider } from '@mui/material/styles';
import { darkMode, lightMode } from '../theme';
import { useThemeMode } from '@/hooks/useTheme';
import { ThemeMode } from '@/types/theme.types';
import NavBar from '@/components/NavBar';
import { CssBaseline, Container } from '@mui/material';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mode, toggleMode] = useThemeMode();

  return (
    <>
      <ThemeProvider theme={mode === ThemeMode.Dark ? darkMode : lightMode}>
        <CssBaseline />
        <NavBar toggleTheme={toggleMode} theme={mode} />
        <Container maxWidth="xs" id="cont">
          {children}
        </Container>
      </ThemeProvider>
    </>
  );
}

'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeMode } from '../types/theme.types';

interface ThemeContextProps {
  mode: ThemeMode;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState(ThemeMode.Dark);

  const toggleMode = () => {
    const newMode = mode === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark;
    window.localStorage.setItem('mode', newMode);
    setMode(newMode);
  };

  useEffect(() => {
    const selectedMode = window.localStorage.getItem('mode') as ThemeMode;
    setMode(
      selectedMode === ThemeMode.Light ? ThemeMode.Light : ThemeMode.Dark
    );
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within a ThemeProvider');
  }
  return context;
};

'use client';
import { useState, useEffect } from 'react';
import { ThemeMode } from '../types/theme.types';

export const useThemeMode = (): [ThemeMode, () => void] => {
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

  return [mode, toggleMode];
};

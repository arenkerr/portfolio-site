'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { sections } from '@/lib/config';
import NavBarItem from './NavBarItem';
import { ThemeMode } from '@/types/theme.types';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import { Link } from 'react-scroll';

interface NavBarProps {
  toggleTheme: () => void;
  theme: ThemeMode;
}

const ResponsiveAppBar = ({ toggleTheme, theme }: NavBarProps) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ bgcolor: 'background.default' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none', justifyContent: 'flex-end' },
            }}
          >
            <IconButton
              size="large"
              aria-label="navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: 'text.primary' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {sections.map((section) => (
                <MenuItem key={section} onClick={handleCloseNavMenu}>
                  <Link to={section} smooth={true}>
                    {section}
                  </Link>
                </MenuItem>
              ))}
              <IconButton
                onClick={() => toggleTheme()}
                sx={{
                  padding: '16px',
                  color: 'text.primary',
                }}
              >
                {theme !== ThemeMode.Light ? (
                  <LightModeOutlined />
                ) : (
                  <DarkModeOutlined />
                )}
              </IconButton>
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            {sections.map((section) => (
              <NavBarItem item={section} key={section} />
            ))}
            <IconButton
              onClick={() => toggleTheme()}
              sx={{ color: 'text.primary', height: 44, width: 44 }}
            >
              {theme !== ThemeMode.Light ? (
                <LightModeOutlined />
              ) : (
                <DarkModeOutlined />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

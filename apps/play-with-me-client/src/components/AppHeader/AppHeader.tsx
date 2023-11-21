// Header.tsx
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';

import AppDrawer from './AppDrawer/AppDrawer';

interface AppHeaderProps {}

const AppHeader: React.FC<AppHeaderProps> = (props) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <IconButton onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h5">PlayWithMe</Typography>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <AppDrawer open={isDrawerOpen} onClose={handleDrawerClose} />
    </>
  );
};

export default AppHeader;

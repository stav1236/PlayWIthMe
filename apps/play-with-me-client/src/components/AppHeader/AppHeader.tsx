// Header.tsx
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItemText,
  Button,
  ListItemButton,
  ListItemIcon,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDarkMode } from '@play-with-me/ui';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HomeIcon from '@mui/icons-material/Home';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

interface AppHeaderProps {
  onDrawerOptionClick?: (option: string) => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({ onDrawerOptionClick }) => {
  const { toggleDarkMode } = useDarkMode();
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
      <Drawer
        anchor="right"
        sx={{ '& .MuiDrawer-paper': { left: 0, right: 'auto' } }}
        open={isDrawerOpen}
        onClose={handleDrawerClose}
      >
        <div style={{ width: '500px' }}>
          <Button onClick={toggleDarkMode} variant="contained">
            darkmode
          </Button>
        </div>
        <List>
          <ListItemButton>
            <ListItemIcon sx={{ marginRight: (theme) => theme.spacing(-2) }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="דף הבית" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon sx={{ marginRight: (theme) => theme.spacing(-2) }}>
              <SportsSoccerIcon />
            </ListItemIcon>
            <ListItemText primary="מגרשים" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon sx={{ marginRight: (theme) => theme.spacing(-2) }}>
              <EmojiEventsIcon />
            </ListItemIcon>
            <ListItemText primary="שחקנים מובילים" />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
};

export default AppHeader;

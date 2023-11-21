import { useDarkMode } from '@play-with-me/ui';
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import {
  Drawer,
  List,
  ListItemText,
  Button,
  ListItemButton,
  ListItemIcon,
  DrawerProps,
  Divider,
  Typography,
} from '@mui/material';
import Welcome from '../../../assets/welcome.png';
import { Box } from '@mui/system';
import { MouseEventHandler } from 'react';

interface NavLink {
  text: string;
  link?: string;
  icon?: React.ReactNode;
}
const NAVLINKS: NavLink[] = [
  { text: 'דף בית', icon: <HomeIcon /> },
  { text: 'מגרשים', icon: <SportsSoccerIcon /> },
  { text: 'שחקנים מובילים', icon: <EmojiEventsIcon /> },
];

interface AppDrawerProps extends DrawerProps {}

const AppDrawer = (props: AppDrawerProps) => {
  const { darkMode, theme, toggleDarkMode } = useDarkMode();

  return (
    <Drawer
      {...props}
      anchor="right"
      sx={{ '& .MuiDrawer-paper': { left: 0, right: 'auto' } }}
    >
      <div style={{ height: '100%', width: '500px', maxWidth: '95vw' }}>
        <div
          style={{
            height: '27%',
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box
            style={{
              cursor: 'pointer',
              position: 'absolute',
              right: '3%',
            }}
            sx={{
              '&:hover': {
                color: `${theme.palette.primary.main}`,
              },
            }}
            onClick={toggleDarkMode}
          >
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </Box>
          <span onClick={props.onClose as MouseEventHandler}>
            <CloseIcon
              sx={{
                '&:hover': {
                  color: `${theme.palette.error.main}`,
                },
              }}
              style={{ cursor: 'pointer', position: 'absolute', left: '3%' }}
            />
          </span>
          <img
            src={Welcome}
            alt="welcome"
            style={{ width: '70%', height: '80%' }}
          />
          <Button
            sx={{ height: '17%', fontWeight: 'bold' }}
            variant="contained"
          >
            התברות / הרשמה
          </Button>
        </div>
        <Divider sx={{ mt: 3, borderBottomWidth: 2 }} />
        <div style={{ height: '58%' }}>
          <List>
            {NAVLINKS.map((navlink) => (
              <ListItemButton>
                <ListItemIcon
                  children={navlink.icon}
                  sx={{ marginRight: (theme) => theme.spacing(-2) }}
                />
                <ListItemText primary={navlink.text} />
              </ListItemButton>
            ))}
          </List>
        </div>
        <Divider sx={{ mt: 3, borderBottomWidth: 2 }} />
        <div
          style={{
            height: '7%',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <Typography variant="subtitle1">מי אנחנו</Typography>
          <Typography variant="subtitle1">|</Typography>
          <Typography variant="subtitle1">שאלות נפוצות</Typography>
          <Typography variant="subtitle1">|</Typography>
          <Typography variant="subtitle1">צרו קשר</Typography>
        </div>
      </div>
    </Drawer>
  );
};

export default AppDrawer;

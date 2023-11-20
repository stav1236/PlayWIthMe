import { useDarkMode } from '@play-with-me/ui';
import HomeIcon from '@mui/icons-material/Home';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import {
  Drawer,
  List,
  ListItemText,
  Button,
  ListItemButton,
  ListItemIcon,
  DrawerProps,
  Divider,
} from '@mui/material';
import Welcome from '../../../assets/welcome.png';

interface NavLink {
  text: string;
  link?: string;
  icon: React.ReactNode;
}
const NAVLINKS: NavLink[] = [
  { text: 'דף בית', icon: <HomeIcon /> },
  { text: 'מגרשים', icon: <SportsSoccerIcon /> },
  { text: 'שחקנים מובילם', icon: <EmojiEventsIcon /> },
];

interface AppDrawerProps extends DrawerProps {}

const AppDrawer = (props: AppDrawerProps) => {
  const { toggleDarkMode } = useDarkMode();

  return (
    <Drawer
      {...props}
      anchor="right"
      sx={{ '& .MuiDrawer-paper': { left: 0, right: 'auto' } }}
    >
      <div style={{ height: '100%', width: '500px' }}>
        <div
          style={{
            height: '27%',
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <img
            src={Welcome}
            alt="Example"
            style={{ width: '330px', height: '215px' }}
          />
          <Button
            sx={{ height: '17%', fontWeight: 'bold' }}
            variant="contained"
            onClick={toggleDarkMode}
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
        <div style={{ height: '7%' }}></div>
      </div>
    </Drawer>
  );
};

export default AppDrawer;

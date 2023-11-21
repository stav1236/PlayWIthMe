import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

interface PageLink {
  text: string;
  link?: string;
  icon?: React.ReactNode;
}
const PAGES_LINKS: PageLink[] = [
  { text: 'דף בית', icon: <HomeIcon /> },
  { text: 'מגרשים', icon: <SportsSoccerIcon /> },
  { text: 'שחקנים מובילים', icon: <EmojiEventsIcon /> },
];

const PagesLinks = () => {
  return (
    <div style={{ height: '58%' }}>
      <List>
        {PAGES_LINKS.map((navlink) => (
          <ListItemButton key={navlink.text}>
            <ListItemIcon
              children={navlink.icon}
              sx={{ marginRight: (theme) => theme.spacing(-2) }}
            />
            <ListItemText primary={navlink.text} />
          </ListItemButton>
        ))}
      </List>
    </div>
  );
};

export default PagesLinks;

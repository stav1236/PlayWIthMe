import { MouseEventHandler } from 'react';
import { useDarkMode } from '@play-with-me/ui';

import { Box, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import Welcome from '../../../../assets/welcome.png';

const UserWelcome = ({ onClose }: { onClose: MouseEventHandler }) => {
  const { darkMode, theme, toggleDarkMode } = useDarkMode();

  return (
    <div
      style={{
        height: '27%',
        marginTop: 15,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
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
      <span onClick={onClose}>
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
      <Button sx={{ height: '17%', fontWeight: 'bold' }} variant="contained">
        התברות / הרשמה
      </Button>
    </div>
  );
};

export default UserWelcome;

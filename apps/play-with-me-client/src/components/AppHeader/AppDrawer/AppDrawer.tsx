import { MouseEventHandler } from 'react';

import { Drawer, DrawerProps, Divider } from '@mui/material';

import UserWelcome from './UserWelcome/UserWelcome';
import PagesLinks from './PagesLinks/PagesLink';
import InfoLinks from './InfoLinks/InfoLinks';

interface AppDrawerProps extends DrawerProps {}

const AppDrawer = (props: AppDrawerProps) => {
  return (
    <Drawer
      {...props}
      anchor="right"
      sx={{ '& .MuiDrawer-paper': { left: 0, right: 'auto' } }}
    >
      <div style={{ height: '100%', width: '500px', maxWidth: '95vw' }}>
        <UserWelcome onClose={props.onClose as MouseEventHandler} />
        <Divider sx={{ mt: 3, borderBottomWidth: 2 }} />
        <PagesLinks />
        <Divider sx={{ mt: 3, borderBottomWidth: 2 }} />
        <InfoLinks />
      </div>
    </Drawer>
  );
};

export default AppDrawer;

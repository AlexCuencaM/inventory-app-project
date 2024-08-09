import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { DrawerMobile } from './components/DrawerMobile';
import { DrawerDesktop } from './components/DrawerDesktop';
import { Appbar } from './components/Appbar';
import { MyDrawer } from './components/MyDrawer';
import { ListInventoryItem } from './types';
import { Outlet } from 'react-router-dom';
const drawerWidth = 240;
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
  children: JSX.Element;
}
const items:ListInventoryItem[] = [{text: "Home", to: "/"}, {text: "Inventory", to: "/inventory"}, {text: "Logout", to: "/logout"}];
export function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };
  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };
  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <Appbar handleDrawerToggle={handleDrawerToggle} drawerWidth={drawerWidth}/>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <DrawerMobile drawerWidth={drawerWidth}
            handleDrawerTransitionEnd={handleDrawerTransitionEnd}
             handleDrawerClose={handleDrawerClose}
             drawer={MyDrawer({items})}/>
        <DrawerDesktop drawerWidth={drawerWidth} drawer={MyDrawer({items})}/>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
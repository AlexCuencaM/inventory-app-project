import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { DrawerMobile } from './components/DrawerMobile';
import { DrawerDesktop } from './components/DrawerDesktop';
import { Appbar } from './components/Appbar';
import { MyDrawer } from './components/MyDrawer';
import { ListInventoryItem } from './types';
import { Outlet } from 'react-router-dom';  

import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleIcon from '@mui/icons-material/People';
import GroupIcon from '@mui/icons-material/Group';
import LaboratoryIcon from '@mui/icons-material/LocalHospital';
import ProductIcon from '@mui/icons-material/Store';
import SupplierIcon from '@mui/icons-material/Business';

const drawerWidth = 240;
const items: ListInventoryItem[] = [
  { text: "Inventory", to: "/app/inventory", icon: InventoryIcon },
  { text: "Clientes", to: "/app/client", icon: PeopleIcon },
  { text: "Usuarios", to: "/app/user", icon: GroupIcon },
  { text: "Laboratorio", to: "/app/laboratory", icon: LaboratoryIcon },
  { text: "Productos", to: "/app/product", icon: ProductIcon },
  { text: "Proveedores", to: "/app/provider", icon: SupplierIcon },
];
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

import { Drawer } from '@mui/material'
interface DesktopDrawerProps {
    drawerWidth: number, 
    drawer: JSX.Element
}
export const DrawerDesktop = ({drawerWidth, drawer}:DesktopDrawerProps) => {
  return (
    <Drawer
      variant="permanent"
      sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' } }}
    >
          {drawer}
        </Drawer>
  )
}

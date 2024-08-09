import { Drawer } from '@mui/material'
interface DesktopDrawerProps {
    drawerWidth: number, 
    drawer: JSX.Element
}
export const DrawerDesktop = ({drawerWidth, drawer}:DesktopDrawerProps) => {
  return (
    <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
  )
}

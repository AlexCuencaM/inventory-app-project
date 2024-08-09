import { Drawer } from '@mui/material'
interface MobileDrawerProps {
    mobileOpen?:boolean,
    drawerWidth: number, 
    handleDrawerTransitionEnd: () => void,
    handleDrawerClose:() => void,
    drawer: JSX.Element
}
export const DrawerMobile = ({mobileOpen,
    drawerWidth, handleDrawerTransitionEnd, handleDrawerClose, drawer}: MobileDrawerProps) => {
  return (
    <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
    </Drawer>
  )
}

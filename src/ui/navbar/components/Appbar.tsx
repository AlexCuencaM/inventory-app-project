import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth } from '../../../hooks/useAuth';
interface AppbarProps {
    drawerWidth: number, 
    handleDrawerToggle: () => void,
}
export const Appbar = ({drawerWidth, handleDrawerToggle}: AppbarProps) => {
  const {logout} = useAuth();
  const handleClick = () => {
    logout();
  }
  return (
    <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Responsive drawer
          </Typography>
          <Button onClick={handleClick} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
  )
}

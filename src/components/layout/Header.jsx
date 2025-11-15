import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation, Link } from 'react-router-dom';
import { NAV_ITEMS, getPageTitleFromPath } from '../../constants/navItems';

function Header({ onToggleSidebar }) {
  const location = useLocation();
  const title = getPageTitleFromPath(location.pathname);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleAvatarClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const accountMenu = NAV_ITEMS.find(item => item.id === "account");

  return (
    <AppBar position="fixed" elevation={1}>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2 }}
          onClick={onToggleSidebar}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" noWrap>{title}</Typography>

        <Box sx={{ flexGrow: 1 }} />

        <IconButton onClick={handleAvatarClick} size="small" sx={{ ml: 2 }}>
          <Avatar sx={{ width: 32, height: 32 }}>
            U
          </Avatar>
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleMenuClose}
          onClick={handleMenuClose}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
          {accountMenu?.children.map(child => (
            <MenuItem key={child.id} component={Link} to={child.path}>
              {child.label}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

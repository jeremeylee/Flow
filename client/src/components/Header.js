import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const Header = (props) => {
  const [open, setOpen] = useState(false);
  const drawerContent = ['Inbox', 'Starred', 'Send email', 'Drafts'];

  const handleDrawerOpen = () => {
    console.log("open");
    setOpen(true);
  }

  const handleDrawerClose = () => {
    setOpen(false);
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Flow
          </Typography>
          <InputBase
            placeholder="Search..."
          />
          <SearchIcon />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        >
          <IconButton
            onClick={handleDrawerClose}
          >
            <ChevronLeftIcon />
          </IconButton>
          <Divider />
          <List>
          {drawerContent.map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        </Drawer>
    </div>
  )
}

export default Header;
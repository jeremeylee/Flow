import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const Sidebar = (props) => {
  return (
    <Drawer
    variant="persistent"
    anchor="left"
    open={props.open}
    >
      <IconButton
        onClick={props.handleDrawerClose}
      >
        <ChevronLeftIcon />
      </IconButton>
      <Divider />
      <List>
      {props.drawerContent.map((text) => (
        <ListItem button key={text}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
    </Drawer>
  )
}

export default Sidebar;
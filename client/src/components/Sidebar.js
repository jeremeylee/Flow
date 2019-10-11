import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import NewTaskDialog from './NewTaskDialog';

const Sidebar = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
    <Button variant="contained" color="default">New Process</Button>
    <Button variant="contained" color="default" onClick={handleOpen}>New Task</Button>
    <NewTaskDialog
      open={open}
      handleClose={handleClose}
      handleOpen={handleOpen}
    />
    </Drawer>
  )
}

export default Sidebar;
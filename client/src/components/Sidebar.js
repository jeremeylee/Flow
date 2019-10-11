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
import NewProcessDialog from './NewProcessDialog';

const Sidebar = (props) => {
  const [openTask, setOpenTask] = useState(false);
  const [openProcess, setOpenProcess] = useState(false);

  const handleOpenTask = () => {
    setOpenTask(true);
  };

  const handleCloseTask = () => {
    setOpenTask(false);
  };

  const handleOpenProcess = () => {
    setOpenProcess(true);
  };

  const handleCloseProcess = () => {
    setOpenProcess(false);
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
    <Button variant="contained" color="default" onClick={handleOpenProcess}>New Process</Button>
    <NewProcessDialog 
      open={openProcess}
      handleClose={handleCloseProcess}
      handleOpen={handleOpenProcess}
    />
    <Button variant="contained" color="default" onClick={handleOpenTask}>New Task</Button>
    <NewTaskDialog
      open={openTask}
      handleClose={handleCloseTask}
      handleOpen={handleOpenTask}
      data={props.data}
      setData={props.setData}
    />
    </Drawer>
  )
}

export default Sidebar;
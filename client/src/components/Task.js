import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TaskModal from './TaskModal';

const Task = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  }

  const handleCloseModal = () => {
    setOpen(false);
  }

  return (
    <Draggable draggableId={props.task.id} index={props.index} key={props.task.id} isDragDisabled={open}>
    {(provided) => (
      <ListItem
        innerRef={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
      <ListItemText onClick={handleOpenModal} primary={props.task.title} />
      <TaskModal
        open={open}
        handleClose={handleCloseModal}
        task={props.task}
      />
    </ListItem>
    )}
  </Draggable>
  )
}

export default Task;
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const NewTaskDialog = (props) => {
  const [taskName, setTaskName] = useState("");
  const [taskContent, setTaskContent] = useState("");

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  }

  const handleTaskContentChange = (event) => {
    setTaskContent(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = {
      ...props.data,
      tasks: {
        'test': {
          id: 'test',
          title: taskName,
          content: taskContent,
        },
      },
    };

    props.setData(newData);
  };
  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Create a New Task</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              autoFocus
              required
              margin="dense"
              id="Task Name"
              label="Enter the task name"
              fullWidth
              value={taskName}
              onChange={handleTaskNameChange}
            />
    
            <TextField
              margin="dense"
              id="Task Content"
              label="Enter a description"
              fullWidth
              value={taskContent}
              onChange={handleTaskContentChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={props.handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" onClick={props.handleClose} color="primary">
              Create
            </Button>
          </DialogActions>
        </form>

      </Dialog>
    </div>
  )
}

export default NewTaskDialog
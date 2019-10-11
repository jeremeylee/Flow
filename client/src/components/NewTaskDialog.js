import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const NewTaskDialog = (props) => {
  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Create a New Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="Task Name"
            label="Enter the task name"
            fullWidth
          />
  
          <TextField
            margin="dense"
            id="Task Content"
            label="Enter a description"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={props.handleClose} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default NewTaskDialog
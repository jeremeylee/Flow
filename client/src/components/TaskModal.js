import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const TaskModal = (props) => {

  return (
    <div>
      <Dialog onClose={props.handleClose} open={props.open}>
        <DialogActions>
          <IconButton
            onClick={props.handleClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogActions>
        <DialogTitle>{props.task.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.task.content}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default TaskModal
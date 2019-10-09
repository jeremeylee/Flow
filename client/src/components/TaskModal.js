import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
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
        <DialogTitle>{props.title}</DialogTitle>
      </Dialog>
    </div>
  )
}

export default TaskModal
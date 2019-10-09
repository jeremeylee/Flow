import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const TaskModal = (props) => {

  return (
    <div>
      <button type='button' onClick={props.handleOpen}>
        Open Modal
      </button>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
        style={{ background: 'green', width: '500px', height: '500px' }}
      >
        <Fade in={props.open}>
          <h2>Test</h2>
        </Fade>
      </Modal>
    </div>
  )
}

export default TaskModal
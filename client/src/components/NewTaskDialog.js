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
    const newTask = { 
      ...props.data.tasks,
      'test': {
        id: 'test',
        title: taskName,
        content: taskContent,
      }
    };
    console.log(props.data);
    const processes = props.data.processes;
    const process = processes['process-1'];
    const taskIds = process.taskIds.push('test');
    const processToUpdate = {
      ...process,
      taskIds: taskIds,
    };

    const newProcessTask = {
      ...processes,
      process: processToUpdate,
    }
    console.log(process)
    const newData = {
      ...props.data,
      processes: newProcessTask,
      tasks: newTask,
    };
    console.log(newData);
    props.setData(newData);
    setTaskName("");
    setTaskContent("");
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
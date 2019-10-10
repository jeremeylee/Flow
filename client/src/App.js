import React, { useState } from 'react';
import Header from './components/Header';
import Process from './components/Process';
import { DragDropContext } from 'react-beautiful-dnd';
import Grid from '@material-ui/core/Grid';
import initialData from './initialdata';


const App = (props) => {
  const [data, setData] = useState(initialData);

  const handleDragEnd = (result) => {

    const {destination, source, draggableId} = result;
    
    //If the user cancels the drag
    if (!destination) {
      return;
    }

    //If the user drags the task back into place
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startProcess = data.processes[source.droppableId];
    const endProcess = data.processes[destination.droppableId];
    
    //If the user drags the task within the same process
    if(startProcess === endProcess) {

      //Delete the item at the source index and then insert the task that was moved into the destination index
      const newTask = [ ...startProcess.taskIds];
      newTask.splice(source.index, 1);
      newTask.splice(destination.index, 0, draggableId);
      
      //Create a copy of the process with the updated taskId order
      const newProcess = {
        ...startProcess,
        taskIds: newTask,
      };
      

      //Create a copy of all the data, but update the process that was changed
      const newData = {
        ...data,
         processes: {
           ...data.processes,
          [newProcess.id]: newProcess,
        },
      };

      setData(newData);
      return;
    } else { //If the task was dragged from one process to another


        const newStartTask = [ ...startProcess.taskIds]; //The starting process from which the task was dragged from
        const newEndTask = [ ...endProcess.taskIds]; //The process that the task was dragged into
        
        //Delete the task from the source
        newStartTask.splice(source.index, 1);
        //Insert the task into the new process
        newEndTask.splice(destination.index, 0, draggableId);


        //Create a copy of the starting process with the new taskIds
        const newStartProcess = {
          ...startProcess,
          taskIds: newStartTask,
        };

        //Create a copy of the end process with the newly added taskId
        const newEndProcess = {
          ...endProcess,
          taskIds: newEndTask,
        };
        
        //Create a copy of the data with the start and end processes updated
        const newData = {
          ...data,
          processes: {
            ...data.processes,
            [startProcess.id]: newStartProcess,
            [endProcess.id]: newEndProcess,
          },
        };
          setData(newData);
          return;
        }
  }

  return (
    <div>
      <Header />

      <DragDropContext
        onDragEnd={handleDragEnd}
      >
        <Grid container>
          {data.processOrder.map(processId => {
            const process = data.processes[processId];
            const task = process.taskIds.map(taskId => data.tasks[taskId]);
            return (  
              <Grid item xs={12} sm={8} md={6} lg={3} key={`grid-${process.id}`}>
              <Process
                process={process}
                task={task}
              />
              </Grid>   
            );
          })}
        </Grid>
      </DragDropContext>
      
    </div>
  );
}

export default App;

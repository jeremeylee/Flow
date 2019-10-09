import React, { useState } from 'react';
import Header from './components/Header';
import Process from './components/Process';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Grid from '@material-ui/core/Grid';
import initialData from './initialdata';

const App = (props) => {
  const testTask = [["task1", "task2", "task3"], ["task1", "task2", "task3"], ["task1", "task2", "task3"], ["task1", "task2", "task3"]];
  const testProcess = ["Open", "To Do", "Ongoing", "Done"];
  //const { tasks, processes, processOrder } = initialData;
  const [data, setData] = useState(initialData);
  //const [tasks, setTask] = useState(testTask);
  //const [process, setProcess] = useState(testProcess);

  const handleDragEnd = (result) => {

    const {destination, source, draggableId} = result;
    
    
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    console.log(result);
    const startProcess = data.processes[source.droppableId];
    const endProcess = data.processes[destination.droppableId];

    if(startProcess == endProcess) {
      const newTask = [ ...startProcess.taskIds];
      newTask.splice(source.index, 1);
      newTask.splice(destination.index, 0, draggableId);
  
      const newProcess = {
        ...startProcess,
        taskIds: newTask,
      };
  
      const newData = {
        ...data,
         processes: {
           ...data.processes,
          [newProcess.id]: newProcess,
        },
      };

      setData(newData);
      return;
    } else {
        const newStartTask = [ ...startProcess.taskIds];
        const newEndTask = [ ...endProcess.taskIds];
        
        newStartTask.splice(source.index, 1);
        newEndTask.splice(destination.index, 0, draggableId);

        const newStartProcess = {
          ...startProcess,
          taskIds: newStartTask,
        };

        const newEndProcess = {
          ...endProcess,
          taskIds: newEndTask,
        };

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
              <Grid item xs={12} sm={8} md={6} lg={3} key={process.id}>
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

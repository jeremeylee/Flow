import React, { useState } from 'react';
import Header from './components/Header';
import Process from './components/Process';
import { DragDropContext } from 'react-beautiful-dnd';
import Grid from '@material-ui/core/Grid';

const App = (props) => {
  const testTask = [["task1", "task2", "task3"], ["task1", "task2", "task3"], ["task1", "task2", "task3"], ["task1", "task2", "task3"]];
  const testProcess = ["Open", "To Do", "Ongoing", "Done"];
  
  const [task, setTask] = useState(testTask);
  const [process, setProcess] = useState(testProcess);

  const handleDragEnd = (result) => {

    const {destination, source} = result;
    
    
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index == source.index
    ) {
      return;
    }
    console.log(result);
    let newTask = [ ...task ];
    [newTask[destination.index], newTask[source.index]] = [newTask[source.index], newTask[destination.index]];
    setTask(newTask);
  }

  return (
    <div>
      <Header />
      <DragDropContext
        onDragEnd={handleDragEnd}
        spacing={3}
      >
        <Grid
          container
        >
          {process.map((processName, index) => (
            <Grid item xs={12} sm={8} md={6} lg={3}>
              <Process 
                processName={processName}
                test={task[index]}
                index={index}
              />
            </Grid>
          ))}
        </Grid>
      </DragDropContext>
      
    </div>
  );
}

export default App;

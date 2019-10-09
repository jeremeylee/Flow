import React, { useState } from 'react';
import Header from './components/Header';
import Process from './components/Process';
import { DragDropContext } from 'react-beautiful-dnd';

const App = (props) => {
  const test = ["task1", "task2", "task3"];
  const [task, setTask] = useState(test);
  const handleDragEnd = (result) => {

    const {destination, source, draggableId } = result;
    
    
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index == source.index
    ) {
      return;
    }

    let newTask = [ ...task ];
    [newTask[destination.index], newTask[source.index]] = [newTask[source.index], newTask[destination.index]];
    setTask(newTask);
  }

  return (
    <div>
      <Header />
      <DragDropContext
        onDragEnd={handleDragEnd}
      >
        <Process 
          test={task}
        />
      </DragDropContext>
      
    </div>
  );
}

export default App;

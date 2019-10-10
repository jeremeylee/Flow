import React, { useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Task from './Task';

const Process = (props) => {
  return (
        <Container 
          style={{ background: 'red' }}
          maxWidth='xs' 
        >
          <Typography variant="h6">
            {props.process.title}
          </Typography>
          <Divider />
          <Droppable droppableId={props.process.id}>
            {(provided) => (
              <Container
              maxWidth='xs'
              style={{ background: 'yellow'}}
              innerRef={provided.innerRef}
              {...provided.droppableProps}
            >
              <List>
                {props.task.map((task, index) => (
                  <Task task={task} index={index} key={index}

                  />
                ))}
                
              </List>
              {provided.placeholder}
            </Container>
            )}
          </Droppable>
      </Container>
  )
}

export default Process;
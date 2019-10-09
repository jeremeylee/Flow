import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Process = (props) => {

  return (
        <Container 
          maxWidth='xs' 
          style={{ background: 'red'}} 
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
                  <Draggable draggableId={task.id} index={index} key={`list-${task.id}`}>
                    {(provided) => (
                      <ListItem 
            
                        innerRef={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                      <ListItemText primary={task.content} />
                    </ListItem>
                    )}
                  
                  </Draggable>
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
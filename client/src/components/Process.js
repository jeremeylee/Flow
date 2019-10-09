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
    <Droppable droppableId={"props.index.toString()"}>
      {(provided) => (
        <Container 
          maxWidth='xs' 
          style={{ background: 'red'}} 
          innerRef={provided.innerRef}
          {...provided.droppableProps}
        >
          <Typography variant="h6">
            {props.processName}
          </Typography>
          <Divider />
          
          <List>
          
            {props.test.map((text, index) => (
              <Draggable draggableId={text} index={index}>
                {(provided) => (
                  <ListItem 
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    innerRef={provided.innerRef}
                  >
                  <ListItemText primary={text} />
                </ListItem>
                )}
              
              </Draggable>

            ))}
            {provided.placeholder}
          </List>
      </Container>
      )}

    </Droppable>

  )
}

export default Process;
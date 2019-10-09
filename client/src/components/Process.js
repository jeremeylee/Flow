import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Process = (props) => {
  const test = ["task1", "task2", "task3"];

  return (
      <Container maxWidth='xs' style={{ background: 'red'}}> 
        <Typography variant="h6">
          {props.processName}
        </Typography>
        <Divider />
        <List>
          {test.map(text => (
            <ListItem>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Container>
  )
}

export default Process;
const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Task 1'},
    'task-2': { id: 'task-2', content: 'Task 2'},
    'task-3': { id: 'task-3', content: 'Task 3'},
    'task-4': { id: 'task-4', content: 'Task 4'},
  },

  processes: {
    'process-1': {
      id:'process-1',
      title: 'To Do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
    },

    'process-2': {
      id:'process-2',
      title: 'On Going',
      taskIds: []
    },

    'process-3': {
      id:'process-3',
      title: 'Done',
      taskIds: []
    },

    'process-4': {
      id:'process-4',
      title: 'Archive',
      taskIds: []
    },
  },

  processOrder: ['process-1', 'process-2', 'process-3', 'process-4'],
};

export default initialData;
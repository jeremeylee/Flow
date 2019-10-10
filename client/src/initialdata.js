const initialData = {
  tasks: {
    'task-1': { 
      id: 'task-1', 
      title: 'Task 1', 
      content: "orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis dolor vitae lectus pharetra ullamcorper. Morbi sed turpis sapien. Morbi tristique massa vitae nibh pharetra, nec rhoncus urna suscipit. Pellentesque vel turpis consequat, vestibulum dolor ullamcorper, ultrices quam. Donec tempus tristique mauris, sed rutrum metus ultrices non." 
    },
    'task-2': { 
      id: 'task-2', 
      title: 'Task 2',
      content: "orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis dolor vitae lectus pharetra ullamcorper. Morbi sed turpis sapien. Morbi tristique massa vitae nibh pharetra, nec rhoncus urna suscipit. Pellentesque vel turpis consequat, vestibulum dolor ullamcorper, ultrices quam. Donec tempus tristique mauris, sed rutrum metus ultrices non." 
    },
    'task-3': { 
      id: 'task-3', 
      title: 'Task 3',
      content: "orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis dolor vitae lectus pharetra ullamcorper. Morbi sed turpis sapien. Morbi tristique massa vitae nibh pharetra, nec rhoncus urna suscipit. Pellentesque vel turpis consequat, vestibulum dolor ullamcorper, ultrices quam. Donec tempus tristique mauris, sed rutrum metus ultrices non." 
    },
    'task-4': { 
      id: 'task-4', 
      title: 'Task 4',
      content: "orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis dolor vitae lectus pharetra ullamcorper. Morbi sed turpis sapien. Morbi tristique massa vitae nibh pharetra, nec rhoncus urna suscipit. Pellentesque vel turpis consequat, vestibulum dolor ullamcorper, ultrices quam. Donec tempus tristique mauris, sed rutrum metus ultrices non." 
    },
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
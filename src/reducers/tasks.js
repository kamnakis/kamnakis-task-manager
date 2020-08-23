const tasks_reducer = (tasks, action) => {
  switch (action.type) {
    case 'INITIALIZE':
      return [...action.data];
    case 'ADD_TASK':
      return [action.task, ...tasks]
    case 'REMOVE_TASK':
      return tasks.filter(task => task._id !== action.task._id);
    case 'UPDATE_TASK':
      return tasks.map(task => {
        if (task._id === action.task._id) {
          return action.task
        }
        return task
      })
    default:
      return tasks
  }
};

export { tasks_reducer as default }
export default function taskReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          title: action.taskText,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((singleTask) => {
        if (singleTask.id === action.task.id) {
          return action.task;
        } else {
          return singleTask;
        }
      });
    }
    case "delete": {
      return tasks.filter((task) => task.id !== action.id);
    }
    default: {
      return tasks;
    }
  }
}

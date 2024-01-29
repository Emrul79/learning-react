export default function taskReducer(draf, action) {
  switch (action.type) {
    case "added": {
      action.text.length > 0 &&
        draf.push({
          id: action.id,
          text: action.text,
          done: false,
        });
      break;
    }
    case "edited": {
      const index = draf.findIndex((t) => t.id === action.task.id);
      draf[index] = action.task;
      break;
    }
    case "deleted": {
      return draf.filter((task) => task.id !== action.taskId);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

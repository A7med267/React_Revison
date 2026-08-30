export default function reducer(currentTodos, action) {
  switch (action.type) {
    case "added": {
      return [...currentTodos, action.payload];
    }
    case "delete": {
      return currentTodos.filter((todo) => todo.id !== action.payload);
    }
    case "loaded": {
      return action.payload;
    }
    case "edited": {
      return currentTodos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
    }
    case "isCompleted": {
      return currentTodos.map((todo) => {
      if (todo.id === action.payload) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    }

    default: {
      throw new Error("Unknown " + action.type);
    }
  }
}
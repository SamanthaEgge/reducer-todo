export const initialState = {
  todos: [
    {
      todo: 'Complete portofolio',
      completed: false,
      id: 1
    },
    {
      todo: 'Learn to build node.js Server',
      completed: false,
      id: 2
    },
    {
      todo: 'Up to date with career stuff',
      completed: false,
      id: 3
    }
  ]
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        todo: action.payload,
        id: Date.now(),
        completed: false
      }
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (action.payload === todo.id) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      };
    case 'CLEAR_COMPLETE':
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
}
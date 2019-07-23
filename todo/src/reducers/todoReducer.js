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
        purchased: false
      }
      return {
        ...state,
        todos: [...state.todos, newTodo]
      }
    default:
      return state;
  }
}
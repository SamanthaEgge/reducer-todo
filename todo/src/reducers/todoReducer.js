export const initialState = {
  todos: [
    {
      name: 'Complete portofolio',
      completed: false,
      id: 1
    },
    {
      name: 'Learn to build node.js Server',
      completed: false,
      id: 2
    },
    {
      name: 'Up to date with career stuff',
      completed: false,
      id: 3
    }
  ]
}

export const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
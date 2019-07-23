import React, { useReducer } from 'react';

import { reducer, initialState } from './reducers/todoReducer'

import './App.scss';
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addTodo = (event, todo) => {
    dispatch({ type: 'ADD_TODO', payload: todo })
  };

  return (
    <div className="app">
      <header className="app-header">
        Dark Tasks
      </header>
      <div className='app-body'>
        <AddTodo 
          addTodo={addTodo} />
        <TodoList
          todos={state.todos} />
      </div>
    </div>
  );
}

export default App;
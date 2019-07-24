import React from 'react'

import './TodoList.scss'
import TodoItem from './TodoItem'

const TodoList = (props) => {

  return (
    <div className='todo-list'>
      {props.todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />
      ))}
      <button
      className='clear-button'
      onClick={props.clearCompleted}>Clear Completed</button>
    </div>
  )
}

export default TodoList
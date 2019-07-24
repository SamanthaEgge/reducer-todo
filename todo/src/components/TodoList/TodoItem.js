import React from 'react';

import './TodoItem.scss'

const TodoItem = (props) => {
  console.log(props.todo.completed)
  return(
    <div
    className={`todo-item${props.todo.completed ? ' completed' : ''}`}
    onClick={() => props.toggleTodo(props.todo.id)}>
      <p>{props.todo.todo}</p>
    </div>
  )
}

export default TodoItem
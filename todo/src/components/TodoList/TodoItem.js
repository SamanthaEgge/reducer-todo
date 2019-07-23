import React from 'react';

const TodoItem = (props) => {
  console.log(props.todo.completed)
  return(
    <div
    className='todo-item'
    onClick={() => props.toggleTodo(props.todo.id)}>
      <p>{props.todo.todo}</p>
    </div>
  )
}

export default TodoItem
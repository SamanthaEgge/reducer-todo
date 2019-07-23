import React from 'react';

const TodoItem = (props) => {
  return(
    <div className='todo-item'>
      <p>{props.todo.name}</p>
    </div>
  )
}

export default TodoItem
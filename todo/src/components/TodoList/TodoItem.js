import React from 'react';

const TodoItem = (props) => {
  return(
    <div className='todo-item'>
      <p>{props.todo.todo}</p>
    </div>
  )
}

export default TodoItem
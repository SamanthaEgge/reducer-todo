import React from 'react'

import './TodoList.scss'
import TodoItem from './TodoItem'

const TodoList = (props) => {

  return (
    <div className='todo-list'>
      {props.todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />
      ))}
    </div>
  )
}

export default TodoList
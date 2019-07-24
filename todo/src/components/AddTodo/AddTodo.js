import React, { useState } from 'react'

const AddTodo = (props) => {
  const [newTodo, changeTodo] = useState({
    todo: '',
  })

  const handleChanges = (event) => {
    changeTodo({ [event.target.name]: event.target.value });
  };

  const submitTodo = (event) => {
    event.preventDefault();
    props.addTodo(event, newTodo.todo)
  }

  console.log(newTodo)

  return (
    <div className='todo-form'>
      <form onSubmit={submitTodo}>
        <input
          type='text'
          value={newTodo.todo}
          name='todo'
          onChange={handleChanges}
          />
          <button>Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo
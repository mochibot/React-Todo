import React from 'react';

const TodoForm = (props) => {
  return (
    <form className='todo-form' onSubmit={props.submitHandler}>
      <input placeholder='Add task...' onChange={props.changeHandler} value={props.value} required/>
      <button>Add Todo</button>
      <button>Clear Completed</button>
    </form>
  )
}

export default TodoForm;
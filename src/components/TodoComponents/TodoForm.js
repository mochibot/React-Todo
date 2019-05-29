import React from 'react';

const TodoForm = (props) => {
  return (
    <form onSubmit={props.submitHandler}>
      <input placeholder='Enter task' onChange={props.changeHandler} value={props.value}/>
      <button>Add Todo</button>
      <button>Clear Completed</button>
    </form>
  )
}

export default TodoForm;
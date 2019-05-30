import React from 'react';

const TodoForm = (props) => {
  return (
    <div>
      <form className='todo-form' onSubmit={props.submitHandler}>
        <input placeholder='Enter task here...' onChange={props.changeHandler} value={props.value} required/>
        <div className='buttons'>
          <button>Add Task</button>
          <button onClick={props.clearHandler}>Clear Completed</button>
        </div>
      </form>
      
    </div>
  )
}

export default TodoForm;
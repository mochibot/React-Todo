import React from 'react';

const Todo = (props) => {
  return (
    <div className='todo-item'>{props.list}</div>
  )
}

export default Todo;
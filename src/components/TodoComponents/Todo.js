import React from 'react';

const Todo = (props) => {
  return (
    <div className={`todo-item ${props.list.completed}`} onClick={() => props.toggleHandler(props.list)}>{props.list.task}</div>
    
    /* Need to use arrow function for onClick or it will invoke functions and cause it to exceed maximal stack */
  )
}

export default Todo;
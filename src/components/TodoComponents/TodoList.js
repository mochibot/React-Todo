// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'

const TodoList = (props) => {
  return (
    <div className='todo-list'>
      {props.list.map(item => <Todo list={item.task} onClick={props.toggleHandler}/>)}
    </div>
  )
}

export default TodoList;

import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import './components/TodoComponents/Todo.scss'


const tasks = [
  {
    task: 'Add a new task',
    id: 1528817077286,
    completed: false
  },
  /*
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
  */
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list: tasks,
      task: '',
      id: '',
      completed: '',
    }
  }

  inputTask = (event) => {
    this.setState({
      task: event.target.value
    })
  }

  
  addTask = (event) => {
    event.preventDefault();
    const newTask = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    } 
    this.setState({
      list: [...this.state.list, newTask],
      task: ''
    })
  } 


  toggleTask = (props) => {
    this.setState({
      list: [...this.state.list].map(item => {
        /* compare id instead of task as id is unique or else will run into the problem of selecting all of the same tasks */
        if (item.id === props.id) {
          item.completed = !item.completed;
          return item;
        } else {
          return item;
        }
      })
    })
  }


  removeTask = (event) => {
    event.preventDefault();
    this.setState({
      list: [...this.state.list].filter(item => item.completed === false)
    })
  }

  render() {
    return (
      <div className='todo-App'>
        <h2>My Todo App</h2>
        <TodoForm 
          changeHandler={this.inputTask} 
          submitHandler={this.addTask} 
          clearHandler={this.removeTask}
          value={this.state.task} />
        <TodoList 
          list={this.state.list} 
          toggleHandler={this.toggleTask}/>
      </div>
    );
  }
}

export default App;

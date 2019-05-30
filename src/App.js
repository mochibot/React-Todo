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
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list: tasks,
      input: '', 
      //added displayList key to enable search functionality (keeping track of what is being displayed...)
      displayList: tasks
    }
  }

  /* Playing around with localStorage */

  componentDidMount() {
    if (localStorage.getItem('list') === '[]') {
      //reset list to initial tasks obj if list is empty
      this.setState({
        list: tasks,
        displayList: tasks,
      })
    } else {
      this.setState({
        list: JSON.parse(localStorage.getItem('list')),
        displayList: JSON.parse(localStorage.getItem('list'))
      })
    }
    window.addEventListener("beforeunload", this.saveStateToLocalStorage);
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.saveStateToLocalStorage);
  }

  saveStateToLocalStorage = () => {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  /*--------end of code for playing with localStorage*/
  
  inputTask = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  addTask = (event) => {
    event.preventDefault();
    const newTask = {
      task: this.state.input,
      id: Date.now(),
      completed: false
    } 
    
    this.setState({
      list: [...this.state.list, newTask],
      displayList: [...this.state.list, newTask],
      input: ''
    })
  } 

  toggleTask = (props) => {
    this.setState(prevState => {
      return {
        list: prevState.list.map(item => {
        /* compare id instead of task as id is unique or else will run into the problem of selecting all of the same tasks */
          if (item.id === props.id) {
            item.completed = !item.completed;
            return item;
          } else {
            return item;
          }
        }),
        displayList: this.state.list
      };
    });
  }

  removeTask = (event) => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        list: prevState.list.filter(item => item.completed === false),
        displayList: prevState.displayList.filter(item => item.completed === false),
      }
    });
  }

  searchTask = (event) => {
    let searchInput = event.target.value;
    this.setState(prevState => {
      return {
        displayList: prevState.list.filter(item => item.task.toLowerCase().includes(searchInput.toLowerCase()))
      }
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
          searchHandler={this.searchTask}
          value={this.state.input}
          search={this.state.search} />
        <TodoList 
          list={this.state.displayList} 
          toggleHandler={this.toggleTask}/>
      </div>
    );
  }
}

export default App;

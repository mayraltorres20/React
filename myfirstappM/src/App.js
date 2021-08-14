import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


//import { BrowserRouter as Router , Route} from 'react-router-dom';


import tasks from './ejemplo/tasks.json'; 

//importando componentes
import Tasks from './componentes/Tasks'
import TaskForm from './componentes/TaskForm';
import Posts from './componentes/Posts'

class App extends Component{

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const nweTask = {
      title: title,
      description: description,
      id: this.state.tasks.length 
    }
    this.setState({
      tasks: [...this.state.tasks, nweTask]
    })
    console.log(nweTask)
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id)
    this.setState({tasks: newTasks})
    console.log(newTasks);
  }

  checkDone = id => {
    const newTasks = this.state.tasks.map(task => {
      if(task.id === id){
        task.done = !task.done
      }
      return task;
    });
    this.setState({tasks: newTasks})
  }

  render() {
    return <div>
      <Router>

        <Link to="/">Home</Link>
        <br/>
        <Link to="/posts">Posts</Link>
        
        <Route exact path="/" render={() => {
          return <div>
            <TaskForm addTask = {this.addTask}/>
            <Tasks tasks = {this.state.tasks} 
            deleteTask={this.deleteTask} 
            checkDone={this.checkDone} 
            />
          </div>
          
        }}>

        </Route>
        <Route path="/posts" component={Posts}/>
      </Router>
        
    </div>
  }
}



export default App;

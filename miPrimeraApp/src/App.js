import React, { Component } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./App.css"
import tasks from "./sample/tasks.json"

// Components
import Tasks from "./components/Tasks"
import TaskForm from "./components/taskForm"
import Posts from './components/Posts'
import Navbar from "./components/Navbar"
import About from "./components/About"


class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id)
    this.setState({ tasks: newTasks })
  }

  checkDone = id => {
    const newTask = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    });
    this.setState({ tasks: newTask })
  }

  render() {
    return <div>
      <Router>
        <Routes>
          <Route exact path="/" element={
            <React.Fragment>
              <Navbar />
              <br />
              <TaskForm addTask={this.addTask} />
              <Tasks
                tasks={this.state.tasks}
                deleteTask={this.deleteTask}
                checkDone={this.checkDone}
              />
            </React.Fragment>
          }>
          </Route>
          <Route path="/posts" element={
            <React.Fragment>
              <Navbar />
              <Posts />
              <br />
            </React.Fragment>} />
          <Route path="/about" element={
            <React.Fragment>
              <Navbar />
              <About />
              <br />
            </React.Fragment>} />
        </Routes>
      </Router>
    </div>
  }

}

export default App;

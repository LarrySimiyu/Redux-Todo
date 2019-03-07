import React, { Component } from 'react';
import AddToDo from './components/addToDo';
import ToDoList from './components/toDoList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddToDo /> 
        <ToDoList />
      </div>
    );
  }
}

export default App;

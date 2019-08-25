import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      list: []
    }
    this.handleAddtask = this.handleAddtask.bind(this)
  }
  handleAddtask(task) {
    this.setState({list: [...this.state.list, task]})
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import tick from "./img/tick.svg";
import "./App.css";

import TodoItems from "./components/TodoItems";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem:'',//to clear after finishing input
      todoItems: [
        { title: "Mediation", isComplete: true },
        { title: "Reading book" },
        { title: "Playing football" },
      ]
    }

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onItemClicked(item) {
    // this.setState(this.state.title.isComplete);
    return (event) => {
      // console.log(item);
      const isComplete = item.isComplete;
      const {todoItems} = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [...todoItems.slice(0, index), {...item, isComplete: !isComplete},  ...todoItems.slice(index+1)]
      });
    };
  };

  onKeyUp(event) {

    let text = event.target.value;
    if(!text) {
      return;
    }
    text = text.trim();
    if (!text) {
      return;
    }

    if (event.keyCode === 13) {//enter key
      this.setState({
        newItem:'',
        todoItems: [
          {title: text, isComplete: false},
          ...this.state.todoItems
        ]

      });
    } 
    // else {
    //   this.setState({
    //     newItem: text
    //   });
    // }

  }

  onChange(event) {
    this.setState({
      newItem: event.target.value
    });

  }

  render() {
    const {todoItems, newItem} = this.state;
    if (todoItems.length > 0) {
      return (
        <div className="App">
          <div className="Header">
            <img src={tick} width={32} height={32} alt="select all"/>
            <input 
              type="text" 
              placeholder="Add a new item"
              value={newItem}
              onChange={this.onChange}
              onKeyUp={this.onKeyUp}/>
          </div>

          {todoItems.map((item, index) => (
            <TodoItems 
              key={index} 
              item={item} 
              onClick={this.onItemClicked(item)} />
          ))}
        </div>
      );
    } else {
      return (
        <div className="App">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>No data.</p>
        </div>
      );
    }
  }
}

export default App;

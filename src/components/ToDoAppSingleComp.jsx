import React, { Component } from "react";
import AddItem from './AddItem';
import TodoItem from "./TodoItem";

export default class ToDoAppSingleComp extends Component {
  // 💎 STATE 💎
  state = {
    
    toDoList: [
      {
        todoText: "Eat a Healthy Breakfast",
        isComplete: false
      },
      {
        todoText: "Destroy Life On Earth 👽",
        isComplete: false
      },
      {
        todoText: "Brush Teeth",
        isComplete: false
      }
    ]
  };



  // handleOnSubmit = e => {
  //   e.preventDefault();

  //   if (this.state.grbbedValue) {
  //     this.setState({
  //       toDoList: [
  //         ...this.state.toDoList,
  //         { todoText: this.state.grbbedValue, isComplete: false }
  //       ],
  //       grbbedValue: ""
  //     });
  //   } else {
  //     alert("maha2ah");
  //   }
  // };

  handleOnSubmit = newItem => {

      this.setState({
        toDoList: [
          ...this.state.toDoList,
          newItem
        ],
      });
  };

  handleDelete = i => {
    // **** FILTER METHOD
    // this.setState({
    //     toDoList: this.state.toDoList.filter((el, index) => index !== i)
    // });

    // **** SPLICE METHOD
    let tempTab = this.state.toDoList;
    tempTab.splice(i, 1);
    this.setState({
      toDoList: tempTab
    });
  };

  handleDone = i => {
    this.setState({
      toDoList: this.state.toDoList.map((el, index) =>
        index === i ? { ...el, isComplete: !el.isComplete } : el
      )
    });
  };

  // 🔮 RENDERING 🔮
  render() {
    return (
      <div>
        {/* ToDo Header */}
        
        <AddItem addtodo={this.handleOnSubmit}/>
        <TodoItem toDoList={this.state.toDoList} handleDelete={this.handleDelete} handleDone={this.handleDone}/>
      </div>
    );
  }
}

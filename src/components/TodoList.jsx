import React from "react";
import TodoItem from "./TodoItem.jsx"
import TodoInput from "./TodoInput.jsx"
export default class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.deleteItem = this.deleteItem.bind(this)
    this.submitTodo = this.submitTodo.bind(this)
    this.onChange = this.onChange.bind(this)
    this.state = {
      TodoItems: [{
        todo: "test",
        isDone: false
      }, {
        todo: "test2",
        isDone: true
      }, {
        todo: "test3",
        isDone: true
      }],
      text: ""
    }
  }
  deleteItem(index){
    console.log(index)
  }
  submitTodo(e){
    console.log("test")
    // e.preventDefault()
    // let nextItems = this.state.items.concat([{text:this.state.text,id: Date.now()}])
    // let nextText = ""
    // this.setState({items:nextItems,text:nextText})
  }
  onChange(e){
    this.setState({text:e.target.value})
  }
  render() {
    return(
      < React.Fragment >
        < div >
          Hello World!!!
          < TodoItem items = {this.state.TodoItems} deleteItem={this.deleteItem}/>
          < TodoInput text={this.state.text} submitTodo= {this.submitTodo} onChange={this.onChange}/>
          {this.state.text}
        < /div>
      < /React.Fragment>)
  }
}

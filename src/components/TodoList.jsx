import React from "react";
import TodoItem from "./TodoItem.jsx"
import TodoInput from "./TodoInput.jsx"
export default class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.submitTodo = this.submitTodo.bind(this)
    this.onChange = this.onChange.bind(this)
    this.checked = this.checked.bind(this)
    this.state = {
      todoItems: [{
        todo:"test",
        isDone: false
      },{
        todo:"test2",
        isDone: true
      },],
      text: ""
    }
  }
  submitTodo(e){
    e.preventDefault()
    let nextItems = this.state.todoItems.concat([{todo:this.state.text,isDone: false}])
    let nextText = ""
    this.setState({todoItems:nextItems,text:nextText})
  }
  deleteTodo(index){
    let todos = [...this.state.todoItems]
    todos.splice(index,1)
    this.setState({todoItems: todos})
  }
  onChange(e){
    this.setState({text:e.target.value})
  }
  checked(index){
    let todos = [...this.state.todoItems]
    todos[index].isDone = !todos[index].isDone
    this.setState({todoItems: todos})
  }
  render() {
    return(
        < div className={"container"}>
          <div className={"title"}>Todo List!!!</div>
          < TodoInput text={this.state.text} submitTodo= {this.submitTodo} onChange={this.onChange}/>
          < TodoItem items = {this.state.todoItems} deleteTodo={this.deleteTodo} checked={this.checked}/>
        < /div>
      )
  }
}

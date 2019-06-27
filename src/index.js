import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList.jsx"
import './main.scss'

class App extends React.Component{
  render(){
    return(
      <div>
        <TodoList/>
      </div>
    )
  }
}




ReactDOM.render( <App/> , document.getElementById('app'));

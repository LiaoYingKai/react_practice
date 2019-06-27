import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList.jsx"
import './main.scss'

class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <TodoList/>
      </React.Fragment>
    )
  }
}




ReactDOM.render( <App/> , document.getElementById('app'));

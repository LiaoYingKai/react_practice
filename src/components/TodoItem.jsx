import React from "react";

let TodoItem = (props) =>(
    <ul>
        {
          props.items.map((item,index)=>(
              <li key={index} >
                <div className={`checkBox ${item.isDone?"checkedStyle":""}`} onClick={props.checked.bind(this,index)}></div>
                <p className={item.isDone? "textCheckedStyle":""}>{item.todo}</p>
                <button onClick={props.deleteTodo.bind(this,index)}>delete</button>
              </li>
            )
          )
        }
      </ul>
  )

export default TodoItem

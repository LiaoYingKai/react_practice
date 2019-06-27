import React from "react";

let TodoItem = (props) =>(
    <ul>
        {
          props.items.map((item,index)=>(
              <li key={index} className={item.isDone? "red":"yellow"}>
                {item.todo}
                <button onClick={props.checked.bind(this,index)}> check </button>
                {item.isDone.toString()}
                <button onClick={props.deleteTodo.bind(this,index)}>delete</button>
              </li>
            )
          )
        }
      </ul>
  )

export default TodoItem

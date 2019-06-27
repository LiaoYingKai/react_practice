import React from "react";

let TodoItem = (props) =>(
    <ul>
        {
          props.items.map((item,index)=>(
              <li key={index}>
                {item.todo}
                {item.isDone.toString()}
                <button onClick={props.deleteItem.bind(this,index)}>delete</button>
              </li>
            )
          )
        }
      </ul>
  )

export default TodoItem

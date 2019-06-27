import React from "react";

let TodoInput = (props) =>(
  <div>
    <input type="text" onChange={props.onChange} value={props.text} />
    <button onClick={props.submitTodo}>Add Item</button>
  </div>
)
export default TodoInput

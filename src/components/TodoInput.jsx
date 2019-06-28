import React from "react";

let TodoInput = (props) =>(
  <div className={"todoInputBox"}>
    <div className="inputContainer">
      <input id="input" type="text" onChange={props.onChange} value={props.text} placeholder="請輸入內容"/>
      <label htmlFor="input">請輸入內容</label>
      <div className="bottom-line"></div>
    </div>
    <button onClick={props.submitTodo}>Add Item</button>
  </div>
)
export default TodoInput

import React, { useRef } from "react";
import {IoClose } from "react-icons/io5";

const TodoItem = (props) => {

  const { item, removeTodo, } = props;
  const inputRef = useRef(true);

  

  return (
    <li
      className="card"
    >
      <textarea
      /* while ref is true until then textarea stays disabled */
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
      />
      <div className="btns">
        <button
          style={{ color: "pink" }}
          onClick={() => removeTodo(item.id)} >
          <IoClose />
        </button>
      </div>
       
    </li>
  );
};

/* to return a new connected component */
export default TodoItem;
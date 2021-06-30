import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  removeTodos,
} from "../redux/reducer";
import TodoItem from "./TodoItem";

/* to map state to props */
const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

/* to dispatch particular actions */
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
  };
};

/* to display todo items */
const DisplayTodos = (props) => {
  const [sort] = useState("active");
  return (
    <div className="displaytodos">

      <ul>
          
          {props.todos.length > 0 && sort === "active" /* Renders active todo items */
            ? props.todos.map((item) => {
                return (
                  item.completed === false && (
                    /* to pass data to TodoItem component */
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                    />
                        
                  )
                );
              })
            : null}
          
      </ul>
    </div>
  );
};

/* to return a new connected component */
export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
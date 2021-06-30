import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";

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
  };
};

const Todos = (props) => {
  console.log("props",props);
  const [todo, setTodo] = useState("");

/* to add todo items */
  const add = () => {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
  
  };

  /* to handle changes */
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        value={todo}
      />

      <button className="add-btn" onClick={() => add()}>
        +
      </button>
      <br />

    </div>
  );
};

/* to connect this component with redux store */
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
import "./cssStyle/main.css";
import DisplayTodos from "./componants/DisplayTodos";
import Todos from "./componants/Todos";


function App() {
  return (
    <div className="App">
      <header>
         <h1>Todo List</h1>
      </header>
      <Todos/>
      <DisplayTodos/>
    </div>
  );
}

export default App;

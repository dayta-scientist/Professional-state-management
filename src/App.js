import "./App.css";
import { ClassState } from "./ClassState";
import { UseState } from "./UseState";

function App() {
  return (
    <div className="App">
      <UseState name="use state" />
      <ClassState name="class state" />
    </div>
  );
}

export default App;

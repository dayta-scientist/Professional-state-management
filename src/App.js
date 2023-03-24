import "./App.css";
import { ClassState } from "./ClassState";
import { UseState } from "./UseState";

function App() {
  return (
    <div className="App">
      <UseState name="Use state" />
      <ClassState name="Class state" />
    </div>
  );
}

export default App;

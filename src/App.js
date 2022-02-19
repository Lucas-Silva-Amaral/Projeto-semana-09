import "./App.css";
import Column from "./components/Column/Column";
import Main from "./components/Main/Main";
function App() {
  return (
    <div className="container">
      <Column>To Do</Column>
      <Column>In Progress</Column>
      <Column>Review</Column>
      <Column>Done</Column>
    </div>
  );
}

export default App;

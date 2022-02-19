import "./App.css";
import Column from "./components/Column/Column";
import Main from "./components/Main/Main";
function App() {
  return (
    <Main>
      <div className="container">
        <Column>To Do</Column>
        <Column>In Progress</Column>
        <Column>Review</Column>
        <Column>Done</Column>
      </div>
    </Main>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header/Header";
import Article from "./components/Article/Article";
import Column from "./components/Column/Column";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <Main>
        <Header>Kanban</Header>
        <Article />
        <div className="container">
          <Column status="to-do">To Do</Column>
          <Column status="in-progress">In Progress</Column>
          <Column status="review">Review</Column>
          <Column status="done">Done</Column>
        </div>
      </Main>
    </>
  );
}

export default App;

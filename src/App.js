
import "./App.css"
import Header from "./components/Header/Header"
import Article from "./components/Article/Article"
import Column from "./components/Column/Column";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <Header>Kanban</Header>
      <Article />
      <Main>
      <div className="container">
        <Column>To Do</Column>
        <Column>In Progress</Column>
        <Column>Review</Column>
        <Column>Done</Column>
      </div>
    </Main>
    </>
  )
}

export default App;

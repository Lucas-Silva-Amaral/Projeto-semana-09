import "./Main.css"
import Title from "../Title/Title"
import Column from "../Column/Column"
import dataColumn from "../consts/data"

const Main = () => {
  return (
    <div className="bg-home">
      <Title>Kanbam</Title>
      <div className="column-display">
        <Column data={dataColumn}></Column>
      </div>
    </div>
  )
}

export default Main

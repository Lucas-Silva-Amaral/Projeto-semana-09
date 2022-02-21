import "./styles.css"
import Article from "../Article/Article"

const Column = (props) => {
  const { data } = props

  return data.map((item) => (
    <div className="column" style={{ backgroundColor: `${item.bgColumn}` }}>
      <div className="column-title">
        <img src={item.icon} alt="Title" />
        <h3>{item.title}</h3>
      </div>
      {item.data.map((item) => (
        <Article
          name={item.name}
          tag={item.tag}
          image={item.image}
          bgTag={item.bgTag}
        />
      ))}
    </div>
  ))
}


export default Column

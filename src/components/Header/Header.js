import "./styles.css"

const Header = (props) => {
  const { children } = props

  return <h1 className="title">{children}</h1>
}

export default Header

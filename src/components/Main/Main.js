import "./Main.css";

const Main = (props) => {
  const { children } = props;
  return <div className="container">{children}</div>;
};

export default Main;

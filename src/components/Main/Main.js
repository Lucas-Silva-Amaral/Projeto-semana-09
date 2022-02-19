import "./Main.css";

const Main = (props) => {
  const { children } = props;
  return <div className="bg-home">{children}</div>;
};

export default Main;

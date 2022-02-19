import "./styles.css";

const Column = (props) => {
  const { children, icone } = props;

  return (
    <div className="column">
      <p>{children}</p>
    </div>
  );
};

export default Column;

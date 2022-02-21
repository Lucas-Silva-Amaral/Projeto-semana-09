import "./styles.css";

const Column = (props) => {
  const { children, status, as } = props;

  return (
    <section>
      <div className={`top-column status-${status}-top`}></div>
      <div className={`column status-${status}`}>
        <img className="img" src="./img/Done.png" />
        <p>{children}</p>
      </div>
    </section>
  );
};

export default Column;

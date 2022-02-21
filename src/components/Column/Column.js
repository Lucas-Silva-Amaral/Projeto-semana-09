import "./styles.css";

import toDo from "./img/To-Do.png";
import inProgress from "./img/In-Progress.png";
import review from "./img/Review.png";
import done from "./img/Done.png";

const Column = (props) => {
  const { children, status } = props;

  return (
    <section>
      <div className={`top-column status-${status}-top`}></div>
      <div className={`column status-${status}`}>
        <img
          className="img"
          src={
            status == "to-do"
              ? toDo
              : status == "in-progress"
              ? inProgress
              : status == "review"
              ? review
              : done
          }
        />
        <p>{children}</p>
      </div>
    </section>
  );
};

export default Column;

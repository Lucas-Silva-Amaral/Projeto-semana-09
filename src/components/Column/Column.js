import "./styles.css";

import toDo from "./img/To-Do.png";
import inProgress from "./img/In-Progress.png";
import review from "./img/Review.png";
import done from "./img/Done.png";
import Article from "../Article/Article";

const Column = (props) => {
  const { children, status } = props;

  return (
    <section>
      <div className={`top-column status-${status}-top`}></div>
      <div className={`column status-${status}`}>
        <div className="column-title">
          <img
            src={
              status === "to-do"
                ? toDo
                : status === "in-progress"
                ? inProgress
                : status === "review"
                ? review
                : done
            }
          />
          <p>{children}</p>
        </div>
        {status === "review" ? (
          <Article />
        ) : status === "done" ? (
          <Article />
        ) : (
          ""
        )}
        <Article />
        <Article />
      </div>
    </section>
  );
};

export default Column;

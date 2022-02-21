import React from "react";
import "./styles.css";

const Article = (props) => {
  const { title, image, tag } = props;

  return (
    <article className="article">
      <h3 className="article-title">{title}</h3>
      <div className="article-info">
        <img className="img" src={image} alt="User" />
        <p className="tag">{tag}</p>
      </div>
    </article>
  );
};

export default Article;

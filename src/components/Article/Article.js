import React from "react";
import "./styles.css";

const Article = (props) => {
  const { name, image, tag, bgTag } = props

 return (
    <article className="article">
      <h3 className="article-title">{name}</h3>
      <div className="article-info">
        <img className="img" src={image} alt="User" />
        <p className="tag" style={{ backgroundColor: `${bgTag}` }}>
          {tag}
        </p>
      </div>
    </article>
  )
}

export default Article;

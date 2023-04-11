import React from "react";

const Article = ({ title, date, preview }) => {
  console.log(date);

  return (
    <div>
      <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
      </article>
    </div>
  );
};

export default Article;

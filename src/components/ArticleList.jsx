import React from "react";
import Article from "./Article";

const ArticleList = ({ posts }) => {
  console.log(posts);
  const articlePost = posts.map((element) => {
    return (
      <Article
        title={element.title}
        date={element.date}
        preview={element.preview}
      />
    );
  });

  return (
    <div>
      <main>{articlePost}</main>
    </div>
  );
};

export default ArticleList;

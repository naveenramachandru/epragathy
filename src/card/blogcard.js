import React from "react";
import "../card/blog.css";

function BlogCard({ img, body, title }) {
  return (
    <div className="container">
      <img src={img} alt="Avatar" className="image" />
      <div className="middle">
        <h1 className="title">{title}</h1>
        <div className="text">{body}</div>
      </div>
    </div>
  );
}

export default BlogCard;

import React from "react";
import "../card/card.css";

function CustomCard({ title, img, body, height, children }) {
  return (
    <div className="custom card">
      {/* <figure> */}
      <img src={img} className="cardimg" alt="..." height={height} />
      {/* <
    /figure> */}
      <br />

      <div className="card-body py-2">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
        <div className="btn">
          {/* <i class="fa fa-chevron-down" ></i> */}
          {children}
        </div>
      </div>
    </div>
  );
}

export default CustomCard;

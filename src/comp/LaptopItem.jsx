import React from "react";
import { Link } from "react-router-dom";

function LaptopItem(props) {
  return (
    <Link to={"/laptop/" + props.data.title} className="laptop-item">
      <img src={props.data.poster_path} alt="loading..." />
      <div className="laptop-info">
        <h1>{props.data.title}</h1>
        <h2>{props.data.price}</h2>
      </div>
    </Link>
  );
}

export default LaptopItem;

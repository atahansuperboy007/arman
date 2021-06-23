import React from "react";
import { Link } from "react-router-dom";

function SmartItem(props) {
  return (
    <Link to={"/smartphone/" + props.data.title} className="smart-item">
      <img src={props.data.poster_path} alt="" />
      <div className="smart-info">
        <h1>{props.data.title}</h1>
        <h2>{props.data.price}</h2>
      </div>
    </Link>
  );
}

export default SmartItem;

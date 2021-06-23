import React from "react";
import { Link } from "react-router-dom";
import FirstImage from "./img/macbook-dark.jpeg";
import SecondImage from "./img/Samsung-row.jpg";
import ThirdImage from "./img/mac-on-table.jpg";

function Services() {
  return (
    <div className="services">
      <div className="services-list">
        <div className="services-item">
          <img className="services-image" src={FirstImage} alt="loading..." />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            blanditiis dolor labore perferendis amet numquam officia fugiat
            molestiae nulla voluptate asperiores ad deleniti earum ullam.
          </p>
          <p className="services-link">
            <Link to={"/laptops"}>Перейти</Link>
          </p>
        </div>
        <div className="services-item">
          <img className="services-image" src={SecondImage} alt="loading..." />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            blanditiis dolor labore perferendis amet numquam officia fugiat
            molestiae nulla voluptate asperiores ad deleniti earum ullam.
          </p>
          <p className="services-link">
            <Link to={"/smart"}>Перейти</Link>
          </p>
        </div>
        <div className="services-item">
          <img className="services-image" src={ThirdImage} alt="loading..." />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            blanditiis dolor labore perferendis amet numquam officia fugiat
            molestiae nulla voluptate asperiores ad deleniti earum ullam.
          </p>
          <p className="services-link">
            <Link to={"/laptops"}>Перейти</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;

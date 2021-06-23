import React, { Component } from "react";
import image from "./img/apple-store.jpeg";

class Warranty extends Component {
  render() {
    return (
      <div id="warranty">
        <div className="container">
          <div className="warranty-info">
            <div className="warranty-image">
              <img src={image} alt="loading..." />
            </div>
            <div className="warranty-text">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Explicabo sint harum asperiores atque iure unde tempora. Cumque
                in consequatur ullam totam facere eos voluptates, id cupiditate,
                voluptate vel optio obcaecati eveniet architecto nisi et
                blanditiis libero ipsam ipsum commodi aut iste ducimus nostrum
                minima explicabo? Facere, voluptatibus, nemo possimus at
                asperiores doloribus sed nobis exercitationem officiis
                doloremque quibusdam ut perspiciatis deserunt soluta cupiditate,
                quas quisquam reiciendis error? 
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Warranty;

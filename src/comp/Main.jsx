import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import MacbookDark from "./img/macbook-dark.jpeg";
import MacOnTable from './img/mac-on-table.jpg'

class Main extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={MacbookDark} alt="macbook" />
          <Carousel.Caption>
            <h3>Macbook</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, est
              saepe! Fugit, molestiae tempora placeat esse vitae, eligendi quam,
              sint laboriosam temporibus numquam earum alias minima obcaecati.
              Facere, animi quo.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={MacOnTable} alt="macbook" />
          <Carousel.Caption>
            <h3>Macbook</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, est
              saepe! Fugit, molestiae tempora placeat esse vitae, eligendi quam,
              sint laboriosam temporibus numquam earum alias minima obcaecati.
              Facere, animi quo.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Main;

import React from "react";
import LaptopItem from "./LaptopItem";
import laptops from "../laptops";
import { BrowserRouter, Route } from "react-router-dom";

function LaptopsList() {
  <BrowserRouter>
    <Route path="/:id" component={LaptopItem} />
  </BrowserRouter>;

  return (
    <div className="laptops-list">
      {laptops.map((laptop) => (
        <LaptopItem data={laptop} />
      ))}
    </div>
  );
}

export default LaptopsList;

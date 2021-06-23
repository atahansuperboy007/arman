import React from "react";
import SmartItem from "./SmartItem";
import smartphones from "../smartphones";
import { Route, BrowserRouter } from "react-router-dom";

function SmartList() {
  <BrowserRouter>
    <Route path="/:id" component={SmartItem} />
  </BrowserRouter>;

  return (
    <div className="smart-list">
      {smartphones.map((smartphone) => (
        <SmartItem data={smartphone} />
      ))}
    </div>
  );
}

export default SmartList;

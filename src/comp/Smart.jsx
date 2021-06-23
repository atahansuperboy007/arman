/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import smartphones from "../smartphones";

function Smart() {
  const { id } = useParams();
  const [num, setNum] = useState(0);

  function rise() {
    setNum(num + 1);
  }

  return (
    <div id="smart-item">
      <div className="container">
        {smartphones.map((item) => {
          if (item.title === id) {
            return (
              <div className="item-info">
                <img src={item.poster_path} alt="loading..." />
                <div className="item-text">
                  {/* title */}
                  <div className="title">
                    <div className="name-title">
                      <p>Название:</p>
                    </div>
                    <div className="title-name">
                      <p>{item.title}</p>
                    </div>
                  </div>
                  {/* cpu */}
                  <div className="processor">
                    <div className="name-processor">
                      <p>Процессор:</p>
                    </div>
                    <div className="processor-name">
                      <p>{item.cpu}</p>
                    </div>
                  </div>
                  {/* display  */}
                  <div className="display">
                    <div className="name-display">
                      <p>Дисплей:</p>
                    </div>
                    <div className="display-name">
                      <p>{item.display}</p>
                    </div>
                  </div>
                  {/* os  */}
                  <div className="operation-system">
                    <div className="name-os">
                      <p>
                        Операционная <br /> система:
                      </p>
                    </div>
                    <div className="os-name">
                      <p>{item.os}</p>
                    </div>
                  </div>
                  {/* price  */}
                  <div className="price">
                    <div className="name-price">
                      <p>Цена:</p>
                    </div>
                    <div className="price-name">
                      <p>{item.price}</p>
                    </div>
                  </div>
                  <div className="amount-of-products">
                    <button onClick={rise}>Бросить в корзину</button>
                    <p>{num} штук</p>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Smart;

import React, { useContext } from "react";
import App, { StocksContext } from "../App";
import { Link, useHistory } from "react-router-dom";

function Product(props) {
  let stocks = useContext(StocksContext);
  let history = useHistory();

  let saveLocalStorage = (key, value) => {
    let items = JSON.parse(localStorage.getItem(key));
    if (items === null) {
      items = [];
    }
    items.push(value);
    localStorage.setItem(key, JSON.stringify(items));
  };

  let saveHistory = (key, value) => {
    let items = JSON.parse(localStorage.getItem(key));

    if (items === null) {
      saveLocalStorage(key, value);
    } else {
      let found = items.findIndex((item) => item.id === value.id);
      if (found < 0) {
        saveLocalStorage(key, value);
      }
    }
  };

  return (
    <div
      className="col-md-4"
      onClick={() => {
        history.push("/detail/" + props.item.id);
        saveHistory("history", props.item);
      }}
    >
      <Link to={`/detail/${props.item.id}`}>
        <img src={props.item.img} width="100%" />
      </Link>
      <h4>{props.item.title}</h4>
      <p>
        {props.item.content} & {props.item.price}원
      </p>
      <p>재고 : {stocks[props.item.id]}</p>
    </div>
  );
}

export default Product;

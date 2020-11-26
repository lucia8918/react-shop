import React, { useContext } from "react";
import App, { StocksContext } from "../App";
import { Link } from "react-router-dom";

function Product(props) {
  let stocks = useContext(StocksContext);
  return (
    <div className="col-md-4">
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

import React, { useState } from "react";
import App from '../App'

function Product(props){
  return (<div className="col-md-4">
    <img src={props.item.img} width="100%" />
    <h4>{props.item.title}</h4>
    <p>{props.item.content} & {props.item.price}</p>
  </div>)
}

export default Product;
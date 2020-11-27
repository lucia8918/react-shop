import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

let 장바구니alert초기값 = true;

function 장바구니alertReducer(state = 장바구니alert초기값, 액션) {
  if (액션.type == "alert닫기") {
    state = false;
  }
  return state;
}

let 장바구니초기값 = [
  { id: 0, name: "멋진신발", quan: 2 },
  { id: 1, name: "멋진신발2", quan: 2 },
  { id: 2, name: "멋진신발3", quan: 2 },
];

function reducer(state = 장바구니초기값, 액션) {
  if (액션.type === "항목추가") {
    let copy = [...state];
    let id = 액션.payload.id;

    // 이미 장바구니에 존재 하는 상품의 경우
    let found = copy.findIndex((item) => item.id === id);
    if (found >= 0) {
      copy[found].quan += Number(액션.payload.quan);
    } else {
      copy.push(액션.payload);
    }

    return copy;
  } else if (액션.type === "수량증가") {
    let id = 액션.payload.id;
    let newArray = [...state];
    newArray.find((item) => item.id == id).quan++;

    return newArray;
  } else if (액션.type === "수량감소") {
    let newArray = [...state];
    let id = 액션.payload.id;
    let newQuantity = newArray.find((item) => item.id == id).quan;

    if (newQuantity > 0) newQuantity--;
    newArray.find((item) => item.id == id).quan = newQuantity;

    return newArray;
  } else {
    return state;
  }
}

let store = createStore(combineReducers({ reducer, 장바구니alertReducer }));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

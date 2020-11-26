import "./App.css";
import React, { useState } from "react";
import { Button, Jumbotron, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Data from "./data";
import Product from "./components/Product";
import Detail from "./components/Detail";
import axios from "axios";

import { Link, Route, Switch } from "react-router-dom";

function App() {
  let [shoes, shoes변경] = useState(Data);
  let [stocks, stocks변경] = useState([10, 11, 12]);

  let shoes추가 = (data) => {
    let newArray = [...shoes];
    data.map((item) => {
      item.img = "https://codingapple1.github.io/shop/shoes1.jpg";
      newArray.push(item);
    });
    shoes변경(newArray);
  };

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Shoes mall</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/detail/0">
              Detail
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Switch : 라우터중에 가장 먼저 매칭되는거 선택해주세요.*/}
      <Switch>
        <Route exact path="/">
          <Jumbotron className="background">
            <h1>20% Season OFF</h1>
            <p>
              A Shoes sale is one that offers some sort of savings but only for
              a short time. A good flash sale creates urgency, hype, and a spike
              in sales.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>

          <div className="container">
            <div className="row">
              {shoes.map((item) => {
                return (
                  <Product item={item} key={item.id} stocks={stocks}></Product>
                );
              })}
            </div>
            <button
              className="btn btn-primary"
              onClick={() => {
                axios
                  .get("https://codingapple1.github.io/shop/data2.json")
                  .then((result) => {
                    console.log("호출 성공 :", result.data);
                    shoes추가(result.data);
                  })
                  .catch(() => {
                    console.log("호출 실패");
                  });
              }}
            >
              더보기
            </button>
          </div>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={shoes} stocks={stocks} stocks변경={stocks변경} />
        </Route>

        <Route path="/:id">
          <div>잘못된 접근 입니다.</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

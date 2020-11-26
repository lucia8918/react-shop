import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function Cart(props) {
  let history = useHistory();
  return (
    <div>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        {props.state.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quan}</td>
              <td>
                <button
                  className="btn-light"
                  onClick={() => {
                    props.dispatch({
                      type: "수량증가",
                      payload: { id: item.id },
                    });
                  }}
                >
                  +
                </button>
                <button
                  className="btn-light"
                  onClick={() => {
                    props.dispatch({
                      type: "수량감소",
                      payload: { id: item.id },
                    });
                  }}
                >
                  -
                </button>
              </td>
            </tr>
          );
        })}
      </Table>
      {props.alert열렸니 === true ? (
        <div className="my-alert">
          <p>지금 구매하시면 20% 할인</p>
          <button
            onClick={() => {
              props.dispatch({ type: "alert닫기" });
            }}
          >
            닫기
          </button>
        </div>
      ) : null}

      <button
        className="btn btn-info ml-1"
        onClick={() => {
          history.goBack();
        }}
      >
        뒤로가기
      </button>
    </div>
  );
}

// Redux store에서 데이터를 가져와서, props로 만들어주는 함수
function state를props화(state) {
  return { state: state.reducer, alert열렸니: state.장바구니alertReducer };
}

export default connect(state를props화)(Cart);

//export default Cart;

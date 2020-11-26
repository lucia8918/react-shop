import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "../css/Detail.scss";
import Stock from "./Stock";

// Life Cycle Hook 옛날에는 이렇게 component 생명 주기 관리.
// 생성, 재랜더링, 삭제
class Detail2 extends React.Component {
  componentDidMount() {
    //Detail2 컴포넌트가 Mount 되고나서 실행할 코드
  }

  componentWillUnmount() {
    //Detail2 컴포넌트가 Unmount 되기전에 실행할 코드
  }
}

let 박스 = styled.div`
  padding: 20px;
`;
let 제목 = styled.h4`
  font-size: 20px;
  color: ${(props) => props.색상};
`;

function Detail(props) {
  let [alert, alert변경] = useState(true);
  let [입력값, 입력값변경] = useState("");

  let changeValue = (e) => {
    입력값변경(e.target.value);
  };

  let submitValue = () => {
    console.log(입력값);
  };

  useEffect(() => {
    console.log("created");
    let 타이머 = setTimeout(() => {
      // document.getElementById("my-alert").style.display="none";
      console.log("alert 실행");
      alert변경(false);
    }, 2000);

    return () => {
      clearTimeout(타이머);
      console.log("exit");
    };
  }, [alert]);

  let { id } = useParams();
  let history = useHistory();

  let shoe = props.shoes.find((item) => item.id == id);

  if (shoe == null) return <div>없는 상품입니다.</div>;

  return (
    <div className="container">
      <박스>
        <제목 색상="blue">Detail</제목>
      </박스>

      {/*<input onChange={changeValue} />*/}
      {/*<button onClick={submitValue}>입력</button>*/}

      {alert === true ? (
        <div id="my-alert" className="my-alert">
          <p>재고가 얼마 남지 않았습니다.</p>
        </div>
      ) : null}

      {/*<div name="my-alert" className="my-alert-red">*/}
      {/*  <p>재고가 얼마 남지 않았습니다.</p>*/}
      {/*</div>*/}
      {/*<div name="my-alert" className="my-alert-black">*/}
      {/*  <p>재고가 얼마 남지 않았습니다.</p>*/}
      {/*</div>*/}
      <div className="row">
        <div className="col-md-6">
          <img src={shoe.img} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}</p>
          <Stock stocks={props.stocks}></Stock>
          <button
            className="btn btn-danger"
            onClick={() => {
              let newArray = [...props.stocks];
              newArray[0]--;
              props.stocks변경(newArray);
            }}
          >
            주문하기
          </button>
          <button
            className="btn btn-info"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
          {/*<button*/}
          {/*  className="btn btn-danger"*/}
          {/*  onClick={() => {*/}
          {/*    history.push("/");*/}
          {/*  }}*/}
          {/*>*/}
          {/*  메인페이지로 이동*/}
          {/*</button>*/}
        </div>
      </div>
    </div>
  );
}

export default Detail;

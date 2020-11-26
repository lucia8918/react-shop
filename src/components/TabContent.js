import React, { useEffect } from "react";

function TabContent(props) {
  useEffect(() => {
    props.스위치변경(true);
  });

  if (props.누른탭 === 0) {
    return <div className="mt-5">상세 설명 페이지</div>;
  } else if (props.누른탭 === 1) {
    return <div className="mt-5">이용 후기 페이지</div>;
  } else if (props.누른탭 === 2) {
    return <div className="mt-5">Q&A 페이지</div>;
  } else {
    return <div className="mt-5">모르는 내용</div>;
  }
}

export default TabContent;

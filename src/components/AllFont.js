import React from "react";
import "./allFont.scss";

function AllFont({ allData }) {
  return (
    <article className="wrapper">
      <div className="txt">
        <h3>모든 폰트</h3>
        <p>상업적으로 사용할 수 있는 모든 폰트들을 만나 보세요</p>
      </div>

      <div className="input fixed">
        <input type="text" placeholder="모든 폰트 내에서 검색" />
        <input type="text" placeholder="예시 문구를 적어보세요" />
      </div>
      <div className="grid">
        {allData.map((item) => (
          <div key={item.id} className="flex">
            <h4>{item.title}</h4>
            <p>{item.writer}</p>
            <hr />
            <textarea>{item.des}</textarea>

            <div className="bold">
              <p>{item.bold}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default AllFont;

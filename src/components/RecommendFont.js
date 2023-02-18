import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./allFont.scss";
import { FontDetailPreView } from "./FontDetail";

function RecommendFont({ allData }) {
  const [slideBarValue, setSlideBarValue] = useState("30");
  return (
    <article className="wrapper">
      <div className="flex2">
        <div className="txt">
          <h3>추천 폰트</h3>
          <p>눈누가 직접 제안하는 용도별 추천 폰트들을 만나 보세요</p>
        </div>
        <div className="btn">
          <Link to="/allFont">모든 폰트→</Link>
        </div>
      </div>
      <div className="grid">
        {allData
          .filter((item) => item.good === "5")
          .map((item) => (
            <FontDetailPreView
              key={item.id}
              item={item}
              txtFontSize={slideBarValue}
            />
          ))}
      </div>
    </article>
  );
}

export default RecommendFont;

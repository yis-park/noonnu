import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./allFont.scss";
import { FontDetailPreView } from "./FontDetail";

function RecommendFont({ allData, item }) {
  const nav = useNavigate();
  const onGo = () => {
    nav(`/allFont/${allData.title}`);
  };
  return (
    <article className="wrapper">
      <div className="txt">
        <h3>추천 폰트</h3>
        <p>눈누가 직접 제안하는 용도별 추천 폰트들을 만나 보세요</p>
      </div>
      <div className="grid">
        {allData
          .filter((item) => item.good === "5")
          .map((item) => (
            <FontDetailPreView key={item.id} item={item} />
          ))}
      </div>
    </article>
  );
}

export default RecommendFont;

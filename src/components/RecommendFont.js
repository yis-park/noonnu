import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./allFont.scss";

function RecommendFont({ allData, item }) {
  const nav = useNavigate();
  const onGo = () => {
    nav(`/allFont/${item.id}`);
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
            <div
              key={item.id}
              className="flex"
              style={{ fontFamily: ` ${item.fontFamily}` }}
            >
              <Link to="">
                <div className="click" onClick={onGo}>
                  <div className="hover">
                    <h4>{item.title}</h4>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 stroke-current"
                      width="35"
                      height="35"
                      viewBox="0 0 12 24"
                      strokeWidth="1"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <polyline points="9 6 15 12 9 18"></polyline>
                    </svg>
                  </div>
                  <p>{item.writer}</p>
                  <div className="line"></div>
                </div>
              </Link>
              <textarea
                name="editor"
                style={{ fontFamily: ` ${item.fontFamily}`, fontSize: "30px" }}
                placeholder={`${item.des}`}
              ></textarea>

              <div className="bold">
                <p>{item.bold}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-current fill-current pointer-events-none"
                  // width="44"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                </svg>
              </div>
            </div>
          ))}
      </div>
    </article>
  );
}

export default RecommendFont;

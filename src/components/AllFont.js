import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./allFont.scss";
import Modal from "./Modal";

function AllFont({ allData, item }) {
  const [modal, setModal] = useState(false);
  const nav = useNavigate();
  const onGo = () => {
    nav(`/allFont/${item.id}`);
  };
  return (
    <article className="wrapper">
      <div className="txt">
        <h3>모든 폰트</h3>
        <p>상업적으로 사용할 수 있는 모든 폰트들을 만나 보세요</p>
      </div>

      <div className="input fixed after">
        <div className="search">
          <input type="text" placeholder="모든 폰트 내에서 검색" />
          <svg
            class="h-5 w-5 text-gray-600 dark:text-gray-400 stroke-current"
            width="20"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="10" cy="10" r="7"></circle>
            <line x1="21" y1="21" x2="15" y2="15"></line>
          </svg>
        </div>

        <div className="try">
          <input type="text" placeholder="예시 문구를 적어보세요" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-600 dark:text-gray-400 stroke-current"
            width="22"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
            <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
          </svg>
        </div>
      </div>
      <div className="grid">
        {allData.map((item) => (
          <div
            key={item.id}
            className="flex"
            style={{ fontFamily: ` ${item.fontFamily}` }}
          >
            <Link to="allFont/${id}">
              <div className="click" onClick={onGo}>
                <div className="hover">
                  <h4>{item.title}</h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 stroke-current"
                    width="35"
                    height="35"
                    viewBox="0 0 12 24"
                    stroke-width="1"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
              <button
                onClick={() => {
                  setModal(!modal);
                }}
              >
                {modal ? <Modal /> : null}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 stroke-current fill-current pointer-events-none"
                  // width="44"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default AllFont;

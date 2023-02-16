import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./navigation.scss";
import noonMore from "../assets/images/noon-more.jpg";
import logImg from "../assets/images/login.png";

import navData from "./navData";
import { FontDetailPreView } from "./FontDetail";

function Navigation() {
  const [data, setData] = useState(navData);
  const [userInput, setUserInput] = useState("");
  const onChange2 = (e) => {
    setUserInput(e.target.value);
  };

  const [subMenu, setSubMenu] = useState(false);
  const outside = useRef();
  // 검색

  return (
    <nav className="navigation">
      <ul className="globalNav">
        {data.map((data) => (
          <li key={data.id}>
            <Link to={data.url}>{data.title} </Link>
          </li>
        ))}
      </ul>
      <ul className="input">
        <li>
          <input
            type="search"
            name="q"
            placeholder="전체 폰트 검색"
            onChange={onChange2}
            value={userInput}
          />

          <svg
            className="h-5 w-5 text-gray-600 dark:text-gray-400 stroke-current"
            width="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="10" cy="10" r="7"></circle>
            <line x1="21" y1="21" x2="15" y2="15"></line>
          </svg>
        </li>
      </ul>
      <ul className="icon">
        <li>
          <button
            onClick={() => {
              setSubMenu(!subMenu);
            }}
          >
            <img className="noonMore" src={noonMore} />
            {subMenu ? (
              <ul
                className="subMenu"
                ref={outside}
                onClick={(e) => {
                  if (e.target == outside.current) setSubMenu(false);
                }}
              >
                <li className="subLi">
                  <Link to=""> 공지사항</Link>
                </li>
                <li className="subLi">
                  <Link to=""> 로그인</Link>
                </li>
                <li className="subFlex">
                  <img className="logImg" src={logImg} />
                  <Link to="/join"> 회원가입</Link>
                </li>
              </ul>
            ) : null}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

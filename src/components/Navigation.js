import { Link } from "react-router-dom";

import "./navigation.scss";
import noonMore from "../assets/images/noon-more.jpg";

function Navigation(props) {
  return (
    <nav className="navigation">
      <ul className="globalNav">
        <li>
          <Link to="/">추천 폰트</Link>
        </li>
        <li>
          <Link to="/allfont">모든 폰트</Link>
        </li>
        <li>
          <Link to="/whatfont">무슨 폰트?</Link>
        </li>
        <li>
          <Link to="*">아무 디자인</Link>
        </li>

        <li>
          <input type="text" placeholder="전체 폰트 검색" />
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
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            class="h-6 w-6 inline-block dark:hidden"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.2945 23.2131C28.8883 23.7371 27.3664 24.0236 25.7776 24.0236C18.6336 24.0236 12.8423 18.2323 12.8423 11.0883C12.8423 8.88718 13.392 6.81447 14.3617 5C9.44519 6.83239 5.94342 11.5696 5.94342 17.1248C5.94342 24.2687 11.7348 30.0601 18.8787 30.0601C23.8216 30.0601 28.1169 27.2877 30.2945 23.2131Z"
              fill="#FFD951"
            ></path>
          </svg>
        </li>
        <li>
          <img
            class="h-8 w-8 rounded-full object-cover border border-zinc-200 dark:border-zinc-600 bg-gray-50 p-0.5"
            src={noonMore}
          />
          <ul className="subMenu">
            <li>
              <Link to=""> 공지사항</Link>
            </li>
            <li>
              <Link to="/join"> 회원가입</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

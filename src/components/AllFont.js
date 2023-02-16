import { useRef, useState } from "react";
import "./allFont.scss";
import { FontDetailPreView } from "./FontDetail";

function AllFont({ allData }) {
  const [userInput, setUserInput] = useState("");
  const onChange2 = (e) => {
    setUserInput(e.target.value);
  };
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  console.log(allData);
  const userMenu = useRef();

  const [isShow, setIsShow] = useState(false);
  const onOpen = () => {
    setIsShow(true);
  };
  const onClose = () => {
    setIsShow(false);
  };

  return (
    <article className="wrapper">
      <div className="txt">
        <h3>모든 폰트</h3>
        <p>상업적으로 사용할 수 있는 모든 폰트들을 만나 보세요</p>
      </div>
      <div className="input fixed after">
        <div className="search">
          <input
            type="search"
            placeholder="모든 폰트 내에서 검색"
            onChange={onChange2}
            value={userInput}
            name="q"
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
        </div>
        <div className="userInput"></div>

        <div className="try">
          <input
            placeholder="예시 문구를 적어보세요"
            onChange={onChange}
            value={text}
            type="search"
            name="q"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600 dark:text-gray-400 stroke-current"
            width="22"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
            <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
          </svg>
        </div>
      </div>

      <div className="grid">
        {allData.map((_item) => (
          <FontDetailPreView
            key={_item.id}
            item={_item}
            onChange={onChange}
            value={(userInput, text)}
          />
        ))}
      </div>
    </article>
  );
}

export default AllFont;

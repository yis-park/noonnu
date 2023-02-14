import { useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import "./fontDetail.scss";

export function FontDetailPreView({ item }) {
  const userMenu = useRef();
  // console.log(item);

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const onGo = () => {
    // navigate("/main"); 해당 페이지로
    navigate(-1);
  };
  return (
    <div>
      <article className="flex" style={{ fontFamily: ` ${item.fontFamily}` }}>
        <Link to={`/allFont/${item.id}`}>
          <div className="click">
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
          style={{ fontFamily: ` ${item.fontFamily}`, fontSize: "30px" }}
          placeholder={`${item.des}`}
          // placeholder={textValue}
        ></textarea>

        <div className="bold">
          <p>{item.bold}</p>
          <button
            ref={userMenu}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? <Modal /> : null}

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
          </button>
        </div>
      </article>
    </div>
  );
}

export function FontDetail({ items }) {
  console.log(items);
  const [isOpen, setIsOpen] = useState(false);
  const userMenu = useRef();
  const navigate = useNavigate();

  const _path = window.location.href;
  const _lastIndex = _path.lastIndexOf("/");
  const _subString = _path.substring(_lastIndex + 1);

  let item = items.find((_item) => _item.id === _subString);
  let subWeight = item.numWeight;

  let arrWeight = subWeight === 0 ? [300] : item.weight;

  console.log(arrWeight);

  // 위에게 한줄 요약 한거임
  // for (let i = 0; i < items.length; i++) {
  //   if (items[i].id === _subString) {
  //     item = items[i];
  //     break;
  //   }
  // }

  // if (item == null)
  //   item = {
  //     id: "0",
  //     des: "광고 란입니다",
  //   };

  return (
    <div>
      <article className="wrapper">
        <div className="top">
          <div className="txt" style={{ fontFamily: ` ${item.fontFamily}` }}>
            <h2>{item.title}</h2>
            <div className="exp">
              <p>제작 {item.writer}</p>
              <p>조회수 {item.click}</p>
              <p>형태 {item.Visual}</p>
              <p>굵기 {item.bold2}</p>
            </div>
          </div>
          <div className="dowmload">
            <a href={item.url} className="noon-yellow-button" target="_blank">
              <span>다운로드 페이지로 이동</span>
            </a>
            <div className="modal">
              <button
                className="btn"
                ref={userMenu}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                {isOpen ? <Modal /> : null}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-current fill-current pointer-events-none"
                  // width="44"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="none"
                  fill="#6b7280"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                </svg>
                즐겨찾기
              </button>
            </div>
          </div>
        </div>
        <div className="bold2">
          <strong>폰트 미리보기</strong>
          <hr />
          <div className="try">
            <input placeholder="예시 문구를 적어보세요" type="text" />
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
          <div className="map">
            {arrWeight.map((_item) => (
              <div className="weight">
                <textarea
                  type="text"
                  style={{
                    fontFamily: `${_item}`,
                  }}
                  placeholder={`${item.des}`}
                />
                <p>{_item}</p>
              </div>
            ))}
          </div>

          {/* <textarea
            type="text"
            style={{
              fontFamily: ` ${item.fontFamily}`,
              fontWeight: `${item.weight2}`,
            }}
            placeholder={`${item.des}`}
          />
          <textarea
            type="text"
            style={{
              fontFamily: ` ${item.fontFamily}`,
              fontWeight: `${item.weight3}`,
            }}
            placeholder={`${item.des}`}
          ></textarea>
          <textarea
            type="text"
            style={{
              fontFamily: ` ${item.fontFamily}`,
              fontWeight: `${item.weight4}`,
            }}
            placeholder={`${item.des}`}
          />
          <textarea
            type="text"
            style={{
              fontFamily: ` ${item.fontFamily}`,
              fontWeight: `${item.weight5}`,
            }}
            placeholder={`${item.des}`}
          /> */}
        </div>
      </article>
    </div>
  );
}
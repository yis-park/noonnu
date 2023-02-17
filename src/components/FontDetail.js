import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import "./fontDetail.scss";
import LicenseDes from "./LicenseDes";
import { BiCopy } from "react-icons/bi";

export function FontDetailPreView({ item, txtValue, txtFontSize }) {
  const userMenu = useRef();
  // console.log(item);
  const [isOpen, setIsOpen] = useState(false);

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
          style={{
            fontFamily: `${item.fontFamily}`,
            fontSize: `${txtFontSize}px`,
          }}
          placeholder={`${item.des}`}
          value={txtValue}
        />

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
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
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

  // 사이드바!!
  const [inputs, setInputs] = useState();
  const onChange2 = (e) => {
    setInputs(e.target.value);
  };

  // 복사기능
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);

      alert("복사 되었습니다");
    } catch (error) {
      alert("복사 실패!");
    }
  };

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
          <div className="prev">
            <div className="str">
              <div className="webfont">
                <strong>폰트 미리보기</strong>
              </div>
              <div className="line"></div>
              <div className="try">
                <input
                  className="detailInput"
                  onChange={onChange}
                  value={text}
                  placeholder="예시 문구를 적어보세요"
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
                <div className="slidecontainer">
                  <input
                    onChange={onChange2}
                    type="range"
                    min="8"
                    max="80"
                    className="slider"
                    name="q"
                  />
                </div>
                <p>{inputs}px</p>
              </div>
            </div>
            <div className="pre">
              <div className="stry">
                <div className="webfont">
                  <strong>웹폰트로 사용</strong>
                  <button
                    onClick={() => handleCopyClipBoard(`${item.pre}`)}
                    className="icon"
                  >
                    <BiCopy />
                  </button>
                </div>

                <div className="line"></div>
                <div className="texta">
                  <textarea name="q" cols="50" rows="10">
                    {item.pre}
                  </textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="map">
            {arrWeight.map((_item) => (
              <div className="weight">
                <input
                  onChange={onChange2}
                  value={text}
                  name="q"
                  placeholder={`${item.des}`}
                  style={{
                    fontFamily: `${item.fontFamily}`,
                    fontWeight: `${_item}`,
                    fontSize: `${inputs}px`,
                  }}
                />
                <p style={{ fontFamily: `${item.fontFamily}` }}>{_item}</p>
              </div>
            ))}

            <div className="license">
              <div className="line"></div>
              <div className="license-p">
                <p>라이선스 본문</p>
              </div>
              <div className="license-border">{item.license}</div>

              <div className="license-p">
                <p>라이선스 요약표</p>
              </div>
              <div className="license-border">
                <LicenseDes key={item.id} item={item} />
              </div>
              <span>
                ※ 위 사용범위는 참고용으로, 정확한 사용범위는 이용 전 폰트
                제작사에 확인바랍니다. <br />
                사용범위는 폰트 제작사의 규정에 따라 달라질 수 있습니다. <br />
                제작사명은 상단 폰트 이름 밑에 있습니다.
              </span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

import { useRef, useState } from "react";
import "./allFont.scss";
import { FontDetailPreView } from "./FontDetail";

function AllFont({ allData }) {
  const [slideBarValue, setSlideBarValue] = useState("30");
  const onSlideBarValueChanged = (e) => {
    setSlideBarValue(e.target.value);
  };

  const [exampleText, setExampleText] = useState("");
  const onExampleTextChanged = (e) => {
    setExampleText(e.target.value);
  };

  const userMenu = useRef();

  const [isShow, setIsShow] = useState(false);
  const onOpen = () => {
    setIsShow(true);
  };
  const onClose = () => {
    setIsShow(false);
  };

  // 검색

  const [query, setQuery] = useState("");
  const [results, setResults] = useState(allData);

  const handleQueryChange = (event) => {
    const searchValue = event.target.value;
    setQuery(searchValue);

    if (searchValue.length > 0) {
      searchFonts(searchValue);
    } else {
      setResults(allData);
    }
  };

  // 검색어와 일치하는 폰트 이름을 찾습니다.
  function searchFonts(query) {
    const myFilter = query.toLowerCase();
    const fontNameMatches = allData.filter((font) =>
      font.title?.toLowerCase().includes(myFilter)
    );
    console.log(fontNameMatches);
    // 검색 결과를 업데이트합니다.
    setResults(fontNameMatches);
  }

  return (
    <article className="wrapper">
      <div className="flex2">
        <div className="txt">
          <h3>모든 폰트</h3>
          <p>상업적으로 사용할 수 있는 모든 폰트들을 만나 보세요</p>
        </div>
      </div>
      <div className="input fixed after">
        <div className="search">
          <input
            type="search"
            placeholder="모든 폰트 내에서 검색"
            name="q"
            onChange={handleQueryChange}
            value={query}
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
            value={exampleText}
            onChange={onExampleTextChanged}
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
        <div className="slidecontainer">
          <input
            onChange={onSlideBarValueChanged}
            style={{ fontSize: `${slideBarValue}px` }}
            type="range"
            min="8"
            max="80"
            value={slideBarValue}
            className="slider"
            name="q"
          />
        </div>
        <p>{slideBarValue}px</p>
      </div>
      <div className="grid">
        {results.map((_item) => (
          <FontDetailPreView
            item={_item}
            txtValue={exampleText}
            txtFontSize={slideBarValue}
          />
        ))}
      </div>
    </article>
  );
}

export default AllFont;

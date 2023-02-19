# noonnu 사이트 만들기

2/8 진행상황:

- 참고 사이트와 비슷한 구현 위해 전반적인 폴더구성 및 레이아웃 완성
- 헤더부분 위치값 조절 확인 필요 (버그수정 건)
- 기본 틀은 map() 이용해 작업. 스타일 값도 map()으로 가능한지 여부 확인
- 다양한 방법은 없는 것 같음

2/9 진행상황:

- 전일 버그수정 일부 작업 후 메인부분 작업
- scss말고 styled-components 시도 (추가/기능개발)
- 기존 페이지는 자바스크립트로 스타일값 하나하나 적용했음 (이 부분 보완해 간단하게 적용할 예정)
- styled-components 시도했으나 당장 해결책이 보이지 않아 일단 scss에 데이터 모두 저장 후 구현
- 참고 사이트 (https://velog.io/@geonoo99/TIL-21-Styled-Components%EB%A5%BC-%EC%A0%81%EC%9A%A9%ED%95%98%EB%A9%B4%EC%84%9C-%EA%B3%B5%EB%B6%80%ED%95%9C-%EA%B2%83)
- textarea font-color, focus-border:none 적용해야함
- footer 작업중

2/10 진행상황:

- footer 작업완료
- app.js에 내용이 많은 것 같아 main 폴더 추가로 만들어 경로 수정 예정
- filter() 적용
- 추천폰트와 모든폰트 중복 식이라 컴포넌트 추가로 생성해 연결하려 했으나 실패 (filter 따로 적용하는 법 모르겠음. + filter undefined 뜸)
- FontDetail 컴포넌트에 useParams() 시도 실패
- 즐겨찾기 버튼 클릭시 모달창으로 로그인 안내하기 완료
- 회원가입 버튼 클릭시 회원가입 컴포넌트로 이동 완료
- 1/13 수업내용 참고해 useParams()해보기
- 문제: 즐겨찾기 버튼 클릭시 모든 모달창이 렌더링됨(map)
- 문제2: 모달창 이외 영역 클릭시 닫히지 않음
- https://wazacs.tistory.com/m/52 텍스트 작성시 폰트내용 검색되게,, 안됨

2/11 진행상황:

- navData map으로 수정
- FontDetail 연결안됨, axis, params 사용했는데,,, 다시 해봐야 할듯

2/12 진행상황:

- 왜 Axios, Fetch, XMLHttpRequest를 이용하지 않나요?
  Axios, Fetch, XMLHttpRequest는 서버로부터 데이터를 받기 위한 함수(라이브러리)입니다. 하지만 우리는 로컬에 있는 JSON 파일을 불러오고 싶은 것이기 때문에 위의 요소들은 요구사항과 맞지않습니다. 로컬이 아닌 서버로부터 JSON 파일을 받기 위해서는 Axios, Fetch, XMLHttpRequest를 이용해야 합니다.

- map() 함수를 이용하는 이유는 무엇인가요?
  map() 함수는 ES6에 등장한 배열 함수입니다. 다른 함수를 이용해도 좋지만 map() 함수가 가장 쉽고 간편하게 사용할 수 있습니다. 다른 배열 함수들도 다른 부분에서 유용하게 사용할 수 있으니 한 번 익혀보는 것도 좋을 것 같습니다.

- 참고 https://velog.io/@cada/React%EC%97%90%EC%84%9C-%EB%A1%9C%EC%BB%AC-JSON-%ED%8C%8C%EC%9D%BC%EC%9D%84-%EB%B6%88%EB%9F%AC%EC%98%A4%EB%8A%94-%EB%B0%A9%EB%B2%95

- json 파일 그냥 옮겨서 해보기,,,, 안됨,,,,
- json 데이터 불러오는걸 못함. 데이터 안불러와짐(app2)

2/13 진행상황:

- app2 만들어 따로 시도중. json파일을 src폴더에 넣어 해보고 있는데 그것도 안됨,, 뭐가 문제일까
- app2 포기. app.js로 계속 진행중.
- index.js 만들어 json 파일 불러올 예정 =>안해봄
- 2.7 수업자료 참고해서 보고있는데 안됨
- \_allData 갑자기 사라지는 현상 찾아보기(모든폰트에서 넘어가는 과정에서 안 보일때 있음. 새로고침 해야 생김)
- 계속 맵 안돌아갔던거 문법 오류임 {} -> ()
<div>
  {allData.map((\_item) => (
  <FontDetailPreView key={_item.id} item={_item} />
  ))}
    </div>

2/14 진행상황:

- 추천폰트도 모든폰트와 동일하게 적용 완료
- 모달창 변경(닫기 버튼으로 대체)
- 세부페이지 작업중
- 디테일 부분에서 즐겨찾기 버튼->회원가입 버튼 늘릭시 넘어가지 않음.
  Link가 아닌 NavLink 이용해 해결
- json 파일 이곳저곳에서 쓰이는 과정에서 불러오는 값이 달라 json 수정시 반영되지 않음.
- 굵기에 따라 적용되는 부분 값이 있는 곳만 뜨게 해야함 해결
- 웹폰트로 받아온 값이 기본값이라 따로 파일을 다운받아야 적용 가능. (2/15 작업 예정)

2/15 진행상황:

- 폰트 파일 다운받아 해보려 했으나 실패
- 라이선스 요약표 부분 table로 작업했는데 오류 발생 => react 에서 table 작업시 thead, tbody 작성 해줘야 함.
- json 파일에서 줄바꿈 하는 법: CSS 상에서 white-space:pre-line 설정
  (pre-wrap: 연속 공백 유지.
  pre-line: 연속 공백을 하나로 합침. 줄바꿈은 개행 문자와
  요소에서 일어나며, 한 줄이 너무 길어서 넘칠 경우 자동으로 줄을 바꿔줌)
- 라이센스 o가 아닌 경우 color:red로 바꾸기 시도해보기
- 다운로드페이지 링크버튼 hover 하면 최상위로 올라와 모달창을 가림. 일단 삭제
- input 입력시 다른곳에 동기화되게 하는 법이 jquery 로 밖에 못하는지,,,? -> 간단한 방법으로 해결 value={text} e.target이용
  but, 메인 화면에서 input에 작성할때 한번에 바뀌는거 다시 시도해보기
- https://www.w3schools.com/howto/howto_js_rangeslider.asp 참고해서 트랙바 구현 js형식을 리액트로 바꾸는거 시도해보기

2/16 진행상황:

- 원하는 문구 입력시 디테일 쪽에서는 적용되나 모든폰트 에서는 적용되지 않음
- 검색 필터 기능도 안됨
- handleChange 참고해 다시 해보기
- 트릭바(사이드바) 대신 input range 태그를 이용해 간단히 해결 완료
  <input
    onChange={onChange2}
    type="range"
    min="8"
    max="80"
    value={inputs}
    className="slider"
                    />
  <!-- 복잡한 태그 -->

const {script} =
let script = document.createElement("script");
script.src = "https://unpkg.com/lodash";
script.async = true;
document.body.appendChild(script);
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
output.innerHTML = this.value;
};

2/17 진행상황:

- 문구 입력하는곳 textarea에서 적으면 반영되는데 input에서 적은 값을 받아오지 못함
- textarea 대신 p 태그로 함수식 써서 시도해보기 해결안됨,,,,,,
- useContext로 활용해보기 실패,, (전역함수는 되도록 지양하는게 좋음)
- 참고 사이트 https://velog.io/@velopert/react-context-tutorial
- 폰트사이즈변경, 예시문구 렌더링 성공 => 함수값 아닌 value값을 넣었어야 했음,,,!
  <textarea
  style={{ fontFamily: ` ${item.fontFamily}`, fontSize: "30px" }}
  placeholder={`${item.des}`}
  onChange={onChange} >
  {text}
  </textarea>
  위에거 아니고 아래거
  <textarea
  style={{
             fontFamily: `${item.fontFamily}`,
             fontSize: `${txtFontSize}px`,
           }}
  placeholder={`${item.des}`}
  value={txtValue}
  />
  - 검색 기능 handleQueryChange 함수 이용해 구현 (nav에 있는 검색 기능은 다시 시도 해봐야 함)

2/18 진행상황:

- NotFoundPage 꾸미기
- 제작일지 작성

### 해야할 것

- 폰트 제목 클릭 시 해당 컴포넌트로 이동시키기 (0)
- FontDetail 컴포넌트에 useParams() 시도 (x) useRef로 대체
- 이벤트클릭 된 아이들 영역 밖 클릭시 닫히도록(e.target 사용해야 하는 것 같음,,,!! useRef나) (x) 닫기 버튼 추가로 대체
- input에 검색시 해당 내용의 폰트 검색되게 (o)
- 폰트사이즈 변경되는것 (o)
- https://www.w3schools.com/howto/howto_js_rangeslider.asp 참고해서 트랙바 구현 (o) input으로 사이드바 만들기 해결
- 디스커버리 시도해보기
- 셀렉트 기능 시도해보기

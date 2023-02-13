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
- FontDetail 연결안됨, axis, params 사용했느데,,, 다시 해봐야 할듯

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
  - \_allData 갑자기 사라지는 현상 찾아보기(새로고침 해야 생김)
  - 계속 맵 안돌아갔던거 문법 오류임 {} -> ()<div>
    {allData.map((\_item) => (
    <FontDetailPreView key={_item.id} item={_item} />
    ))}
      </div>

### 해야할 것

- 폰트 제목 클릭 시 해당 컴포넌트로 이동시키기
- FontDetail 컴포넌트에 useParams() 시도
- input에 검색시 해당 내용의 폰트 검색되게
- 폰트사이즈 변경되는것
- 디스커버리 시도해보기
- 이벤트클릭 된 아이들 영역 밖 클릭시 닫히도록(e.target 사용해야 하는 것 같음,,,!! useRef나)

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
- 회원가입 버튼 클릭시 회원가입컴포넌트로 이동 완료

###해야할 것

- 폰트 제목 클릭 시 해당 컴포넌트로 이동시키기
- FontDetail 컴포넌트에 useParams() 시도
- input에 검색시 해당 내용의 폰트 검색되게
- 폰트사이즈 변경되는것
- 디스커버리 시도해보기
- 이벤트클릭 된 아이들 영역 밖 클릭시 닫히도록(e.target 사용해야 하는 것 같음,,,!! useRef나)

import { Link } from "react-router-dom";
import styled from "styled-components";
import logImg from "../assets/images/login.png";

function NotFoundPage(props) {
  const NotFound = styled.div`
    height: 80vh;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const Img = styled.img`
    width: 200px;
    height: 200px;
    margin: 25px 0;
  `;
  const Span = styled.span`
    background-color: #ffd951;
    padding: 5px;
  `;
  return (
    <NotFound>
      페이지를 찾을 수 없습니다.
      <Img className="logImg" src={logImg} />
      <Link to="/allFont">
        <Span> 모든 폰트</Span>를 검색해 보세요
      </Link>
    </NotFound>
  );
}

export default NotFoundPage;

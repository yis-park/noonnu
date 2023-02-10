import { Link } from "react-router-dom";
import styled from "styled-components";

function Modal(props) {
  const Container = styled.div`
    border: 1px solid #6b7280;
    position: fixed;
    top: 56px;
    right: 100px;
  `;

  return (
    <Container className="madal">
      <p>로그인이 필요한 페이지입니다.</p>
      <p>회원가입 먼저 진행해주세요.</p>
      <Link to="/join"> 회원가입 하러가기</Link>
    </Container>
  );
}

export default Modal;

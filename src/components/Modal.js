import { Link } from "react-router-dom";
import styled from "styled-components";
// import logImg from "../assets/images/longin.png";

function Modal() {
  const Container = styled.div`
    border: 1px solid #6b7280;
    border-radius: 20px;
    padding: 10px;
    position: fixed;
    top: 56px;
    right: 100px;
    font-weight: 300;
  `;
  // const Img = styled.div`
  //   width: 22px;
  //   height: 22px;
  //   vertical-align: bottom;
  //   margin-left: 16px;
  // `;

  return (
    <Container>
      {/* <img className="logImg" src={logImg} /> */}
      <p>즐겨찾기 기능은 로그인이 필요해요.</p>
      <p>회원가입 먼저 진행해주세요.</p>
      <Link to="/join"> 회원가입 하러가기</Link>
    </Container>
  );
}

export default Modal;

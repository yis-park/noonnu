import { Link } from "react-router-dom";
import styled from "styled-components";
// import logImg from "../assets/images/longin.png";

function Modal(props) {
  const Container = styled.div`
    border: 1px solid #6b7280;
    position: fixed;
    top: 56px;
    right: 100px;
  `;
  // const Img = styled.div`
  //   width: 22px;
  //   height: 22px;
  //   vertical-align: bottom;
  //   margin-left: 16px;
  // `;

  return (
    <Container className="madal">
      {/* <img className="logImg" src={logImg} /> */}
      <p>즐겨찾기 기능은 로그인이 필요해요.</p>
      <p>회원가입 먼저 진행해주세요.</p>
      <Link to="/join"> 회원가입 하러가기</Link>
    </Container>
  );
}

export default Modal;

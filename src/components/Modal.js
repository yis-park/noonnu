import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logImg from "../assets/images/login.png";

function Modal({ onClose }) {
  const Container = styled.div`
    z-index: 9999px;
    border: 1px solid #6b7280;
    border-radius: 10px;
    background-color: #fff;
    padding: 10px 20px;
    position: fixed;
    width: 350px;
    top: 56px;
    right: 100px;
    display: flex;
    flex-direction: column;
    text-align: left;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.7;
    color: #0d1117;
  `;
  const Button = styled.div`
    text-align: right;
    height: 26px;
    font-weight: bold;
  `;
  const Img = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 5px;
    margin-bottom: 5px;
  `;
  const NavLink = styled.a`
    font-weight: bold;
  `;

  return (
    <Container>
      <p>
        <Img className="logImg" src={logImg} />
        즐겨찾기 기능은 로그인이 필요해요.
      </p>
      <p>회원가입 먼저 진행해주세요.</p>
      <NavLink to="/join"> →회원가입 바로가기</NavLink>

      <Button onClick={onClose}>닫기</Button>
    </Container>
  );
}

export default Modal;

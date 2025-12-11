import styled from "styled-components";
import BackgroundImg from "./images/bg-intro-desktop.png";
import MobileBgImg from "./images/bg-intro-mobile.png";

const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${BackgroundImg});
  background-color: #eba3a3;
  flex-direction: column;
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    background: url(${MobileBgImg});
    background-color: #eba3a3;
    padding: 50px 0;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    padding: 50px 0;
  }
`;

const Header = styled.div`
  height: 90%;
  width: 40%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 25px;
  justify-content: center;
  gap: 0;
  text-align: left;
  @media (max-width: 767px) {
    width: 100%;
    padding-top: 35px;
  }
`;

const LeftText = styled.div`
  width: 80%;
  font-weight: 500;
  span {
    font-size: 57px;
    font-weight: 700;
    line-height: 60px;
  }
  p {
    font-size: 17px;
  }
  @media (max-width: 767px) {
    width: 100%;
    text-align: center;
    padding-bottom: 50px;
    span {
      font-size: 30px;
      line-height: 3px;
    }
  }
`;

const MainContent = styled.div`
  height: 90%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 767px) {
    width: 90%;
    height: 30%;
    gap: 20px;
  }
`;
const PromoBanner = styled.div`
  background-color: hsl(248, 32%, 49%);
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  color: white;
  box-shadow: 0px 5px 0px #6058585f;
  @media (max-width: 767px) {
    text-align: center;
    font-size: 17px;
    padding: 15px 50px;
  }
`;

const FormContainer = styled.form`
  background-color: white;
  height: 490px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 40px;
  justify-content: space-between;
  box-shadow: 0px 5px 0px #6058585f;
  font-size: 12px;
  color: gray;
  span {
    text-align: center;
    b {
      color: #eba3a3;
    }
  }
  @media (max-width: 767px) {
    span {
      font-size: 10px;
    }
  }
`;

const TextInput = styled.input`
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #4b4646;
  font-size: 17px;
`;

const SubmitBtn = styled.button`
  background-color: #2ba671;
  color: white;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #2ba671;
  cursor: pointer;
`;

const Attribution = styled.div`
  font-size: 15px;
  text-align: center;
  padding-top: 20px;
  a {
    color: #3e52a3;
  }
  @media (max-width: 767px) {
    font-size: 12px;
    padding: 7px 10px;
  }
`;

export const AppStyled = {
  Background,
  Container,
  Header,
  MainContent,
  PromoBanner,
  FormContainer,
  TextInput,
  SubmitBtn,
  LeftText,
  Attribution,
};

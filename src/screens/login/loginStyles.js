import styled from "styled-components";
import examsImage from "../../assets/images/exams.png";
import { device } from "./../../utils/helpers";

export const Wrapper = styled.div`
  width: 100%;
  background-image: linear-gradient(
    to right top,
    #fab823,
    #f9a315,
    #f68d0c,
    #f3770d,
    #ee5f13
  );
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height + "px"};
`;

export const ContentWrap1 = styled.div`
  display: flex;
  height: 80%;
  width: 90%;
  background-color: white;
  box-shadow: 0px 0px 15px 5px grey;
`;
export const ContentWrap2 = styled.div`
  display: flex;
  background-color: white;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  box-shadow: 0px 0px 15px 5px grey;
  border-radius: 5px;
  height: 70%;
  width: 70%;
  flex-direction: column;
  padding-left: 5%;
  padding-right: 5%;
  h1 {
    padding-top: 1%;
    margin-bottom: -4%;
    @media ${device.mobileS} {
      font-size: 22px;
    }
    @media ${device.tablet} {
      font-size: 28px;
    }
    @media ${device.desktop} {
      font-size: 30px;
    }
  }

  img {
    width: 30%;
    height: 10%;
    padding-right: 5%;
    margin-bottom: -7%;
  }
  @media ${device.mobileS} {
    height: 100%;
    width: 100%;
    box-shadow: 0px 0px 0px 0px;
  }
  @media ${device.tablet} {
    height: 70%;
    width: 70%;
    box-shadow: 0px 0px 15px 5px grey;
  }
  @media ${device.desktop} {
    height: 70%;
    width: 70%;
    box-shadow: 0px 0px 15px 5px grey;
  }

  h4 {
    color: grey;
    font-weight: 400;
    margin-bottom: 1%;
  }
`;

export const RowWrap1 = styled.div`
  display: flex;
  flex: 0.4;
  background-color: #fafafa;
  align-items: center;
  justify-content: center;
  @media ${device.mobileS} {
    flex: 1;
    height: 100%;
    align-self: center;
    width: 100%;
  }
  @media ${device.tablet} {
    flex: 0.5;
  }
  @media ${device.desktop} {
    flex: 0.4;
  }
`;
export const RowWrap2 = styled.div`
  display: flex;
  flex: 0.6;
  background-color: #fafafa;
  align-items: center;
  justify-content: center;
  @media ${device.mobileS} {
    display: none;
    visibility: hidden;
  }
  @media ${device.tablet} {
    display: flex;
    visibility: visible;
    flex: 0.5;
  }
  @media ${device.desktop} {
    display: flex;
    visibility: visible;
    flex: 0.6;
  }
`;

export const Image = styled.img.attrs({
  src: examsImage,
})`
  height: 90%;
  width: 90%;
  resize: true;
  @media ${device.mobileS} {
    display: none;
    visibility: hidden;
  }
  @media ${device.tablet} {
    display: flex;
    visibility: visible;
    height: 55%;
    width: 100%;
  }
  @media ${device.desktop} {
    display: flex;
    visibility: visible;
    height: 65%;
    width: 90%;
  }
`;

export const ButtonWrap = styled.div`
  /* height: 100%; */
  padding-bottom: ${(props) => props.paddingBottom};
  padding-top: ${(props) => props.paddingTop};
  /* flex: 0.05; */
  display: flex;
  align-items: center;
  justify-content: center;

  /* align-self: center; */
`;

export const InstructionsWrap = styled.div`
  display: flex;
  flex: 0.9;
  overflow-y: scroll;

  flex-direction: column;
`;

export const Instructions = styled.div`
  display: flex;
  flex: 0.9;
  overflow-y: scroll;
  margin-top: 5%;
  margin-bottom: 5%;
  background-color: #dadada;
  padding: 2%;
  border-radius: 5px;
  /* flex-direction: column; */
`;

export const CheckboxWrap = styled.div`
  display: flex;
  flex: 0.1;
  /* overflow-y: scroll; */
  /* flex-direction: column; */
`;

export const LoginLink = styled.div`
  color: blueviolet;
  font-size: 16;
  font-weight: bold;
  align-self: center;
  padding-top: 2%;
  cursor: pointer;

  /* overflow-y: scroll; */
  /* flex-direction: column; */
`;

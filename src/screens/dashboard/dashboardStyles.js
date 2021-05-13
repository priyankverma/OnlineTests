import styled from "styled-components";
import { device } from "./../../utils/helpers";
import { Carousel } from "antd";
export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: white;
  overflow-y: hidden;
  height: ${(props) => props.height + "px"};
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  /* overflow-x: hidden; */
`;

export const ContentWrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  height: ${(props) => props.height + "px"};
`;

export const RowWrap = styled.div`
  display: flex;
  flex: ${(props) => props.flex};
  background-color: ${(props) => props.backgroundColor};
  height: 100%;
  flex-direction: column;
  /* overflow-x: hidden; */
  @media ${device.mobileS} {
    flex: 1;
  }
  @media ${device.tablet} {
    flex: ${(props) => props.flex};
  }
  @media ${device.desktop} {
    flex: ${(props) => props.flex};
  }
`;

export const RowWrapQuestions = styled.div`
  display: flex;
  flex: ${(props) => props.flex};
  background-color: ${(props) => props.backgroundColor};
  height: 100%;
  flex-direction: column;
  overflow-y: scroll;
  /* justify-content: space-evenly; */
  border-right: 2px solid #dadada;
  box-shadow: 0px 0px 15px 5px grey;
  border-radius: 5px;
  width: 100%;
  padding: 1%;

  @media ${device.mobileS} {
    display: none;
    visibility: hidden;
  }
  @media ${device.tablet} {
    display: flex;
    visibility: visible;
    flex: ${(props) => props.flex};
  }
  @media ${device.desktop} {
    display: flex;
    visibility: visible;
    flex: ${(props) => props.flex};
  }
`;

export const QuestionWrap = styled.div`
  display: flex;
  /* flex: 1; */
  height: 5%;
  margin-top: 3%;
  overflow-x: hidden;
  text-align: left;
  background-image: ${(props) =>
    props.answered
      ? "linear-gradient(to right, #3ca55c, #b5ac49)"
      : "linear-gradient(to right, lightgrey, lightgrey)"};
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 5px;
  padding: 2%;
  border: ${(props) =>
    props.leftQuestionSelected ? "3px solid #3a3985" : "1px solid #3a3985"};
  cursor: pointer;
  color: ${(props) => (props.answered ? "white" : "black")};
`;

export const QuestionsDiv = styled.div`
  margin-top: 2%;
  margin-bottom: 2%;
  background-color: lightgrey;
  padding: 10px;
  margin-left: 4%;
  margin-right: 4%;
  border-radius: 5px;
  align-items: flex-start;
  text-align: left;
  border: 1px solid #3a3985;
`;

export const AnswersDiv = styled.div`
  margin-top: 2%;
  margin-bottom: 2%;
  overflow-x: hidden;
  background-image: ${(props) =>
    props.selected
      ? "linear-gradient( to right top, #fab823, #f9a315, #f68d0c, #f3770d,#ee5f13)"
      : "linear-gradient( to right top, lightgrey, lightgrey)"};
  padding: 10px;
  margin-left: 7%;
  border-radius: 5px;
  text-align: left;
  margin-right: 4%;
  color: ${(props) => (props.selected ? "white" : "black")};
  cursor: pointer;
  /* height: 5%; */
`;
export const Box1 = styled.div`
  display: flex;
  flex: 0.3;
  box-shadow: 0px 0px 5px 2px grey;
  border-radius: 5px;
  background-color: white;
  margin: 4px;
  justify-content: space-around;
  overflow-x: hidden;
  @media ${device.mobileS} {
    flex: 0.3;
  }
  @media ${device.tablet} {
    flex: 0.4;
  }
  @media ${device.desktop} {
    flex: 0.4;
  }
`;
export const Box2 = styled.div`
  display: flex;
  flex: 0.7;
  /* height: 100%; */
  flex-direction: column;
  box-shadow: 0px 0px 5px 2px grey;
  border-radius: 5px;
  background-color: white;
  margin: 1%;
  overflow-x: hidden;
  /* position: absolute; */

  flex-direction: column;
  b {
    color: whitesmoke;
  }
  @media ${device.mobileS} {
    flex: 0.7;
  }
  @media ${device.tablet} {
    flex: 0.6;
  }
  @media ${device.desktop} {
    flex: 0.6;
  }
`;

export const NextButton = styled.button`
  /* flex: 0.1; */
  opacity: ${(props) => (props.enabled ? 1 : 0.6)};
  display: flex;
  background-image: ${(props) =>
    props.scheme === "orange"
      ? "linear-gradient( to right top, #fab823, #f9a315, #f68d0c, #f3770d,#ee5f13)"
      : "linear-gradient(to right top, #3499ff, #3a3985)"};
  height: ${(props) => (props.height ? props.height + "px" : "30%")};
  width: 8%;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: ${(props) => (props.paddingRight ? props.paddingRight : 0)};
  /* padding: 3px 10px 3px 10px; */

  @media ${device.mobileS} {
    width: 24%;
    height: 50%;
  }
  @media ${device.tablet} {
    height: ${(props) => (props.height ? props.height + "px" : "50%")};
    width: 16%;
  }
  @media ${device.desktop} {
    height: ${(props) => (props.height ? props.height + "px" : "70%")};
    width: 15%;
  }
`;

export const StyledCarousal = styled(Carousel)`
  display: flex;
  flex: 0.5;
  background-color: white;
  border-radius: 5px;
  height: ${(props) => props.height + "px"};
  width: ${(props) => props.width + "px"};
  overflow-y: hidden;
  @media ${device.mobileS} {
    width: ${(props) => props.width + "px"};
    height: ${(props) => props.height + "px"};
  }
  @media ${device.tablet} {
    width: ${(props) => props.width * 0.75 + "px"};
  }
  @media ${device.desktop} {
    width: ${(props) => props.width * 0.75 + "px"};
  }
`;

export const TopButtonDiv = styled.div`
  display: flex;
  flex: 0.5;
  align-items: center;
  justify-content: center;
  background-color: white;
  @media ${device.mobileS} {
    margin-top: 5%;
  }
  @media ${device.tablet} {
    margin-top: 0%;
  }
  @media ${device.desktop} {
    margin-top: 0%;
  }
`;
export const BottomButtonView = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: center;
  background-color: white;
`;

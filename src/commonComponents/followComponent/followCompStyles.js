import styled from "styled-components";
import { device } from "./../../utils/helpers";

export const Wrapper = styled.div`
  padding-top: 5%;
`;
export const ContentWrapper = styled.b`
  font-size: 14px;
  background: -webkit-linear-gradient(
    #fab823,
    #f9a315,
    #f68d0c,
    #f3770d,
    #ee5f13
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  flex-direction: row;
  background-clip: text;
  b {
    @media ${device.mobileS} {
      font-size: 9px;
      margin-top: 2px;
    }
    @media ${device.tablet} {
      font-size: 9px;
      margin-top: 1px;
    }
    @media ${device.desktop} {
      font-size: 12px;
      margin-top: 0px;
    }
  }
  hr {
    color: orange;
    background-color: orange;
    height: 2px;
    width: 25%;
    border: 0px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 5%;
  height: 10%;
`;

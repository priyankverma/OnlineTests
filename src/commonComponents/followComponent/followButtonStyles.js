import styled from "styled-components";
import { device } from "./../../utils/helpers";

export const Wrapper = styled.div`
  display: flex;
  height: 30px;
  width: 40%;
  border-radius: 5px;
  border: 2px solid orange;
  align-items: center;
  padding: 2%;
  @media ${device.mobileS} {
    height: 30px;
    width: 40%;
  }
  @media ${device.tablet} {
    width: 45%;
    height: 35px;
  }
  @media ${device.desktop} {
    width: 45%;
    height: 35px;
  }
`;
export const TextContent = styled.b`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  color: ${(props) => props.textColor};
  img {
    width: 22%;
    height: 50%;
    padding-bottom: 5%;
    @media ${device.mobileS} {
      width: 25%;
      height: 50%;
    }
    @media ${device.tablet} {
      width: 25%;
      height: 50%;
    }
    @media ${device.desktop} {
      width: 22%;
      height: 50%;
    }
  }
`;

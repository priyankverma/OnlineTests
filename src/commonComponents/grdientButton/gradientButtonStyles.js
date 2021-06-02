import styled from "styled-components";
import { device } from "./../../utils/helpers";

export const Wrapper = styled.div`
  opacity: ${(props) => props.opacity};
  display: flex;
  border-radius: 10px;
  height: ${(props) => props.height};
  /* width: ${(props) => props.width}; */
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-image: linear-gradient(
    to right top,
    #fab823,
    #f9a315,
    #f68d0c,
    #f3770d,
    #ee5f13
  );
  margin-top: 3%;
  align-self: center;
  padding: 5%;
  b {
    color: #fff;

    @media ${device.mobileS} {
      font-size: 14px;
    }
    @media ${device.tablet} {
      font-size: 16px;
    }
    @media ${device.desktop} {
      font-size: 18px;
    }
  }

  @media ${device.tablet} {
    height: 20px;
  }
  @media ${device.desktop} {
    height: 5px;
  }
`;

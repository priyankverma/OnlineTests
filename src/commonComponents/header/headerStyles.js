import styled from "styled-components";
import { device } from "../../utils/helpers";
export const Wrapper = styled.div`
  display: flex;
  /* flex: 1; */
  align-items: center;
  justify-content: space-evenly;
  background-image: linear-gradient(to right top, #3499ff, #3a3985);
  height: 40px;
`;

export const RowDiv = styled.div`
  display: flex;
  flex: ${(props) => props.flex};
  align-items: center;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  padding-right: ${(props) =>
    props.justifyContent ? props.paddingRight : "10px"};
  img {
    width: 100px;
  }
  b {
    color: white;
  }

  @media ${device.mobileS} {
    flex: ${(props) => props.flex};

    display: ${(props) => (props.canbeHidden ? "none" : "flex")};
    visibility: ${(props) => (props.canbeHidden ? "hidden" : "visible")};
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

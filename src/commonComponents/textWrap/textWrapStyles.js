import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    color: black;
    font-weight: 800;
    margin-bottom: 2%;
    opacity: 0.7;
  }
`;

export const TextWrap = styled.input`
  background-color: white;
  border: ${(props) => props.borderColor};
  height: ${(props) => props.height};
  width: 95%;
  border-radius: 5px;
  border-color: orange;
  margin-bottom: ${(props) => props.marginBottom};
  padding-left: 10px;
`;

export const styles = {
  fontSize: 13,
  fontWeight: 500,
};

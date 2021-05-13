import styled from "styled-components";

export const Wrapper = styled.div`
  /* width: 100%; */
  display: flex;
  flex: 1;
  flex-direction: column;
  background-image: linear-gradient(
    to right top,
    #fab823,
    #f9a315,
    #f68d0c,
    #f3770d,
    #ee5f13
  );

  height: ${(props) => props.height + "px"};
`;

export const TopModalWrapper = styled.div`
  /* width: 100%; */
  display: flex;
  flex: 0.2;
`;

export const BottomWrapper = styled.div`
  /* width: 100%; */
  overflow-x: scroll;
  display: flex;
  flex: 0.8;
  background-color: white;
`;

export const TopModal = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  background-color: white;
  margin: 2%;
  border-radius: 5px;
  box-shadow: 0px 0px 15px 5px grey;
`;

export const Row1 = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
  text-align: left;
  padding: 2%;
  b {
    font-size: 16px;
  }
`;

export const BottomList = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: left;
  margin-bottom: 4%;
  padding: 2%;
  b {
    font-size: 16px;
  }
`;

export const QuestionsDiv = styled.div`
  display: flex;
  background-color: lightgrey;
  padding: 10px;
  align-items: flex-start;
  text-align: left;
  flex-direction: column;
  flex: 0.8;
  border-radius: 5px;
  border-right: 1px solid #3a3985;
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  border: 1px solid #3a3985;
  border-radius: 5px;
  margin-left: 4%;
  margin-right: 4%;
  margin-top: 0%;
  margin-bottom: 1%;
  box-shadow: 0px 5px 5px 1px grey;
`;

export const StatusBox = styled.div`
  display: flex;
  flex: 0.2;
  background-image: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "lightgrey"};
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: white;
  margin-left: 0.1%;
  border-left: 1px solid #3a3985;
  padding-left: 2%;
  padding-right: 2%;
`;

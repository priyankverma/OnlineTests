import React, { useState } from "react";
import {
  Wrapper,
  TopModalWrapper,
  BottomWrapper,
  TopModal,
  Row1,
  BottomList,
  QuestionsDiv,
  QuestionWrapper,
  StatusBox,
} from "./summaryStyles";
import useWindowDimensions from "./../../commonComponents/customhooks/useWindowDimensions";
import { withRouter } from "react-router-dom";
window.history.forward(true);

const Summary = (props) => {
  const { height } = useWindowDimensions();
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  let data =
    props.location && props.location.state && props.location.state.userData;
  let questionSet =
    props.location && props.location.state && props.location.state.questionSet;
  let tempCount = 0;
  let correctMultiAnswers = [];

  return (
    <Wrapper height={height}>
      <TopModalWrapper>
        <TopModal>
          <Row1>
            <b>Name: {data && data.username}</b>

            <b>Correct Answers: {correctAnswerCount}</b>
          </Row1>
          <Row1>
            <b>
              Questions Attempted: {questionSet && questionSet.attemptedCount}/
              {questionSet && questionSet.length}
            </b>
            <b>Score: {correctAnswerCount * 2}</b>
          </Row1>
        </TopModal>
      </TopModalWrapper>
      <BottomWrapper>
        <BottomList>
          {questionSet &&
            questionSet.map((questions, questionIndex) => {
              let answerStatus;
              return (
                <QuestionWrapper key={questionIndex + new Date()}>
                  <QuestionsDiv>
                    Q{questionIndex + 1}. {questions.que}
                    {questions.answersArr.map((answers, answersIndex) => {
                      let a =
                        answers.correctAnswer && questions.type === "multiple"
                          ? correctMultiAnswers.push(answers.option)
                          : null; // pushes the correct answers of the question in an array if it is a MCQ

                      if (
                        questions.type === "multiple" &&
                        answersIndex === questions.answersArr.length - 1
                      ) {
                        let conCatAnswers = questions.multipleSelected.join(
                          ", "
                        ); // Concatenaton of the answers submitted by the user
                        let conCatCorrectAnswers = correctMultiAnswers.join(
                          ", "
                        ); // Concatenaton of the correct answers of the question

                        answerStatus =
                          questions.multipleSelected &&
                          JSON.stringify(questions.multipleSelected.sort()) ===
                            JSON.stringify(correctMultiAnswers.sort()); // checks whether the answers submitted by the user for a MCQ are correct or not

                        if (
                          questions.multipleSelected &&
                          questions.multipleSelected.length !== 0 &&
                          answerStatus &&
                          !questions.counted
                        ) {
                          tempCount = tempCount + 1;
                          questions.counted = true;
                          setCorrectAnswerCount(tempCount); // increases the correct answer count if it is correct and a MCQ
                        }

                        return (
                          <div key={answersIndex + new Date()}>
                            <div>Ans. {conCatCorrectAnswers}</div>
                            <div>
                              User Response:{" "}
                              {questions.multipleSelected &&
                              questions.multipleSelected.length !== 0
                                ? conCatAnswers
                                : "Not Attempted"}
                            </div>
                          </div>
                        );
                      } else if (
                        questions.type === "single" &&
                        answers.correctAnswer
                      ) {
                        if (
                          questions.userResponse &&
                          questions.userResponse.validAnswer &&
                          !questions.counted
                        ) {
                          tempCount = tempCount + 1;
                          questions.counted = true;
                          setCorrectAnswerCount(tempCount); //increases the correct answers count on the basis of answers submitted by the user for a single choice question
                        }

                        return (
                          <div key={answersIndex + new Date()}>
                            <div>Ans. {answers.option}</div>
                            <div>
                              User Response:{" "}
                              {questions.userResponse
                                ? questions.userResponse.answerSubmitted.option
                                : "Not Attempted"}
                            </div>
                          </div>
                        );
                      }
                    })}
                  </QuestionsDiv>
                  {questions.type === "single" ? (
                    <StatusBox
                      backgroundColor={
                        questions.userResponse
                          ? questions.userResponse.validAnswer
                            ? "linear-gradient(to right, #52c234, #061700);"
                            : "linear-gradient(to right, #ed213a, #93291e);"
                          : "linear-gradient(to right, lightgrey, lightgrey);"
                      }
                    >
                      <b>
                        {questions.userResponse
                          ? questions.userResponse.validAnswer
                            ? "Correct"
                            : "Wrong"
                          : "N.A."}
                      </b>
                    </StatusBox>
                  ) : (
                    <StatusBox
                      backgroundColor={
                        questions.multipleSelected &&
                        questions.multipleSelected.length !== 0
                          ? answerStatus
                            ? "linear-gradient(to right, #52c234, #061700);"
                            : "linear-gradient(to right, #ed213a, #93291e);"
                          : "linear-gradient(to right, lightgrey, lightgrey);"
                      }
                    >
                      <b>
                        {questions.multipleSelected &&
                        questions.multipleSelected.length !== 0
                          ? answerStatus
                            ? "Correct"
                            : "Wrong"
                          : "N.A."}
                      </b>
                    </StatusBox>
                  )}
                </QuestionWrapper>
              );
            })}
        </BottomList>
      </BottomWrapper>
    </Wrapper>
  );
};

export default withRouter(Summary);

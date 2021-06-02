/**
 * The dashboard component, containing the questions and the answer as option,
 * user can simply selected the options depending on the type of the question ('Single', 'Multiple'),
 * a summary of the total number of questions attempted, the time left and the history of what option is selected for which question.
 *
 * The input to this component is the questionSet, coming from the reducers, and the userInformation,
 * populating from the reducers.
 *
 * User navigates to this page after loggin in, agrreing to the terms and conditions, reading the instructions and
 * selecting the level of questions.
 *
 * After the completion of the timer or on submission by the user, the nesxt screen is Summary page.
 */

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  Wrapper,
  ContentWrap,
  RowWrap,
  RowWrapQuestions,
  QuestionWrap,
  QuestionsDiv,
  AnswersDiv,
  Box1,
  Box2,
  NextButton,
  StyledCarousal,
  TopButtonDiv,
  BottomButtonView,
} from "./dashboardStyles";
import Header from "../../commonComponents/header/header";
import { Popconfirm } from "antd";
import useWindowDimensions from "./../../commonComponents/customhooks/useWindowDimensions";
import usePersistedState from "./../../commonComponents/customhooks/usePersistedState";

import CircularBar from "../../commonComponents/progressBar/progressBar";
import "./dashboard.css";
import { useHistory, withRouter } from "react-router-dom";
import { registerAction } from "../../redux/actions/signupAction";
window.history.forward(true);
let executeOnce = true;
export const Dashboard = (props) => {
  const slider = useRef();
  const history = useHistory();
  const dispatch = useDispatch();
  const reducerData = useSelector((state) => state);

  const { signupReducer } = reducerData;
  const { data, questionSet } = signupReducer;
  const userData = data;
  const [questionsState, setQuestionsState] = usePersistedState(
    "questionSet",
    questionSet
  );
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [questionSelected, setQuestionSelected] = useState(0);
  const { height, width } = useWindowDimensions();
  const [attemptedCount, setAttemptedCount] = usePersistedState(
    "attemptedcount",
    0
  );
  const [executeNow, setExecuteNow] = useState(true);
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [saveTimerVal, setSaveTimerVal] = useState(120);
  let stickyValue = window.localStorage.getItem("TimerValue");
  useEffect(() => {
    let userData = localStorage.getItem("userData");
    let stringifiedUserData = userData !== null ? JSON.parse(userData) : null;
    console.log("stringifiedUserData", stringifiedUserData);
    stringifiedUserData &&
      dispatch(
        registerAction({
          username: stringifiedUserData.username,
          password: stringifiedUserData.password,
          complexityLevel: stringifiedUserData.complexityLevel,
        })
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /**
   * controls the visiblity of the pop up, visible after user taps submit
   */
  const showPopconfirm = () => {
    setVisible(true);
  };
  /**
   * processes the count, makes a navigation action to submit page after user confirms submitting and deactivates the countdown
   */
  const handleOk = () => {
    setConfirmLoading(true);
    questionsState.attemptedCount = attemptedCount;

    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);

      handleSaveToPC(questionsState);
      history.replace({
        pathname: "/summary",
        state: { questionSet: questionsState, userData },
      });
    }, 2000);
  };
  /**
   * A function that exports the question set along with the option, answers data and user Response after the submission of test by the user
   * @param {object} jsonData - the data that needs to be exported as the json file after user reaches the summary page
   */
  const handleSaveToPC = (jsonData) => {
    const fileData = JSON.stringify(jsonData);
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = data.username + "_Report.json";
    link.href = url;
    link.click();
  };

  /**
   * controls the visiblity of the pop up, visible after user taps submit
   */
  const handleCancel = () => {
    setVisible(false);
  };

  /**
   * A function, executed when user selects the answers from the different options available for a question,
   * handles different cases on the basis of type['Multiple', 'Single']
   * @param {object} questions - current mapped question object from the questionsArray
   * @param {number} questionIndex  - index of the mapped question
   * @param {object} answers - current mapped answers from the current question array
   * @param {number} answersIndex - selected answer index
   */
  const answerClicked = (questions, questionIndex, answers, answersIndex) => {
    if (
      questions.userResponse ||
      (questions.multipleSelected && questions.multipleSelected.length !== 0)
    ) {
      // console.log.bind(console) does nothing if the user has already attempted any question
    } else {
      setAttemptedCount(attemptedCount + 1); // increases the attempted count by 1
    }
    if (questions.type === "multiple") {
      let array = questions.multipleSelected;
      let tempIndex = array.indexOf(answers.option);

      if (tempIndex !== -1 && array.length > 1) {
        // unselecs the option if tapped again in multiple choice question
        array.splice(tempIndex, 1);
      } else {
        questions.multipleSelected = [
          answers.option,
          ...questions.multipleSelected,
        ]; // pushes the index of the answers selected
      }
    } else {
      if (questionsState) {
        questionsState[questionIndex].userResponse = {
          answerSubmitted: answers,
          validAnswer: answers.correctAnswer,
        }; // records the user response in the main question file with the answer selected by user and the status to it, whether correct or not
      }
    }

    setSelectedAnswer(answersIndex);
  };

  return (
    <Container height={height}>
      <Header
        testid="headerComponent"
        userInfo={userData ? userData.username : null}
      />
      <Wrapper>
        <ContentWrap>
          <RowWrapQuestions flex={0.2}>
            {questionsState &&
              questionsState.map((questions, questionIndex) => {
                return (
                  <QuestionWrap
                    key={questionIndex + new Date()}
                    answered={
                      questions.userResponse ||
                      (questions.multipleSelected &&
                        questions.multipleSelected.length !== 0)
                    }
                    leftQuestionSelected={questionSelected === questionIndex}
                    onClick={() => {
                      /**
                       * controls the index jumping from the left component visible only on desktop and tablets
                       */
                      setExecuteNow(false);
                      setSelectedAnswer(null);
                      setTimeout(() => {
                        setQuestionSelected(questionIndex);
                      }, 100);

                      slider.current.goTo(questionIndex, true);
                    }}
                  >
                    Q{questionIndex + 1}. {questions.que}
                  </QuestionWrap>
                );
              })}
          </RowWrapQuestions>
          <RowWrap flex={0.8} backgroundColor={"pink"}>
            <Box1>
              {questionsState && (
                <CircularBar
                  title="Questions Attempted"
                  progressPercent={attemptedCount * 10}
                  bottomText={attemptedCount + "/" + questionsState.length}
                  width={height * 0.15}
                  percent={attemptedCount * 10}
                />
              )}

              <CircularBar
                title="Time Left"
                countDownTimeInSeconds={
                  stickyValue !== null ? JSON.parse(stickyValue) : saveTimerVal
                }
                width={height * 0.15}
                timeOver={() => {
                  if (executeOnce) {
                    executeOnce = false;
                    questionsState.attemptedCount = attemptedCount;

                    handleSaveToPC(questionsState);
                    history.replace({
                      pathname: "/summary",
                      state: { questionSet: questionsState, userData },
                    });
                  }
                }}
                transferVal={(val) => {
                  window.localStorage.setItem(
                    "TimerValue",
                    JSON.stringify(val)
                  );
                  setSaveTimerVal(val);
                }}
              />
            </Box1>
            <Box2>
              <StyledCarousal
                swipe={false}
                ref={(ref) => {
                  slider.current = ref;
                }}
                effect="fade"
                dots={false}
                infinite={false}
                height={height * 0.45}
                width={width}
                beforeChange={(from, to) => {
                  if (executeNow) {
                    if (from > to) {
                      setQuestionSelected(questionSelected - 1);
                    } else {
                      setQuestionSelected(questionSelected + 1);
                    }
                  }
                }}
              >
                {questionsState &&
                  questionsState.map((questions, questionIndex) => {
                    return (
                      <div key={new Date() + questionIndex}>
                        <QuestionsDiv>
                          Q{questionIndex + 1}. {questions.que}
                        </QuestionsDiv>
                        <div className="typeQuestion">
                          [
                          {questions.type === "single"
                            ? "Single Choice"
                            : "Multiple Choice"}
                          ]
                        </div>
                        {questions.answersArr.map((answers, answersIndex) => {
                          return (
                            <AnswersDiv
                              key={new Date() + answersIndex}
                              selected={
                                questions.type === "multiple"
                                  ? questions.multipleSelected &&
                                    questions.multipleSelected.includes(
                                      answers.option
                                    )
                                  : (questions.userResponse &&
                                      questions.userResponse.answerSubmitted
                                        .option === answers.option) ||
                                    selectedAnswer === answersIndex
                              }
                              onClick={() => {
                                setQuestionsState(questionsState);

                                answerClicked(
                                  questions,
                                  questionIndex,
                                  answers,
                                  answersIndex
                                );
                              }}
                            >
                              {(answersIndex + 10).toString(36).toLowerCase()}
                              ). {answers.option}
                            </AnswersDiv>
                          );
                        })}
                      </div>
                    );
                  })}
              </StyledCarousal>

              <TopButtonDiv>
                <NextButton
                  disabled={questionSelected < 1 ? true : false}
                  enabled={questionSelected < 1 ? false : true}
                  paddingRight="5%"
                  onClick={() => {
                    /**
                     * mantains previous button disabled and activated state on the basis of current index
                     */
                    if (questionSelected >= 1) {
                      setExecuteNow(true);
                      setTimeout(() => {
                        slider.current.prev();
                      }, 200);
                      setSelectedAnswer(null);
                    }
                  }}
                  {...props}
                >
                  <b>Previous</b>
                </NextButton>

                <NextButton
                  enabled={
                    questionSelected === questionsState &&
                    questionsState.length - 1
                      ? false
                      : true
                  }
                  onClick={() => {
                    /**
                     * mantains next button disabled and activated state on the basis of current index
                     */
                    if (
                      questionSelected !== questionsState &&
                      questionsState.length - 1
                    ) {
                      setExecuteNow(true);
                      setTimeout(() => {
                        slider.current.next();
                      }, 200);
                      setSelectedAnswer(null);
                    }
                  }}
                  {...props}
                >
                  <b>Next</b>
                </NextButton>
              </TopButtonDiv>
              <BottomButtonView>
                <Popconfirm
                  title="Once Submitted, you won't be able to change answers."
                  visible={visible}
                  onConfirm={handleOk}
                  okButtonProps={{ loading: confirmLoading }}
                  onCancel={handleCancel}
                >
                  <NextButton
                    enabled
                    scheme={"orange"}
                    onClick={() => showPopconfirm()}
                  >
                    <b>Submit</b>
                  </NextButton>
                </Popconfirm>
              </BottomButtonView>
            </Box2>
          </RowWrap>
          {/* <RowWrap flex={0.3} backgroundColor={"violet"}>
            ddddd
          </RowWrap> */}
        </ContentWrap>
      </Wrapper>
    </Container>
  );
};

export default withRouter(Dashboard);

/**
 * This is the login component, acting as the entry point for the user into the application.
 * user feeds in the username and password, accepts the terms and conditions, read the instructions,
 * and selects the level of the questions he wish to answer.
 * A follow component at the bottom of the screen is also available, allowing user to visit the
 * FB and Twitter page of TPG.
 *
 * The user details are saved to the reducers in Redux.
 * user navigates to the dashboard component, after accomplishing all the above mentioned steps.
 */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Wrapper,
  ContentWrap1,
  ContentWrap2,
  RowWrap1,
  RowWrap2,
  Image,
  ButtonWrap,
  InstructionsWrap,
  Instructions,
  CheckboxWrap,
} from "./loginStyles";
import { useHistory } from "react-router-dom";

import { Checkbox, message, Radio } from "antd";
import { examInstructions } from "../../utils/constants";
import lineImage from "../../assets/images/substract.png";
import TextWrapper from "./../../commonComponents/textWrap/textWrap";
import GradientButton from "./../../commonComponents/grdientButton/gradientButton";
import useWindowDimensions from "./../../commonComponents/customhooks/useWindowDimensions";
import FollowComponent from "../../commonComponents/followComponent/followComponent";
import { registerAction } from "../../redux/actions/signupAction";

function LoginScreen(props) {
  localStorage.clear();
  const { height } = useWindowDimensions();
  const [showExamInfo, setshowExamInfo] = useState(false);
  const [termAccepted, settermAccepted] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectLevel, setSelectLevel] = useState(false);
  const [value, setValue] = React.useState(1);

  const history = useHistory();
  const dispatch = useDispatch();
  /**
   * A function, getting executed when user chooses to proceed login
   * checks for the basic cases of non-emptiness of the password and username,
   * length of the password should not be less then 5 characters.
   */
  function ProceedTapped() {
    if (username === "") {
      message.error("Username can't be empty");
    } else if (password === "") {
      message.error("Please enter the password");
    } else if (password.length < 5) {
      message.error("Password should be atleast 6 characters long.");
    } else {
      setshowExamInfo(true);
    }
  }

  /**
   * A function setting the value of the radio button, for the purpose of settinf the complexity of the questions
   * @param {object} e - gives the event details after user selects the complexity level, by
   * toggling the radio buttons
   */
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Wrapper height={height}>
      <ContentWrap1>
        <RowWrap1>
          <ContentWrap2>
            <h1>{showExamInfo ? "Instructions" : "Registration"}</h1>
            <img alt={{}} src={lineImage} />
            <h4>
              {showExamInfo
                ? "Read the Instructions carefully"
                : "You need to register in order to procee"}
            </h4>
            {selectLevel ? (
              <div>
                <div>Please Select the level of complexity</div>
                <Radio.Group
                  style={{ flexDirection: "column" }}
                  onChange={onChange}
                  value={value}
                >
                  <Radio value={1}>{"Easy"}</Radio>
                  <br />

                  <Radio value={2}>{"Advanced"}</Radio>
                </Radio.Group>

                <ButtonWrap paddingTop={"1%"} paddingBottom={"1%"}>
                  <GradientButton
                    disabled={showExamInfo && termAccepted ? false : true}
                    opacity={
                      showExamInfo && !termAccepted
                        ? 0.3
                        : !showExamInfo
                        ? 1
                        : 1
                    }
                    title={"Continue"}
                    onPress={() => {
                      // dispatches the register action in redux, to save the user credentials and complexity level selected by the user
                      localStorage.setItem(
                        "userData",
                        JSON.stringify({
                          username: username,
                          password: password,
                          complexityLevel: value,
                        })
                      );

                      dispatch(
                        registerAction({
                          username: username,
                          password: password,
                          complexityLevel: value,
                        })
                      );
                      history.replace("/dashboard");
                    }}
                  />
                </ButtonWrap>
              </div>
            ) : showExamInfo ? (
              <InstructionsWrap>
                <Instructions>{examInstructions}</Instructions>
                <CheckboxWrap>
                  <Checkbox onChange={() => settermAccepted(!termAccepted)}>
                    I agree
                  </Checkbox>
                </CheckboxWrap>
                <ButtonWrap paddingTop={"1%"} paddingBottom={"1%"}>
                  <GradientButton
                    data-testid="continueButton"
                    disabled={showExamInfo && termAccepted ? false : true}
                    opacity={
                      showExamInfo && !termAccepted
                        ? 0.3
                        : !showExamInfo
                        ? 1
                        : 1
                    }
                    title={"Continue"}
                    onPress={() => {
                      setSelectLevel(true);
                    }}
                  />
                </ButtonWrap>
              </InstructionsWrap>
            ) : (
              <>
                <TextWrapper
                  testid="usernameInput"
                  type="text"
                  placeHolder="Name"
                  title="Your name here"
                  onChangeText={(e) => setUsername(e.target.value)}
                />
                <TextWrapper
                  type="password"
                  placeHolder="Password"
                  title="Password"
                  onChangeText={(e) => setPassword(e.target.value)}
                />
                <GradientButton
                  title={"Proceed"}
                  onPress={() => ProceedTapped()}
                  buttonWidth="40%"
                />
              </>
            )}
            <FollowComponent />
          </ContentWrap2>
        </RowWrap1>
        <RowWrap2>
          <Image />
        </RowWrap2>
      </ContentWrap1>
    </Wrapper>
  );
}

export default LoginScreen;

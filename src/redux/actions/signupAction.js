import { types } from "./../actionTypes/actionTypes";
import { QuestionSet, QuestionSetModerate } from "./../../utils/questions";

/**
 * signup function, which saves the username, password, and complexityLevel selected by the user
 * @param {obj} registerObj
 */
export const registerAction = (registerObj) => {
  return (dispatch) => {
    dispatch({
      type: types.SIGNUP_SUCCESS,
      payload: registerObj,
      questionSet:
        registerObj.complexityLevel === 1 ? QuestionSet : QuestionSetModerate,
    });
  };
};

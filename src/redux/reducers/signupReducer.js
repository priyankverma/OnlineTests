import { types } from "./../actionTypes/actionTypes";
const signupReducer = (
  state = {
    data: null,
    loading: false,
    answeredQuestions: [],
    questionSet: [],
  },
  action
) => {
  switch (action.type) {
    case types.SIGNUP_REQUEST: {
      return {
        ...state,
        data: null,
        loading: true,
      };
    }
    case types.SIGNUP_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        questionSet: action.questionSet,
      };
    }
    case types.SIGNUP_FAILED: {
      return {
        ...state,
        loading: false,
        data: null,
      };
    }

    case types.ANSWERED_SUCCESS: {
      return {
        ...state,
        loading: false,
        answeredQuestions: [...state.answeredQuestions, action.payload],
      };
    }

    default:
      return state;
  }
};
export default signupReducer;

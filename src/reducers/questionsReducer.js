import { FETCH_QUESTIONS, VIEW_QUESTION } from "../actions/types";

const initialState = {
  questions: [],
  viewQuestion: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return {
        ...state,
        questions: action.payload
      };
    case VIEW_QUESTION:
      return {
        ...state,
        viewQuestion: action.payload
      };
    default:
      return state;
  }
};

import { FETCH_QUESTIONS } from "./types";

export const fetchQuestions = () => dispatch => {
  fetch("https://polls.apiblueprint.org/questions?page=1")
    .then(response => {
      return response.json();
    })
    .then(questions =>
      dispatch({
        type: FETCH_QUESTIONS,
        payload: questions
      })
    );
};

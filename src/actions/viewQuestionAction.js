import { VIEW_QUESTION } from "./types";

export const viewQuestion = id => dispatch => {
  fetch(`https://polls.apiblueprint.org/questions/${id}`)
    .then(response => {
      return response.json();
    })
    .then(viewQuestion =>
      dispatch({
        type: VIEW_QUESTION,
        payload: viewQuestion
      })
    );
};

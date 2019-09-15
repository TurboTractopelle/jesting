import * as actionTypes from "./actionTypes";
import actionCreator from "./actionCreator";

const fetchStart = actionCreator(actionTypes.FETCH_START);
const fetchFailure = actionCreator(actionTypes.FETCH_FAILURE, "error");
const fetchSuccess = actionCreator(actionTypes.FETCH_SUCCESS, "data");

export const fetch = () => {
  return dispatch => {
    dispatch(fetchStart());

    setTimeout(() => {
      const data = [
        { id: 1, title: "title1", text: "text1" },
        { id: 2, title: "title2", text: "text2" }
      ];

      dispatch(fetchSuccess(data));
    }, 500);
  };
};

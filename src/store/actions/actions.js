import * as actionTypes from "./actionTypes";
import actionCreator from "./actionCreator";
import axios from "axios";

const fetchStart = actionCreator(actionTypes.FETCH_START);
const fetchFailure = actionCreator(actionTypes.FETCH_FAILURE, "error");
const fetchSuccess = actionCreator(actionTypes.FETCH_SUCCESS, "data");

export const fetch = () => dispatch => {
  dispatch(fetchStart());

  axios
    .get("https://jsonplaceholder.typicode.com/posts?_limit=2")
    .then(res => dispatch(fetchSuccess(res.data)))
    .catch(err => dispatch(fetchFailure(err.msg)));
};

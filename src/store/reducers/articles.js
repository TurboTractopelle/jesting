import * as actionTypes from "../actions/actionTypes";

const initialState = {
  data: [],
  loading: false,
  error: false
};
const articles = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SUCCESS:
      return { ...state, data: action.data, loading: false };
    case actionTypes.FETCH_START:
      return { ...state, loading: true };
    case actionTypes.FETCH_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default articles;

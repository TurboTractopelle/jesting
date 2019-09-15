import articlesReducer from "./articles";
import * as action from "../actions/actions";
import * as actionTypes from "./../actions/actionTypes";

describe("articles reducer", () => {
  it("returns the state with default action", () => {
    const newState = articlesReducer(undefined, { type: "stuff" });
    expect(newState).toEqual({ data: [], loading: false, error: false });
  });

  it("starts loading when start to fetch", () => {
    const newState = articlesReducer(undefined, action.fetch());
    expect(newState.loading).toBe(true);
  });

  it("saves data on success", () => {
    const data = [{ title: 1 }, { title: 2 }];
    const actionFetchSuccess = { type: actionTypes.FETCH_SUCCESS, data };
    const newState = articlesReducer(undefined, actionFetchSuccess);
    expect(newState.loading).toBe(false);
    expect(newState.data).toEqual(data);
  });

  it("fails but with style", () => {
    const actionFetchFailure = { type: actionTypes.FETCH_FAILURE };
    const newState = articlesReducer(undefined, actionFetchFailure);
    expect(newState.loading).toBe(false);
    expect(newState.error).toBe(true);
  });
});

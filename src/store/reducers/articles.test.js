import articles from "./articles";

describe("articles reducer", () => {
  it("returns the state with default action", () => {
    const newState = articles(undefined, { type: "stuff" });
    expect(newState).toEqual({ data: [], loading: false, error: false });
  });
});

import { getThemeCSSVars, isValidThemeValue } from "./system";

describe("system.js tests", () => {
  it("should test creating the css vars", () => {
    const results = getThemeCSSVars();
  });

  it("should validate theme value key", () => {
    const resultOne = isValidThemeValue("space", 24);
  });
});

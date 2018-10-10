// src/calculator.test.js

const calculator = require("./calculator.js");

test("Returns sum of empty string", () => {
  expect(calculator("")).toBe(0);
});

// src/calculator.test.js

const calculator = require("./calculator.js");

test("Returns sum of empty string", () => {
  expect(calculator("")).toBe(0);
});

test("Returns sum of one integer", () => {
  expect(calculator("123")).toBe(123);
});

test("Returns sum of two integers", () => {
  expect(calculator("12,23")).toBe(12+23);
});

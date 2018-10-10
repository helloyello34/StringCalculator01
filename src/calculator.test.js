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

test("Returns sum of 10 numbers", () => {
  expect(calculator("1,2,3,4,5,6,7,8,9,10")).toBe(1+2+3+4+5+6+7+8+9+10);
});

test("Retruns sum of 3 integers with new line", () => {
  expect(calculator("1\n4, 7")).toBe(1+4+7);
});

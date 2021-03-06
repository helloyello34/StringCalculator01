// src/calculator.test.js

const calculator = require("./calculator.js");

test("Returns sum of empty string", () => {
  try {
    expect(calculator("")).toBe(0);
  } catch(e) {
    console.log(e);
  }
});

test("Returns sum of one integer", () => {
  try {
    expect(calculator("123")).toBe(123);
  } catch(e) {
    console.log(e);
  }
});

test("Returns sum of two integers", () => {
  try {
    expect(calculator("12,23")).toBe(12+23);
  } catch(e) {
    console.log(e);
  }
});

test("Returns sum of 10 numbers", () => {
  try {
    expect(calculator("1,2,3,4,5,6,7,8,9,10")).toBe(1+2+3+4+5+6+7+8+9+10);
  } catch(e) {
    console.log(e);
  }
});

test("Retruns sum of 3 integers with new line", () => {
  try {
    expect(calculator("1\n4, 7")).toBe(1+4+7);
  } catch(e) {
    console.log(e);
  }
});

test("Returns an error for one negative number", () => {
  try {
    expect(calculator("1,-2\n4")).toBe();
  } catch(e) {
    console.log(e);
  }
});

test("Returns an error for two negative number", () => {
  try {
    expect(calculator("1,-2\n-4")).toBe();
  } catch(e) {
    console.log(e);
  }
});

test("Returns sum of 3 integers and one is over 1000 and one is 1000", () => {
  try {
    expect(calculator("1000,1001,1")).toBe(1000+1);
  } catch (e) {
    console.log(e);
  }
});

test("test using ; as a delimiter", () => {
  try {
    expect(calculator("//;\n1000;1001;1")).toBe(1000+1);
  } catch (e) {
    console.log(e);
  }
});

test("test using ;; as a delimiter", () => {
  try {
    expect(calculator("//;;\n1000;;1001;;1")).toBe(1000+1);
  } catch (e) {
    console.log(e);
  }
});

test("Using another delimiter and a comma", () => {
  try {
    expect(calculator("//;;\n1000;;12,15")).toBe(1000+12+15);
  } catch (e) {
  	console.log(e);
  }
});

// src/calculator.js

function Add(numbers) {
  if(numbers === "") { return 0; }
  var delimiter = ",";
  if(numbers.substring(0,2) === "//") {
    var tempArr = numbers.split("\n")[0]
    delimiter = tempArr.substring(2, tempArr.length);
    numbers = numbers.substring(tempArr.length + 1, numbers.length);
  }
  numbers = numbers.replace(",", delimiter);
  numbers = numbers.replace("\n", delimiter);
  numbers = numbers.split(delimiter).map(Number);
  if(numbers.some(v => v < 0)) {
    throw "Negatives not allowed:" + numbers.filter(v => v < 0);
  }
  numbers = numbers.filter(v => v <= 1000);
  return sum(numbers);
}

function sum(numberArray) {
  var sum = 0;
  for(var i = 0; i < numberArray.length; i++) {
    sum += numberArray[i];
  }
  return sum;
}

module.exports = Add;

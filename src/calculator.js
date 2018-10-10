// src/calculator.js

function Add(numbers) {
  if(numbers === "") { return 0; }
  numbers = numbers.replace('\n', ',');
  numbers = numbers.split(',').map(Number);
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

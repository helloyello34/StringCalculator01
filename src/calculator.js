// src/calculator.js

function Add(numbers) {
  if(numbers === "") { return 0; }
  var nums = numbers.split(',').map(Number);
  return sum(nums);
}

function sum(numberArray) {
  var sum = 0;
  for(var i = 0; i < numberArray.length; i++) {
    sum += numberArray[i];
  }
  return sum;
}

module.exports = Add;

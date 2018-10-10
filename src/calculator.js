// src/calculator.js

function Add(numbers) {
  if(numbers === "") { return 0; }
  var nums = numbers.split(',').map(Number);
  if(nums.length == 2) {
    return nums[0] + nums[1];
  }
  return nums[0];
}

module.exports = Add;

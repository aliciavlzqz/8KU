// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

//since we are checking each number, we would need a loop, to loop though the array, square each number. then
//add the the results after each number has been squared

function squareSum(numbers){
let sum = 0
for(let i = 0; i < numbers.length; i++){
  sum += numbers[i] ** 2
}
  return sum
}




///alternate solution
//arr.reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function for each 
//value of the array (from left-to-right) and the return value of the function is stored in an accumulator. 

function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}
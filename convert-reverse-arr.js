// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
 //code here\
  //convert to string
  //.split divides string into substrings, puts substring into an array and returns the array
  //.reverse reverses an array
  //.map creates a new array from calling a function for every array element
  //Number converts a value into a number
  return String(n).split('').reverse().map(Number)
}


function digitize(n) {
  return n.toString().split("").reverse().map(function(i){
    return parseInt(i);
  });
}
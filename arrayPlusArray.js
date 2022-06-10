// <!-- I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too. -->





function arrayPlusArray(arr1, arr2) {
  //concat to create one new array
  let newArr = arr1.concat(arr2)
  //use reduce to calculate total of all numbers 
  //assign the total to a variable
  let val = newArr.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
  })
  return val
  }

///alternate solution.
  function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
  }
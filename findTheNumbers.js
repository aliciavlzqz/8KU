// Complete the function which takes two arguments and returns all numbers which are divisible by 
// the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)

divisibleBy = (numbers, divisor) => numbers.filter(x => x % divisor == 0)


//alternate solution for 8ku challenge
function divisibleBy(numbers, divisor) {
	var newArr = [];
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] % divisor === 0) {
			newArr.push(numbers[i]);
		} 
	}
return newArr;
}
///
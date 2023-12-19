// Factorial Calculator
// Function Name: calculateFactorial
// Description
// Write a function that takes an integer as input and returns the factorial of that number.
// The factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.

function factorialNum(num) {
  let y = 1;
  for (let i = 1; i <= num; i++) {
    y = i * y;
  }
  return y;
}
let x = factorialNum(5);
console.log(x); //output: 120

// not practical solution 2:
// function factorialOfNum(num){
//   let y = num.reduce((acc, val) =>{
//     return acc * val
//   })
//   return y
// }
// let x = factorialOfNum([5,4,3,2,1])
// console.log(x)

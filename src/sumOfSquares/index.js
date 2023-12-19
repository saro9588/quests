// Function Name: sumOfSquares
// Description
// Write a function sumOfSquares that takes an array of numbers as input and returns the sum of the squares of all the numbers.
// Requirements
// The function should take an array of numbers as a parameter
// The function should return a single number which is the sum of the squares of all the numbers in the input array
// Examples
// sumOfSquares([1, 2, 3, 4, 5]) // Output: 55
// sumOfSquares([-2, 0, 3, -1, 4]) // Output: 30

function sumOfSquares(num) {
  let newArr = [];
  let x = num.reduce((acc, val) => {
    return val * val + acc;
  });
  newArr.push(x);
  return newArr;
}
let res = sumOfSquares([2, 3, 4, 5, 6]);
console.log(res); // [88]

// in typescript
// function sumOfSquares(num: number[]): number[] {
//   let newArr: number[] = [];
//   let x: number = num.reduce((acc: number, val: number) => {
//     return val * val + acc;
//   }, 0);
//   newArr.push(x);
//   return newArr;
// }

// let res: number[] = sumOfSquares([2, 3, 4, 5, 6]);
// console.log(res);

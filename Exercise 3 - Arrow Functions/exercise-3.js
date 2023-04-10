// const sum = function (a, b) {
//   return a + b;
// };

let sum = ((a, b) => a + b);

// const subtract = function (a, b) {
//   return a - b;
// }

let subtract = ((a, b) => a - b);

// const multiply = function (a, b) {
//   return a * b;
// }

let multiply = ((a, b) => a * b);

// const divide = function (a, b) {
//   return a / b;
// }

let divide = ((a, b) => a / b);

// const log = function (value) {
//   console.log(value);
// }

let log = ((value) => console.log(value));
 
log(divide((subtract(multiply(sum(2, 4), sum(2, 5)), 2)), 5));






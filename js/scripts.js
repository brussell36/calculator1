// const add = function(num1, num2) {
//   return num1 + num2;
// };

// console.log(add(5, 7));

// prompt("what is your name");

// let name = function(sayHello) {
//   return sayHello;
// }

// console.log(name("Thomas"));


// const subtract = function(num1, num2) {
//   return num1 - num2;
// }

// console.log(subtract(7, 5));

// const multiply = function(int1, int2, int3) {
//   return int1 * int2 * int3;
// }

// console.log(multiply(3, 7, 2 ));

// function divide(numb1, numb2) {
//   return numb1 / numb2;
// }

// console.log(divide(21,7));

// function remainder(numb1, numb2) {
//   return numb1 % numb2;
// }

// console.log(remainder(21,6));

// let userAge = prompt("What is your age?");
// let userFood = prompt("What is your favorite food?");

// function ageFood() {
//   return userAge + " " + userFood;
// }

// alert(ageFood());

const add = function(number1, number2) {
  return number1 + number2;
};

const subtract = function(number1, number2) {
  return number1 - number2;
};

const multiply = function(number1, number2) {
  return number1 * number2;
};

const divide = function(number1, number2) {
  return number1 / number2;
};


const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const result = add(number1, number2);
alert(result);
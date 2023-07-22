
// Naeem Goraya Date July 22, 2023 at 01:10pm
// Program to calculate the area of a circle.

const radius: number = 5; // Radius of the circle, you can change this value.
const pi: number = 3.14159; // Approximate value of pi.

// Calculate the area using the formula: area = pi * radius^2
const area: number = pi * radius * radius;

console.log(`The area of the circle with radius ${radius} is: ${area}`);


// Program to check if a number is even or odd.

const number: number = 10; // Number to be checked, you can change this value.

// Check if the number is even or odd using the modulo operator (%).
// If the remainder is 0, the number is even; otherwise, it's odd.
if (number % 2 === 0) {
  console.log(`${number} is an even number.`);
} else {
  console.log(`${number} is an odd number.`);
}

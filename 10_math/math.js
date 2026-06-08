//! ==========================================================
//! MATH IN JAVASCRIPT 
//! ==========================================================
// ? Math: The Math namespace object contains static properties and method for mathematicla constants and functions.
// ? Math works with the Number type. It doesn't work with BigInt.

// * 1: Constants:
// ? Math.PI: Represents the mathematical constant Pi.
// const piValue = Math.PI;
// console.log(piValue);

// * Basic Operation
//? Math.abs() static method returns the absolute value of a number.
//? or in simple, how far the number is from 0. It will be always positive.
// console.log(Math.abs(-3));

//* Difference Between Round, Floor & Ceil
// ? Math.round(): Rounds to the nearest integer Ex: console.log(Math.round(4.5));
// ? Math.floor(): Always rounds down to the nearest integer. Ex: console.log(Math.fllor(4.9));
// ? Math.ceil(): Always rounds up to the nearest integer. Ex: console.log(Math.Ceil(4.2))

// * Math.round():
// ? Math.round(): Rounds to the nearest integer Ex: console.log(Math.round(4.5));
// console.log(Math.round(1.2));
// console.log(Math.round(1.5));
// console.log(Math.round(1.49));

// * Math.ceil():
// ? Math.ceil(): Always rounds up to the nearest integer. Ex: console.log(Math.Ceil(4.2))
// console.log(Math.ceil(1.1));
// console.log(Math.ceil(1.2));
// console.log(Math.ceil(1.7));

// * Math.floor(x):
// ? Math.floor(): Always rounds down to the nearest integer. Ex: console.log(Math.fllor(4.9));
// console.log(Math.floor(3.7));
// console.log(Math.floor(3.1));
// console.log(Math.floor(3.9));

//* Math.trunc(x)
// ? returns the integer part of x:
// console.log(Math.trunc(3.7));
// console.log(Math.trunc(3.2));
// console.log(Math.trunc(3));


// * EXPONENTIAL AND LOAGRITHMIC FUNCTIONS:
//? Math.pow(x, y): returns the value of x to the power of y.
// console.log(Math.pow(2, 3));

//? Math.sqrt(): Math.sqrt(x) returns the square root of x:
// let squareRoot = Math.sqrt(25);
// console.log(squareRoot)


//? Math.log(x) returns the natural logarithm of x.
// let logResult = Math.log(1);
// let logResult = Math.log(2);
// console.log(logResult);


// * Math.random(): returns a random number between 0 (inclusive) and 1 (exclusive);
// console.log(Math.round(Math.random() * 100))




// ! INTERVIEW QUESTION TOPIC - MATH IN JAVASCRIPT

// * What is Math in JavaScript?
// ? Math is a built-in JavaScript object that provides
// ? mathematical constants and functions.

// * Does Math work with BigInt?
// ? No, Math methods work only with the Number data type.

// * What is Math.PI?
// ? Math.PI is a mathematical constant representing
// ? the value of Pi (π), approximately 3.14159.

// * What does Math.abs() do?
// ? Math.abs() returns the absolute (positive) value of a number.

// * What is the purpose of Math.round()?
// ? Math.round() rounds a number to the nearest integer.

// * How does Math.round() work?
// ? If the decimal part is 0.5 or greater, it rounds up.
// ? Otherwise, it rounds down.

// * What does Math.floor() do?
// ? Math.floor() always rounds a number down
// ? to the nearest integer.

// * What does Math.ceil() do?
// ? Math.ceil() always rounds a number up
// ? to the nearest integer.

// * What is the difference between Math.round(), Math.floor(), and Math.ceil()?
// ? Math.round() rounds to the nearest integer.
// ? Math.floor() always rounds down.
// ? Math.ceil() always rounds up.

// * What does Math.trunc() do?
// ? Math.trunc() removes the decimal part of a number
// ? and returns only the integer portion.

// * What is the difference between Math.floor() and Math.trunc()?
// ? Math.floor() rounds down,
// ? while Math.trunc() simply removes the decimal part.

// * What does Math.pow() do?
// ? Math.pow(base, exponent) returns the value
// ? of a number raised to a given power.

// * What does Math.sqrt() do?
// ? Math.sqrt() returns the square root of a number.

// * What does Math.log() do?
// ? Math.log() returns the natural logarithm (base e)
// ? of a number.

// * What does Math.random() do?
// ? Math.random() generates a random number
// ? between 0 (inclusive) and 1 (exclusive).

// * How can you generate a random number between 1 and 100?
// ? By using:
// ? Math.floor(Math.random() * 100) + 1

// * Which Math method is commonly used in games and OTP generation?
// ? Math.random() is commonly used for generating
// ? random values in games, passwords, and OTPs.

// * Can Math methods modify the original value?
// ? No, Math methods return a new value
// ? and do not modify the original variable.

// * Which Math method is used to find the square root of a number?
// ? Math.sqrt()

// * Which Math method is used to remove decimal values without rounding?
// ? Math.trunc()

// * Which Math method always returns a positive number?
// ? Math.abs()

// * What is the value range of Math.random()?
// ? It returns a value greater than or equal to 0
// ? and less than 1.
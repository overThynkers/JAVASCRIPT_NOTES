//! CONCATINATION AND TYPE COERCION

//* Concatenation In JavaScript
//? In JavaScript, the + sign is not only used for arithmetic addition but also for string concatenation. When the + operator is used with strinfs, it concatenates the strings together.
//? It's important to note that if any operand of the + operator is a string, JavaScript will treat the other operands as strings as well, resulting in string concatenation. If both operands are numbers, the + operator performs numeric addition.
//todo Example
// const str = "Hello, " + "World";
// console.log(str);


//* Type coercion is the automatic conversion of "Values" from one data type to another.
//? It is a fundamental part of JavaScript and can be used to make code more readable and efficient.
//? There are two types of coercion in JavaScript: Implicit and Explicit. Implicit coercion happens automatically, while explicit coercion is done manually by the programmer.
//? It's worth nothing that type corcion can lead to unexpected results, so it's essential to be aware of how JavaScript handles these situations.

// let str = "Ali" - 69;
// console.log(str) //? Output NaN

// let number = "5" - 3;
// console.log(number)//? outPut 2 Because Type coercion covert string to a number and perform arithematical operations

// let number = "5" + 10;
// console.log(number) //? output 510 Because + Operator is assigned as a concatinate


//todo Tasks 
console.log(10 + "20"); // ? 1020
console.log(9 - "5"); // ? 4
console.log("Java" + "Script"); // ? JavaScript
console.log(" " + " "); // ?  
console.log(" " + 0); // ?  0
console.log("Ali" - "Ahmed"); // ? NaN
console.log(true + true); // ? 2
console.log(false + true); // ? 1 
console.log(true + false); // ? 1  
console.log(false - true); // ? -1



//! CONCATINATION AND TYPE COERCION - INTERVIEW QUESTIONS


//* Q1: What is concatenation in JavaScript?
//? Answer: Concatenation means joining two or more strings together using the + operator.
//? Example: "Hello" + "World" = "HelloWorld"

//* Q2: What happens when we use + operator with a string and a number?
//? Answer: JavaScript converts the number into a string and performs string concatenation.
//? Example: "5" + 10 = "510"

//* Q3: What is type coercion in JavaScript?
//? Answer: Type coercion is the automatic conversion of values from one data type to another during operations.

//* Q4: What are the types of type coercion?
//? Answer:
//? 1. Implicit Coercion (automatic conversion by JS)
//? 2. Explicit Coercion (manual conversion by developer)

//* Q5: Why does "5" - 3 = 2 but "5" + 3 = "53"?
//? Answer:
//? - operator converts string to number → subtraction happens
//? + operator converts number to string → concatenation happens

//* Q6: What is the output of "Ali" - "Ahmed"?
//? Answer: NaN (Not a Number)
//? Because subtraction between non-numeric strings is invalid.

//* Q7: What is NaN in type coercion context?
//? Answer: NaN occurs when JavaScript tries to perform invalid numeric operations.

//* Q8: What is output of true + true?
//? Answer: 2
//? Because true is converted to 1 → 1 + 1 = 2

//* Q9: What is output of false + true?
//? Answer: 1
//? false = 0, true = 1 → 0 + 1 = 1

//* Q10: What is output of true - false?
//? Answer: 1
//? true = 1, false = 0 → 1 - 0 = 1

//* Q11: Why does " " + 0 return " 0"?
//? Answer: Because space is a string, so number 0 is converted into string and concatenation happens.

//* Q12: What is difference between implicit and explicit coercion?
//? Answer:
//? Implicit → automatic conversion by JavaScript
//? Explicit → manual conversion using Number(), String(), Boolean()

//* Q13: What is output of 10 + "20"?
//? Answer: "1020"
//? Because number is converted to string due to + operator.

//* Q14: What is output of 9 - "5"?
//? Answer: 4
//? Because string "5" is converted to number.

//* Q15: What is output of "Java" + "Script"?
//? Answer: "JavaScript"

//* Q16: What is output of " " + " "?
//? Answer: "  " (two spaces)

//* Q17: What is output of "Ali" + "Ahmed"?
//? Answer: "AliAhmed"

//* Q18: What is output of false - true?
//? Answer: -1
//? false = 0, true = 1 → 0 - 1 = -1

//* Q19: Why JavaScript does type coercion?
//? Answer: To make operations flexible and reduce errors in dynamic typing.

//* Q20: Can type coercion lead to bugs?
//? Answer: Yes, because it may produce unexpected results if not understood properly.
//! INTRODUCTION TO JAVASCRIPT (INTERVIEW QUESTIONS WITH ANSWERS)

//* What is JavaScript?
//? JavaScript is a programming language used to make websites interactive and dynamic.

//* Who created JavaScript and in which year?
//? Brendan Eich created JavaScript in 1995 at Netscape.

//* What was the original name of JavaScript?
//? It was first called Mocha, then LiveScript, and finally JavaScript.

//* Why was JavaScript renamed from LiveScript to JavaScript?
//? It was renamed to gain popularity by associating it with Java.

//* What is ECMAScript?
//? ECMAScript is the standard specification on which JavaScript is based.

//* When was ES6 introduced and why is it important?
//? ES6 was introduced in 2015 and it added modern features like let/const, arrow functions, classes, etc.

//* What are the different ways to write JavaScript?
//? Inline, Internal, and External JavaScript.

//* What is inline JavaScript?
//? JavaScript written directly inside HTML elements using attributes like onclick.

//* What is internal JavaScript?
//? JavaScript written inside <script> tags in the same HTML file.

//* What is external JavaScript?
//? JavaScript written in a separate .js file and linked using <script src="file.js"></script>.

//* Difference between inline, internal and external JavaScript?
//? Inline is written in HTML elements, internal is inside HTML file, and external is in a separate file.

//* Why is external JavaScript preferred over inline and internal?
//? Because it improves code readability, reusability, and maintainability.



//! VARIABLES & VALUES (INTERVIEW QUESTIONS)

//* What is a variable in JavaScript?
//? A variable is a container used to store data values in memory.

//* Why do we use variables?
//? We use variables to store, update, and reuse data in a program.

//* Give an example of variable declaration.
//? Example: var myName = "World";

//* What are the types of variables in JavaScript?
//? There are three types: var, let, and const.

//* What is var?
//? var is the oldest way to declare variables.
//? It has function scope and can be re-declared and updated.
//? It is not recommended in modern JavaScript.

//* What is let?
//? let is introduced in ES6.
//? It has block scope.
//? It can be updated but cannot be re-declared in the same scope.

//* What is const?
//? const is also introduced in ES6.
//? It has block scope.
//? It cannot be re-declared or updated.
//? It is used for constant values.

//* What is a value in JavaScript?
//? A value is the actual data stored inside a variable (like "World", 25, true, etc.).

//* What are the rules for naming variables?

//* Can variable names start with a number?
//? No, variable names cannot start with a number.

//* Can variable names contain spaces?
//? No, variable names cannot contain spaces.

//* Can we use special symbols in variable names?
//? Only _ (underscore) and $ (dollar sign) are allowed.

//* What is camelCase?
//? camelCase is a naming convention where the first word is lowercase and each next word starts with uppercase (e.g., myFirstName).

//* Can we use reserved keywords as variable names?
//? No, reserved keywords like if, const, for cannot be used.

//* Are variable names case sensitive?
//? Yes, myName and myname are different variables.

//* Quiz Answers (Valid or Invalid)

//? var my_firstName = "John"; // Valid ✅
//? var _myLastName$ = "Doe"; // Valid ✅
//? var 123myAge = 25; // Invalid ❌
//? var $cityName = "New York"; // Valid ✅
//? var my@Email = "info@overThynkers.com"; // Invalid ❌



//! JAVASCRIPT DATA TYPES - INTERVIEW QUESTIONS & ANSWERS

//* Q1: What are data types in JavaScript?
//? Answer: Data types define what type of value a variable can store and how JavaScript handles it.
//? Example: String, Number, Boolean, Null, Undefined, BigInt, Symbol, Object.

//* Q2: What are primitive data types?
//? Answer: Primitive data types are basic types that store single values and are immutable.
//? Example: String, Number, Boolean, Null, Undefined, BigInt, Symbol.

//* Q3: What is the difference between null and undefined?
//? Answer:
//? undefined → variable is declared but not assigned a value
//? null → intentional absence of value

//* Q4: What is typeof operator used for?
//? Answer: typeof is used to check the data type of a variable.

//* Q5: Why typeof null is "object"?
//? Answer: It is a historical bug in JavaScript that has been kept for backward compatibility.

//* Q6: What is BigInt?
//? Answer: BigInt is used to store numbers larger than Number limit.

//* Q7: What is Symbol in JavaScript?
//? Answer: Symbol is used to create unique and immutable values.

//* Q8: What are truthy and falsy values?
//? Answer:
//? Truthy → values treated as true in conditions
//? Falsy → values treated as false in conditions

//* Q9: List falsy values in JavaScript.
//? Answer:
//? false, 0, "", null, undefined, NaN

//* Q10: What is NaN?
//? Answer: NaN means Not-a-Number and represents invalid numeric operations.

//* Q11: Why NaN === NaN is false?
//? Answer: Because NaN represents an invalid number, and every NaN value is different.

//* Q12: How to check NaN in JavaScript?
//? Answer: Using isNaN() function.

//* Q13: Difference between parseInt and parseFloat?
//? Answer:
//? parseInt → converts string to integer (removes decimal)
//? parseFloat → converts string to decimal number

//* Q14: What does parseInt("1.9") return?
//? Answer: 1 (it ignores decimal part)

//* Q15: What does parseFloat("1.9") return?
//? Answer: 1.9 (keeps decimal part)

//* Q16: How to convert string to number?
//? Answer:
//? Using + operator, Number() function, or parseInt/parseFloat

//* Q17: How to convert number to string?
//? Answer:
//? Using String() function or adding "" empty string

//* Q18: What is the difference between == and ===? (Important)
//? Answer:
//? == → checks value only (type conversion allowed)
//? === → checks value + type (strict equality)

//* Q19: Is array a primitive data type?
//? Answer: No, array is a non-primitive (object) data type.

//* Q20: What is difference between primitive and non-primitive types?
//? Answer:
//? Primitive → stores single value, immutable
//? Non-primitive → stores multiple values, mutable (objects, arrays, functions)

//* Q21: Why is typeof NaN "number"?
//? Answer: Because NaN is considered a numeric type in JavaScript even though it is invalid.

//* Q22: What is output of isNaN("abc")?
//? Answer: true (because it cannot be converted into a valid number)

//* Q23: What is output of isNaN(123)?
//? Answer: false (because it is a valid number)

//* Q24: Can object and array be stored in variables?
//? Answer: Yes, both are non-primitive data types.

//* Q25: Why do we use Symbol?
//? Answer: To create unique values that never collide with other values.
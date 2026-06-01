//! EXPRESSION AND OPERATORS

// * What is operand, operator and expression
// ? Operand is the value where the operator perform their task and the combination of operands and operator is call expression.
//todo exmaple - 3 + 6 ----- 3 is operand, + is operator, 6 is operand and the combination of operand operators is called expression. 

// * Types of Operators 
// ? 1- Assignment operators
// ? 2- Arithmetic operators
// ? 3- Comparison operators
// ? 4- Logical operators
// ? 5- string operators 
// ? 6- Unary operators
// ? 7- Ternary (conditional) Oprators 
// ? 8- Type Operators


// * Assignment Oeprators
// ? Assignment operators in programming are symbols used to assign values to variables. They take the value on the right side of the oerpator and assign it to the variable on the left side.
//todo Exmaple :- let a = 10; (=) is the assignment operator
// let a = 10;
// a = 30;
// console.log(a);

// * Arithemetic Operator 
// ? Artithemetic operators in programming perform basic mathematical operations on variables or value. They include addition, subtraction, multiplication, division and modulus.

// * (+): Adds two value or variable 
// let x = 5;
// let z = 10;
// let result = x + z;
// console.log(result)

// * (-): subtract two value or variable 
// let x = 5;
// let z = 10;
// let result = x - z;
// console.log(result)


// * (*): multiple two value or variable 
// let x = 5;
// let z = 10;
// let result = x * z;
// console.log(result)


// * (/): divide two value or variable 
// let x = 5;
// let z = 10;
// let result = x / z;
// console.log(result)


// * (%): remainder two value or variable 
// let x = 17;
// let z = 5;
// let result = x % z;
// console.log(result)


// * toFixed();
// ? It's a way to limit the decimal digits
// todo exmple:-
// let a = .1;
// let b = .2;
// let result = a + b;
// console.log(result); // Output 0.30000000000000004
// console.log(result.toFixed(2)); // output 0.30


// * String Operator
// ? There are a few ways to concatenate strings in JavaScript. The most common way is to use the + operator. For Exmaple, to concatenate the strings "Hello" and "Wrold", you would use the following code:
// let str = "Hello ";
// let str2 = "World"
// let result = str + str2;
// console.log(result)


// * Comparison Operators 
// ? Comparison oeprators in JavaSCript are used to compare values and return a boolean result (true or false).

// ? Equal (==) checks if two value are equal, perform type coercion if necessary
// console.log(5 == 5);

// ? strict Equal to(===): Checks if two values and their data type are equal or not 
// console.log(5 === "5");

//* Not Equal (!=);
// ? Checks if two value are not equal, performing type coerion if necessary.
// console.log(10 != 10);
// console.log(10 != "10");

//* Strict Not Equal (!==);
// ? Checks if two values and their data types are not equal.
// console.log(5 !== "5");
// console.log(5 !== 5);

//* greator than (>): 
// ? Checks if the value on the left is greater than the value on the right
// console.log(5 > 5);

//* greator than (>): 
// ? Checks if the value on the right is greater than the value on the left
// console.log(8 < 6);

//* greator than equal to(>=): 
// ? Checks if the value on the left is greater than or equal to the value on the right
// console.log(5 >= 5);

//* greator than equal to(<=): 
// ? Checks if the value on the right is greater than or equal to the value on the left
// console.log(5 <= 5);


// * Logical Operators 
// ? There are three main logical operators: && (logical AND) || (Logial OR), and ! (Logical NOT);

// * Logical AND (&&)
// ? Logical AND (&&): returns true if both operands are true otherwise, it returns false.

// var x = 5;
// var y = 10;
// console.log(x > 0 && y < 12);

// * Logical AND (||)
// ? Logical AND (&&): returns true if at least one of the operands is true otherwise, it returns false.

// var x = 5;
// var y = 10;
// console.log(x > 0 || y > 12);

// * Logical NOT (!)
// ? Returns true if the oeprand is false, and false if the operand is true
// var x = true;
// console.log(x);
// console.log(!x);


// * Ternary Operator: Condition ? True : False
// ? Write a program to check if the condidates isELigibleForDrive or not? 
// ? Age must be equal to or greater then 18.
// let age = 18;
// let isELigibleForDrive = age >= 18 ? "Elgible for Driving" : "Not Eligible";
// console.log(isELigibleForDrive);


//! Let Say you have a variable score representing a student exam score. If the score is greater than or eqaul to 60, the student passed ptherwise, they fail. Use the conditional (ternary Operator to determine the result and store it in a variable called result. Log the result in Console
// let studentMarks = 58;
// let result = studentMarks >= 60 ? "Pass" : "Fail";
// console.log(result); 



// * CONTROL STATEMENT & LOOPS
// ? If... Else Statement 
// ? Switch Statement 
// ? While Loop
// ? Do While Loop 
// ? For Loop  


// * If Else 
// ? If-Else statement is a decision-making or conditional statement used in programming to execute different blocks of code based on whether a condition is true or false.
// * Syntax 
/* 
? if(condition) {
?   Code to be executed if the condition is true
? } else {
?   Code to be executed if the condition is false
? }
*/    
// var temp = 20;
// if(temp > 30) {
//     console.log("Let's Go to Beach Baby");
// } else {
//     console.log("Let's Watch TV at Home");
// }


//todo Challenge time 
// let isCitizen = false ;
// let isRegisteredForVote = false;
// let age = 15;

// if(age >= 18) {
//     if(isCitizen) {
//         if(isRegisteredForVote) {
//             console.log("You are Eligible");
//         } else {
//             console.log("You are not eligible For Vote Because you don't have voter id.");
//         }
//     } else {
//         console.log("You are not Citizen.");
//     }
// } else {
//     console.log("You are Under Age.");
// }


// let num = 7;
// if(num % 2 === 0) {
//     console.log("EVEN")
// } else {
//     console.log("ODD")
// }

// let num = 0;
// if(num === 0) {
//     console.log("zero");
// } else if (num > 0) {
//     console.log("positive");
// } else {
//     console.log("negative");
// }


// * Switch Statement
// ? The Switch Statement is used to perform different actions based on different conditions
// * Syntax 
// switch(expression) {
//     case value1:
//         // Code to be Excuted if expression === value
//     break;
//     case value2:
//         // Code to be Excuted if expression === value
//     break;
//     case value3:
//         // Code to be Excuted if expression === value
//     break;
//     default:
//         // Code to be Excuted if expression === value
// }

// let operator = "asfas";
// let sum1 = 2;
// let sum2 = 4;
// switch(operator) {
//     case "+":
//         console.log(`sum1 + sum2 = ${sum1 + sum2}`);
//     break;
//     case "-":
//         console.log(`sum1 - sum2 = ${sum1 - sum2}`);
//     break;
//     case "*":
//         console.log(`sum1 * sum2 = ${sum1 * sum2}`);
//     break;
//         case "/":
//         console.log(`sum1 / sum2 = ${sum1 / sum2}`);
//     break;
//     default: 
//     console.log("Invalid Operator");
// }




// * While Loop 
// ? While Loop: A While loop in JavaScript Is a control structure that repeatdly executes a block of code as long as a specified condition remains true. The loop continues literating while the condition is true, and it terminates when the condition becomes false.
// * Syntax 
// while (condition) {
    // Code To be executed as long as the condition is true
// }

// let i = 0;
// while(i <= 10) {
//     console.log(i);
//     i++
// }

// let i = 1; 
// let tabel = 10;
// while(i <= 10) {
//     console.log(`${tabel} x ${i} = ${i * tabel}`);
//     i++;
// }

// * Do-While Loop
// ? A do While Loop in javascript is similar to a while loop, but it guarantee that the loop body will be executed at least once before checking the loop condition. The loop continues to execute while the specified condition is true, and it terminates when the condition becomes false.
// let i = 0;
// do {
    // console.log(i);
    // i++;
// } while (i <= 10);




// * For Loop
// ? For Loop in javascript is a control flow statement that allows you to repeatedly execute a block of code a specified number of times. It's particularly useful when you know the exact number of iterations needed.
// let sum = 0;
// for(let i = 0; i <= 10; i++) {
//     sum += i;
// }
// console.log(sum)

// let year = 2023; 
// if(year % 4 === 0 && year % 100 !== 0 || year % 400 ===0) {
//     console.log("leap Year");
// } else console.log("not a leap year ");

// let a = "";
// for(let i = 0; i <= 5; i++) {
//     console.log(a);
//     a += "* ";
// }
// for(let i = 0; i <= 100; i++) {
//     if(i % 2 !== 0) {
//         console.log(i)
//     }
// }

let a = "*****";
for(let i = 5; i >= 0; i--) {
    a = a.slice(a.length - i);
    console.log(a);
}





//! INTERVIEW QUESTIONS

//* What is an Operand?
//? An operand is a value or variable on which an operator performs an operation.
//? Example: In 5 + 3, both 5 and 3 are operands.

//* What is an Operator?
//? An operator is a symbol that performs an operation on one or more operands.
//? Example: +, -, *, /, %, ==, &&

//* What is an Expression?
//? An expression is a combination of operands and operators that produces a value.
//? Example: 5 + 3

//* What are the different types of Operators in JavaScript?
//? Assignment, Arithmetic, Comparison, Logical, String, Unary, Ternary, and Type Operators.

//* What is an Assignment Operator?
//? Assignment operators assign values to variables.
//? Example: let a = 10;

//* What is the difference between = and == ?
//? = is used to assign a value.
//? == is used to compare two values with type coercion.

//* What is the difference between == and === ?
//? == compares only values and performs type coercion.
//? === compares both values and data types without type coercion.

//* What is an Arithmetic Operator?
//? Arithmetic operators perform mathematical calculations.
//? Examples: +, -, *, /, %

//* What does the Modulus (%) operator do?
//? It returns the remainder after division.
//? Example: 17 % 5 returns 2.

//* What is the output of 10 % 3 ?
//? Output: 1

//* What is the purpose of toFixed() method?
//? It limits the number of decimal places.
//? Example: (0.3).toFixed(2) returns "0.30".

//* What is a String Operator?
//? The + operator is used to concatenate strings.
//? Example: "Hello" + " World"

//* What is String Concatenation?
//? Joining two or more strings together.

//* What are Comparison Operators?
//? Operators used to compare values and return true or false.
//? Examples: ==, ===, !=, !==, >, <, >=, <=

//* What is the difference between != and !== ?
//? != compares values only.
//? !== compares both values and data types.

//* What is the output of 5 == "5" ?
//? Output: true

//* What is the output of 5 === "5" ?
//? Output: false

//* What are Logical Operators?
//? Operators used to combine or invert conditions.
//? Examples: &&, ||, !

//* What does Logical AND (&&) do?
//? Returns true only if all conditions are true.

//* What does Logical OR (||) do?
//? Returns true if at least one condition is true.

//* What does Logical NOT (!) do?
//? Reverses the boolean value.

//* What is the output of true && false ?
//? Output: false

//* What is the output of true || false ?
//? Output: true

//* What is a Ternary Operator?
//? A shorthand version of if...else.
//? Syntax: condition ? trueValue : falseValue

//* Write the syntax of a Ternary Operator.
//? condition ? expression1 : expression2

//* When should you use a Ternary Operator?
//? For simple conditional checks where only two outcomes are possible.

//* What is a Control Statement?
//? A statement that controls the flow of program execution.
//? Examples: if-else, switch, loops

//* What is an If Statement?
//? Executes a block of code only if a condition is true.

//* What is an If-Else Statement?
//? Executes one block if the condition is true and another if it is false.

//* What is Nested If-Else?
//? An if-else statement inside another if-else statement.

//* What is an Else If Ladder?
//? Multiple conditions checked one after another.

//* What is a Switch Statement?
//? A control statement used to execute different code blocks based on different values.

//* What is the purpose of break in a Switch Statement?
//? It stops execution and exits the switch block.

//* What happens if break is omitted in a Switch Statement?
//? Execution continues into the next case (fall-through).

//* What is the purpose of the default case in a Switch Statement?
//? It runs when no case matches the expression.

//* What is a Loop?
//? A loop repeatedly executes a block of code until a condition becomes false.

//* What is a While Loop?
//? Executes code repeatedly while a condition remains true.

//* What is the syntax of a While Loop?
//? while(condition) {
//?   code
//? }

//* What is an Infinite Loop?
//? A loop that never ends because its condition always remains true.

//* What is a Do-While Loop?
//? Similar to a while loop, but executes at least once before checking the condition.

//* What is the difference between While and Do-While Loop?
//? While checks the condition first.
//? Do-While executes once before checking the condition.

//* What is a For Loop?
//? A loop used when the number of iterations is known.

//* What is the syntax of a For Loop?
//? for(initialization; condition; increment/decrement) {
//?   code
//? }

//* What are the three parts of a For Loop?
//? Initialization, Condition, and Update (Increment/Decrement).

//* When should you use a For Loop?
//? When the number of iterations is known beforehand.

//* How do you print numbers from 1 to 10 using a For Loop?
//? for(let i = 1; i <= 10; i++) {
//?   console.log(i);
//? }

//* How do you print even numbers from 1 to 100?
//? Use a loop and check if the number is divisible by 2.

//* How do you print odd numbers from 1 to 100?
//? Use a loop and check if the number is not divisible by 2.

//* How do you find the sum of numbers from 1 to 10?
//? Use a loop and keep adding values to a variable.

//* What is a Leap Year?
//? A year divisible by 4 but not by 100, unless it is also divisible by 400.

//* How do you check if a number is Even or Odd?
//? Use the modulus operator.
//? num % 2 === 0 means Even, otherwise Odd.

//* How do you check if a number is Positive, Negative, or Zero?
//? Use if-else conditions.

//* What is Operator Precedence?
//? The order in which operators are evaluated in an expression.

//* Which operator has higher precedence, && or || ?
//? && has higher precedence than ||.

//* What is Type Coercion in JavaScript?
//? Automatic conversion of one data type into another by JavaScript.

//* Give an example of Type Coercion.
//? "5" == 5 returns true because JavaScript converts the string to a number.

//* What is Short-Circuit Evaluation?
//? JavaScript stops evaluating an expression as soon as the result is determined.

//* What is the output of:
//? console.log(5 > 2 && 10 < 20);
//? Output: true

//* What is the output of:
//? console.log(!(5 > 2));
//? Output: false

//* What is the output of:
//? console.log(10 + "5");
//? Output: "105"

//* What is the output of:
//? console.log("10" - 5);
//? Output: 5

//* What is the output of:
//? console.log(typeof (5 + "5"));
//? Output: string

//* What is the output of:
//? console.log(typeof (5 - "5"));
//? Output: number
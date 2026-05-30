//! DATA TYPES IN JAVASCRIPT 
//? A data type defines the kind of value a variable can store.
//? It tells JavaScript how to store, process, and manipulate that data.
//? Examples of data types include String, Number, Boolean, Undefined, Null, BigInt, Symbol, Object, Array, and Function.

//* Premitive DataTypes
//? 1 - String: Represents a sequence if chracters enclosed in single or double quotes.
//todo - Example
// var myString = "This is String";
// console.log(myString);

//? 2 - Number: Represents numeric values, including integers and floating-point numbers.
//todo - Example
// var myFavNumber = 69;
// console.log(myFavNumber);

//? 3 - Boolean: Represents a logical enitity with two values: true or false
//todo - Example
// var isRaining = true;
// console.log(isRaining);

//? 4 - Undefined: Represents the absence of a value or an uninitialized variable.
//todo - Example
// var myName;
// console.log(myName);

//? 5 - Null: Represents the absence of a value. It is often used to explicity indicate that a variable or obejct property has no assigned value.
//todo - Example
// var userName = null;
// console.log(userName);

//? 6 - BigInt: BigInt is a primitive data type in JavaScript used to represent integers larger than the range supported by the Number type.
//todo - Example
// const numberLargeNumber = 1465454646546444654654n;
// console.log(numberLargeNumber);

//? 7 - Symbol: Symbol is a primitive data type in JavaScript that creates a unique and immutable value.
//todo - Example
// const id = Symbol("userId");
// console.log(id); // Symbol(userId)


//* Object DataTypes 
//? 1 - Array - Specific Topic in new files
//todo - Example

//? 2 - Object - Specific Topic in new files
//todo - Example 

//? 3 - Date - Specific Topic in new files
//todo - Example

//? 4 - Function - Specific Topic in new files
//todo - Example


//* What is the Purpose Of Typeof Operator in JavaScript?
// let userName = "Ahmed" 
// console.log(userName);
// console.log(typeof userName);

// let number = 69;
// console.log(number)
// console.log(typeof number);


//TODO TASK
//* Convert a string to a number?
//? We just need to add the '+' sign before the string 
//? Example:
// var myFavNum = "10";

// console.log(typeof myFavNum); //? Typeof String
// console.log(typeof +myFavNum); //? typeof Number
// console.log(typeof Number(myFavNum)); //? typeof Number


//* Convert a number to a string?
// var myNumber = 69;

// console.log(typeof myNumber); //? typeof Number
// console.log(typeof String(myNumber)); //? typeof String
// console.log(typeof (myNumber + "")); //? typeof String


//* Explain the concept of truthy and falsy values in JavaScript.
//? In JavaSCript, values are either considered "truthy" or falsy when evaluated in boolean context.

//* Truthy values are treated as a true when used in conditions. Example include:
//? true
//? Any non-empty string
//? any non-zero number
//? Arrays and object, even if they are not empty

//* Falsy values are treated as false in boolean contexts. Exmaple Include: 
//? false
//? 0 (zero)
//? ``, "", '', (an empty string)
//? null
//? undefined
//? NaN (Not a Number) 


// * ParseInt & parseFloat Section
//? parseInt and parseFLoat are both functions in JavaScript used for converting strings to numbers, but they have different use cases. 
//? Both functions will attempt to convert as much of the string as possible until and invalid character is encountered.

//* ParseInt: is used to parse a string and converrt it to an integer (whole number).
//? ParseInt is used for converting to integers and ignores anything after the decimal point.

// const myString = "42";
// const myNumber = parseInt(myString); // ? Output: 42
// console.log(myNumber);
// console.log(typeof myNumber);

// const myDecimalString = "42.5";
// const result = parseInt(myDecimalString); // ? Output: 42
// console.log(result);
// console.log(typeof result);

//todo Challenge 
// console.log(parseInt("123")); //? output 123
// console.log(parseInt("123", 10)); //? output 123 (explicitly specify base-10)
// console.log(parseInt("     123  ")); //? output 123 (Ignore all the White Space)
// console.log(parseInt("077")); //? It ignore 0 and the output is 77
// console.log(parseInt("1.9")) //? 1 is output .9 is ignored because of decimal 


//* ParseFloat: is used to parse a string and convert floating-point (decimal number).
//? parseFloat is used for converting to floating-point numbers, preserving the decimal part.

// const myString = "42";
// const myNumber = parseFloat(myString); // ? Output: 42
// console.log(myNumber);
// console.log(typeof myNumber);

// const myDecimalString = "42.5";
// const result = parseFloat(myDecimalString); // ? Output: 42.5
// console.log(result);
// console.log(typeof result);

//todo Challenge 
// console.log(parseFloat("123")); //? output 123
// console.log(parseFloat("123", 10)); //? output 123 (explicitly specify base-10)
// console.log(parseFloat("     123  ")); //? output 123 (Ignore all the White Space)
// console.log(parseFloat("077")); //? It ignore 0 and the output is 77
// console.log(parseFloat("1.9")) //? 1.9


//todo Challenge
// console.log(parseInt("&123")); //? NaN
// console.log(parseInt("-123")); //? -123
// console.log(parseInt("xyz")); //? NaN
// console.log(typeof NaN); //? Number
//? NaN stand for Not a Number 

//* What is the purpose of the NaN value in JavaScript?
//? NaN (Not-a-Number) represents a value that is not a valid number, usually returned when a mathematical operation fails or cannot produce a proper numeric result.
//? Also, to check whether a value is number or not we can use isNaN() function.

// let number = 1;
// console.log(isNaN(number)); //? output False - Because this is a number.

// let number = "fasfasf";
// console.log(isNaN(number)); //? output true - Because this isn't a number. 

// * Why NaN === NaN, why is it false?
// ? Because the reason behind the NaN is different from another sooo NaN is never equal to NaN.
//todo Exmple
let a = "abs";
let b = "%#%^";
console.log(isNaN(a)); //? Output True
console.log(isNaN(b)); //? output True
console.log(a === b); //? output false



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
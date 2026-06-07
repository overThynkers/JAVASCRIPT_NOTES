// ! ARRAYS IN JAVASCRIPT

// ==========================================================
// * What is an Array?
// ==========================================================

// ? A JavaScript Array is a special type of object used to store
// ? multiple values in a single variable. Arrays help organize
// ? and manage collections of related data efficiently.

// ? Each value stored inside an array is called an Element.

// Example:

// const fruits = ["Apple", "Banana", "Mango"];

// Apple, Banana, and Mango are elements of the array.

// ==========================================================
// * Array Index
// ==========================================================

// ? Every element in an array is assigned an index number.
// ? Array indexing starts from 0.

// Example:

// const colors = ["Red", "Blue", "Green"];

// Index:
// Red   => 0
// Blue  => 1
// Green => 2

// console.log(colors[0]); // Red
// console.log(colors[1]); // Blue
// console.log(colors[2]); // Green

// ==========================================================
// * Lower Boundary and Upper Boundary
// ==========================================================

// ? The first element of an array is called the Lower Boundary.
// ? The last element of an array is called the Upper Boundary.

// Example:

// const numbers = [10, 20, 30, 40, 50];

// // Lower Boundary
// console.log(numbers[0]); // 10

// // Upper Boundary
// console.log(numbers[numbers.length - 1]); // 50

// ==========================================================
// * Characteristics of Arrays
// ==========================================================

// ? Arrays can store multiple values in a single variable.

// ? Arrays can store different data types.

// ? Arrays are dynamic, meaning their size can grow or shrink
// ? during program execution.

// ? Arrays maintain the order of inserted elements.

// ? Arrays are zero-indexed.

// ==========================================================
// * Arrays Can Store Multiple Data Types
// ==========================================================

// Example:

// const mixedData = [
//     "Ali",
//     22,
//     true,
//     null,
//     { city: "Lahore" },
//     ["HTML", "CSS", "JavaScript"]
// ];

// console.log(mixedData);

// ==========================================================
// * Arrays are Objects
// ==========================================================

// ? In JavaScript, arrays are actually specialized objects.

// ? Arrays contain:
// ? 1. Numeric Keys (Indexes)
// ? 2. Length Property
// ? 3. Built-in Methods

// Example:

// const students = ["Ali", "Ahmed", "Haroon"];

// console.log(typeof students); // object

// ==========================================================
// * Length Property
// ==========================================================

// ? The length property returns the total number of elements
// ? present inside an array.

// Example:

// const cities = ["Lahore", "Karachi", "Islamabad"];

// console.log(cities.length); // 3

// ==========================================================
// * Iterable Object
// ==========================================================

// ? An iterable object is an object whose elements can be
// ? accessed one by one using iteration mechanisms such as
// ? the for...of loop.

// ? Arrays are iterable objects.

// Example:

// const languages = ["HTML", "CSS", "JavaScript"];

// for (const language of languages) {
//     console.log(language);
// }

// ==========================================================
// * Array-Like Object
// ==========================================================

// ? An Array-Like Object is an object that:
// ? 1. Has a length property
// ? 2. Uses numeric indexes
// ? 3. Looks like an array
// ? 4. But does not have array methods

// Example:

// const arrayLike = {
//     0: "HTML",
//     1: "CSS",
//     2: "JavaScript",
//     length: 3
// };

// console.log(arrayLike[0]); // HTML

// arrayLike.push("React"); // Error

// ==========================================================
// * Accessing Array Elements
// ==========================================================

// ? Elements can be accessed using square brackets and indexes.

// Example:

// const cars = ["BMW", "Audi", "Mercedes"];

// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);

// ==========================================================
// * Modifying Array Elements
// ==========================================================

// ? Array elements can be modified using their index number.

// Example:

// const subjects = ["Math", "Physics", "Chemistry"];

// subjects[1] = "Biology";

// console.log(subjects);

// Output:
// ["Math", "Biology", "Chemistry"]

// ==========================================================
// * Nested Arrays
// ==========================================================

// ? Arrays can contain other arrays.

// Example:

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(matrix[1][2]); // 6

// ==========================================================
// * Empty Array
// ==========================================================

// ? An array can be created without any elements.

// Example:

// const users = [];

// console.log(users.length); // 0

// ==========================================================
// * Creating Arrays
// ==========================================================

// ? Method 1: Array Literal (Recommended)

// const fruitsArray = ["Apple", "Banana", "Orange"];

// // ? Method 2: Array Constructor

// const nums = new Array(10, 20, 30);

// console.log(nums);

// ==========================================================
// * Advantages of Arrays
// ==========================================================

// ? Store multiple values in a single variable.

// ? Easy data management.

// ? Supports loops and iteration.

// ? Provides many built-in methods.

// ? Useful for handling collections of data.

// ==========================================================
// * Common Real-World Examples of Arrays
// ==========================================================

// ? List of users
// ? Product collections
// ? Shopping carts
// ? Blog posts
// ? Messages
// ? Notifications
// ? Categories
// ? Images in a gallery

// Example:

// const products = [
//     "Laptop",
//     "Mobile",
//     "Keyboard",
//     "Mouse"
// ];

// ==========================================================
// * Summary
// ==========================================================

// ? Arrays are special objects used to store multiple values.

// ? Arrays are zero-indexed.

// ? Arrays are iterable.

// ? Arrays have a length property.

// ? Arrays can store any data type.

// ? Arrays are dynamic and flexible.

// ? Arrays are one of the most commonly used data structures
// ? in JavaScript development.


// * ECMASCRIPT 2015 (ES6):
// ? Also introduced new .at() method in arrays which helps to index from last element too easily.
// const myArr = ["hi", "hello", "lelo", "pelo", "khelo", "nelo"];
// console.log(myArr[0]); // output h1
// console.log(myArr.at(-1)); // output nelo


// * Typeof array 
// console.log(typeof []); // object


// ==========================================================
// * Accessing Elements
// ==========================================================
// ? Accessing Elements: Array Elements are accessed using zero-based indices.
// let fruits = ["Apple", "orange", "banana", "grapes", "Dates"];
// console.log(fruits[1]);


// ==========================================================
// * Modifying Elements
// ==========================================================
// ? Modifying Elements: You can modify array elements by assigning new values to specific indices
// let fruits = ["Apple", "orange", "banana", "grapes", "Dates"];
// fruits[2] = "Mango";
// console.log(fruits);


// ==========================================================
// * Array Traversal / Iterating over arrays
// ==========================================================
// let fruits = ["Apple", "orange", "banana", "grapes", "Dates"];

// * for of loop, also known as iterable
// ?: the for... of loop is used to iterate over the values of an iterable object, such as arrays, strings, or other iterable objects
// for(let items of fruits) {
//     console.log(items);
// }

// for(let items = 0; items < fruits.length; items++) {
//     console.log(fruits[items]);
// }

// * for in loop 
// ? for... in loop: The for... in loop is used to iterate over the properties (including indices) of an object.
// for(let index in fruits) {
//     console.log(index);
// } 

// * forEach Method 
// ? The arr.forEach() method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the element of the given array.

//* Syntax
// Array.forEach(function functionName (currentValue, index, array) {
//     // Your Logic Here
// }, thisValue);
// * Breakdown of each part:
// ? array: the array which the foreach method is called.
// ? callback: A function that will be called once for each element in the array.
// ? currentValue: the current element being processed in the array.
// ? index(optional): The index of the current element being processed.
// ? array(optional): The array forEach was called upon.
// ? thisValue(optional): A value to use this when executing the callback function

// let myForEachArr =fruits.forEach((currentElement, index, array) => {
//     return `${currentElement}, ${index}, ${array}`;
// }); // ? For Each Never Returns any type of values

// console.log(myForEachArr)
// * Map Function
// ? map() creates a new array from calling a function for every array element. map() doed not change the original array


// let myMapArr =fruits.map((currentElement, index, array) => {
//     return `${currentElement}, ${index}, ${array}`;
// }); // ? map() method return a new array 
// console.log(myMapArr); 



//todo Challenge 
// let number = [10, 4, 5, 8, 7, 16, 72, 462, 154];
// number.forEach(curEL => {
//     console.log(curEL * 2);
// });

// * Key Differences Between ForEach and map method 
// ? ForEach: it doesn't return a value. The forEach method is used for iterating over the lements of an array and performing a side effect, such as modifying the array or performing a task for each element. 

// ? map: It returns a new array containing the results of applying a function to each element in the original rray. The original rray remains unchanged.

// * Chaining 
// ? forEach: It doesn't return a value, so it cannot be directly chained with array methods.
// ? map: Since it returns a new array, you can chain other array methods after using map

// * Use Case: 
// ? forEach: Used when you want to iterate over the array elements and perform an action on each element, but you don't need a new array.
// ? map: used when you want to create a new array based on the transformation of each element in the original array.


// ==========================================================
// * HOW TO INSERT, ADD, REPLACE AND DELETE ELEMENTS IN ARRAY (CRUD)
// ==========================================================
// ? 1 - push(): Method that adds one or more elements to the end of an array.
// let fruits = ["Apple", "orange", "banana", "grapes", "Dates"];
// console.log(fruits);
// console.log(fruits.push("Mango"));
// console.log(fruits);
// ? Push method always Returns the new length of an array

// ? 2 - pop(): Method that removes the last element fron an array.
// console.log(fruits);
// console.log(fruits.pop())
// console.log(fruits);
// ? Pop Method always return the element which they remove from array

// ? 3 - unshift(): Method that adds one or more elements to the beginning of an array.
// console.log(fruits);
// console.log(fruits.unshift("Mango"));
// console.log(fruits);
// ? Push method always Returns the new length of an array

// ? 4 - shift(): Method that removes the first element from an array.
// console.log(fruits);
// console.log(fruits.shift());
// console.log(fruits);
// ? Pop Method always return the element which they remove from array

// ==========================================================
// * WHAT IF, WE WANT TO ADD OR REMOVE ANYWHERE IN AN ELEMENTS
// ==========================================================
// let fruits = ["Apple", "orange", "banana", "grapes", "Dates"];

// ? The splice() method of Array instances changes the contents of an array by removing or replacing existing elements add/or adding new elements in place
// * Syntax 
// fruits.splice(startsWith, deleteCount, addOns); // ? It's Typeof Object
// ? It return always an empty array
// console.log(typeof fruits.splice());


// ==========================================================
// * SEARCH IN AN ARRAY
// ==========================================================
// ? For Search we have - indexOf, lastIndexOf & includes
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 6, 9, 10];

// ? 1 - indexOf Method: The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// * Syntax
// ? indexOf(searchElement);
// ? indexOf(searchElement, fromIndex);
// console.log(number.indexOf("4"));

// ? 2 - lastIndexOf Method: The lastIndexOf() method of array instances returns last index at which a given element can be found in the array. or -1 it it is present. The array is searched backwards, starting at fromIndex.
// * Syntax
// ? lastIndexOf(searchElement);
// ? lastIndexOf(searchElement, fromIndex);
// console.log(number.indexOf(6));
// console.log(number.lastIndexOf(6));

// ? 3 - Includes() Method: The includes method checks whether an array includes a certain element, returning true or false.
// * Syntax
// ? includes(searchElement);
// ? includes(searchElement, fromIndex);
// console.log(number.includes(6));


// ==========================================================
// * CHALLENGE TIME
// ==========================================================
// ? 1 - Add Dec at the end of an array?
// ? 2 - What is the return value of splice method?
// ? 3 - Update march to March (update)?
// ? 4 - Delete Jun From an array 
// const months = ["jan", "march", "april", "June", "July"];
// months.splice(months.length, 0, "Dec");
// // ? Splice method return an empty array
// months.splice(months.indexOf("march"), 1, "March");
// months.splice(months.indexOf("June"), 1);
// console.log(months);


// ==========================================================
// * SEARCH + FILTER IN ARRAY
// ==========================================================
// const number = [1, 2, 3, 4, 5, 6, 7, 4, 6, 8, 9, 10];


// ? 1 - find Method: The find method is used to find the first element in an array that satisfies a provided testing function. It returns the first matching element or undefined if no element is found.
// * syntax
// const result = number.find(curEl => {
//     return curEl > 6;
// });
// console.log(result);

// ? 2 - findIndex Method: The findIndex() method of typedarray instances returns the index of the first element in a typed array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned .
// * syntax
// const result = number.findIndex(curEl => {
//     return curEl > 4;
// });
// console.log(result);

// ? 3 - filter Method: The filter method creates a new array with all elements that pass the best implemented by the provided function.
// * syntax:
// ? filter(calbackFn)
// ? filter(callbackfn, thisArg)
// const result = number.filter(curEl => {
//     return curEl > 4;
// });
// console.log(result);


// ==========================================================
// * CHALLENGE TIME
// ==========================================================
// let value = 6;
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9]
// let result = number.filter(curEl => {
//     return curEl !== value;
// });
// console.log(result)


// * Given an array of products where each product has a name and a price, write a function that uses the filter method to return an array containing only the products with a price less than or equal to 500
// const products = [
//     {name: "Laptop", price: 1500},
//     {name: "Phone", price: 800},
//     {name: "Tablet", price: 300},
//     {name: "Smartwatch", price: 150},
// ];

// let results = products.filter(curProd => {
//     return curProd.price <= 500;
// });
// console.log(results);


// ==========================================================
// * HOW TO SORT AND COMPARE AN ARRAY
// ==========================================================
const fruits = ["banana", "Apple", "orange", "Mango"];
// ? How to Sort and Compare an Array 
// ? Sorting an Array: The sort method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings.
// * Syntax for Accessending order
// fruits.sort();
// console.log(fruits)

// * Syntax for Asscending Order
// const sortedData = fruits.sort((a, b) => {
//     if(a>b) return 1; // ? Swtich the order
//     if(b>a) return -1; // ? Keep the order
// });
// console.log(sortedData);

// * Syntax for Descending Order
// const sortedData = fruits.sort((a, b) => {
//     if(a>b) return -1; // ? Swtich the order
//     if(b>a) return 1; // ? Keep the order
// });
// console.log(sortedData);


// ==========================================================
// * CHALLENGE TIME
// ==========================================================
// * Use Map to square each number and create a new array
// const numbers = [1, 2, 3, 4, 5];
// let result = numbers.map(curEl => curEl * curEl);
// console.log(result);

// * Using map method wrtie a function takes an array of strings and returns a new array where each string is capitalized.
// const words = ["apple", "banana", "cherry", "date"];
// const results = words.map(curEl => curEl.toUpperCase());
// console.log(results);

// * Using the map method, write a function that takes an array numbers and returns a new array where each number is squared, but only if it's an eve number 
// const numbers = [1, 2, 3, 4, 5];
// let results = numbers.map(curElem => {
//     if(curElem % 2 === 0) return curElem * curElem;
// }).filter(curEl => {
//     if(curEl != undefined) return curEl
// });
// console.log(results);


// ==========================================================
// * REDUCE METHOD 
// ==========================================================
// ? The reduce method in JavaScript is used to accumulate or reduce an array to a single value. It iterates over the elements of an array and applies a callback function to each element, updating an accumulator value with the result. The reduce method takes a callback function as its first argument and an optional initial value for the accumulator as the second argument.
// * Syntax 
// ? array.reduce(function callback(accumulator, currentValue, index, array) =>{
// ? }, initialValue)
// const productsPrices = [100, 400, 500, 600, 700, 1000];
// const total = productsPrices.reduce((accum, curEl) => {
//     console.log(accum)
//     return accum + curEl;
// });
// console.log(total);

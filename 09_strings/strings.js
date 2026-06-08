//! ==========================================================
//! STRINGS IN JAVASCRIPT 
//! ==========================================================
// ? String & It's properties 
// ? String Search Methods 
// ? Extracting String Characters 
// ? Escape Characters 
// ? Extracting String Parts
// ? Replacing String Content
// ? Other Useful Methods

// ? Strings created with single or doble quotes and back ticks Works the same.

// * String Properties
// ? Length: Property that returns the length of the string (number of letters). It's Always Start With a 1 and they also counts the space
// const str = "Hello overThynkers";
// console.log(str.length);


// * ESCAPE CHARACTERS: 
// ? In JavaScript, the backslash \ is used as an escape character. It allows you to include special characters in a string.
// ? Code           Result              Description
// ? \'             '                   Single Quote
// ? \"             "                   Double Quote
// ? \\             \                   Backslash
// ? \n                                 Add a Line vbreak
// todo Example
// let text = "My name is "overThynker" & I am a Full Stack Web developer";
// let text = 'My name is "overThynker" & I am a Full Stack Web developer';
// let text = "My name is 'overThynker' & I am a Full Stack Web developer";
// let text = "My name is 'overThynker' & I am a \"Full Stack\" Web developer";


// console.log(text);


//! ==========================================================
//! STRING SEARCH METHODS
//! ==========================================================

// ? 2: String Search Methods 
// ? a: indexOf(): The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
// * Syntax 
// indexOF(searchString, position)

// let str = "hello overThynkers";
// console.log(str.indexOf("overThynkers")); 

// ? The Array.from() method returns an array from any object with a length property. like strings
// let str = "hello overThynkers";
// let strArr = Array.from(str);
// // console.log(strArr);
// strArr.forEach(curEl => {
//     console.log(curEl);
// });


// ? lastIndexOf(): method returns the index of the last occurrence of a specified text in a string
// * Syntax
// ? lastIndexOf(searchString)
// ? lastIndexOf(searchString, position)
// let text = "Hello JavaScript, welcome to our world best JavaScript notes";
// let index = text.lastIndexOf("javascript");
// console.log(index);


// ? search(): method searches a string for a string (or a regular expression) and returns the position of the match.Returns the index number where the first match is found. Returns -1 if no match is found.
// let text = "Hello JavaScript, welcome to our world best JavaScript notes";
// console.log(text.search(/javascript/i)); // ? This return  first matching word index number but the benefit is we can remove the case sansitivity. using regular expressions

// * Important tips
// ? The search() method cannot take a second start position argument.
// ? The indexOf() method cannot take powerful search values (regular expressions).
// ? they accept the same arguments (parameters), and return the same value.


// ? match() : returns an array of the matched values or null if no match is found.
// ? the js converts the normal text into regular expression text.match(/JavaScript/); without the g flag.
// let text = "Hello JavaScript, welcome to our world best JavaScript notes";
// let result = text.match(/JavaScript/g);
// console.log(result);


// ? matchAll() : Returns an iterator of all matches, providing detailed information about each match. Returns an empty iterator if no match is found.
// ? the js converts the normal text into regular expression text.match(/JavaScript/); with the g flag.
// let text = "Hello JavaScript, welcome to our world best JavaScript notes";
// let results = text.matchAll("JavaScript");
// for(let item of results) {
//     console.log(item)
// }
// console.log(...results);


// ? includes(): returns true if the string contains the specified value, and false otherwise.
// let text = "Hello JavaScript, welcome to our world best JavaScript notes";
// let result = text.includes("JavaScript");
// console.log(result);


// ? startsWtih(): method returns true if a string begins with a specified value.Otherwise it returns false:
// let text = "Hello JavaScript, welcome to our world best JavaScript notes";
// // let result = text.startsWith("Hello");
// let result = text.startsWith("JavaScript", 6);
// console.log(result);


// ? EndsWith(): The endsWith() method returns true if a string ends with a specified value. Oterwise it returns false:
// let text = "Hello JavaScript, welcome to our world best JavaScript notes";
// // let result = text.endsWith("notes");
// let result = text.endsWith("notes", 50);
// // let result = text.startsWith("JavaScript", 6);
// console.log(result);



//* ==========================================================
//* EXTRACTING STRING PARTS:
//* ==========================================================
// ? a: slice(): extracts a part of a string and returns the extracted part in a new string
// ? 1- JavaScript counts position from zero.
// ? 2- slice() extracts up to but not including indexEnd.
// * Syntax
// ? slice(start, end);

// let str = "Hello overThynkers";
// let result = str.slice(6);
// let result = str.slice(0, 5);
// console.log(result)


// ? substring: Extracts a portion of the string based on starting and eding indices.
// ? 1- JavaScript counts position from zero.
// ? 2- substring() extracts up to but not including indexEnd.
// let str = "Hello overThynkers";
// let result = str.substring(6);
// let result = str.substring(0, 5);
// console.log(result)
// ? substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().
// let str = "Hello overThynkers";
// let result = str.slice(-7);
// console.log(result)



// * What is replace() method?
// ? The replace() method is used to replace the first occurrence
// ? of a specified value in a string with another value.

// ? Syntax:
// string.replace(searchValue, newValue);

// ? Example:
// let text = "I love JavaScript";
// let result = text.replace("JavaScript", "Python");

// console.log(result);
// Output: I love Python


// * What is replaceAll() method?
// ? The replaceAll() method is used to replace all occurrences
// ? of a specified value in a string with another value.

// ? Syntax:
// string.replaceAll(searchValue, newValue);

// ? Example:
// let text2 = "apple apple apple";
// let result2 = text2.replaceAll("apple", "mango");

// console.log(result2);
// Output: mango mango mango


//* ==========================================================
//* EXTRACTING STRING CHARACTERS:
//* ==========================================================
// ? There are 3 methods for extracting string characters:
// * The charAt(position) Method
// * The charCodeAt(position) Method 
// * The at(position) Method

// ? charAt(): method returns the character at a specified index (position) in a string
// let text = "Hello JavaScript, welcome to our world best JavaScript notes";
// let result = text.charAt(6);
// console.log(result); 

// ? charCodeAt(): The charCodeAt() method returns the code of the character at a specified index in a string. The method returns a UTF-16 code (an integer between 0 and 65535).
// let text = "Hello JavaScript, welcome to our world best JavaScript notes";
// let result = text.charCodeAt(6);
// console.log(result); 

// ? The at() method returns the character at a specified index (position) in a string. The at() method returns the same as carAt().
// let text = "Hello JavaScript, welcome to our world best JavaScript notes";
// let result = text.at(-1);
// console.log(result); 


//* ==========================================================
//* OTHER USEFUL METHODS:
//* ==========================================================
// ? ToUpperCase and toLowerCase: Converts the string to uppercase or lowercase.
// const str = "JavaScript"
// console.log("JavaScript");
// console.log(str.toUpperCase());

// ? trim(): Remove whitespaces from both ends of the strings.
// const str = "             Hello, overThynkers                  ";
// console.log(str.trim());

// ? split: splits the string into an array of substrings based on a specified delimiter.
// const str = "apple, orange, banana";
// let strArr = str.split(',').reverse().join();
// console.log(strArr);



//^ ==========================================================
//^ CHALLENGE TIME:
//^ ==========================================================

// ~ Challenge 1: Write a javascript function that prints the letters 'a' through 'z' in the console. You should use a loop to iterate through the letters an print each one on a new line.
// for(let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++) {
//     console.log(String.fromCharCode(i));
// }

// ~ Write a function to count the number of vowels in a string
let str = "Hello everyone. I am currently learning programming and practicing by creating simple applications and solving coding challenges every day.";
// let vowelCounts = 0;
// Array.from(str).forEach(curEl => {
//     if(/[aeiou]/.test(curEl)) {
//         vowelCounts++;        
//     }
// });
// console.log(vowelCounts);

// ~ Write a function isPagram that takes a string as input and returns true if the string is a pangram (For You Homework)

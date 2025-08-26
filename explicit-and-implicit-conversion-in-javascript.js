/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

/*
let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = age + 5;
console.log("Total Age: " + totalAge); 
*/


/*
 Task 1: Debug the code
*/

// Original code: let result = "5" - 2;
// This works because "5" is implicitly converted to a number 3.
// No bug here, but we can make it explicit for clarity:
let result = Number("5") - 2;  
console.log("The result is: " + result); // The result is: 3


// Original code: let isValid = Boolean("false");
// Any non-empty string (even "false") is truthy  becomes true.//(Any non-empty string: "hello", "false", "0" → all are truthy.Any non-zero number: 42, -3.14 → truthy.
//Any object or array, even empty: {}, [] → truthy.true itself → obviously truthy. )
// FIX: explicitly check the string content
let isValid = ("false" === "true"); // false, since the string is "false"
if (isValid) {
    console.log("This is valid!");
} else {
    console.log("This is NOT valid!"); 
}
// Explanation: Boolean("false") is true, but comparing string to "true" avoids that bug.


// Original code: let age = "25"; let totalAge = age + 5;
// PROBLEM: "+" with a string triggers string concatenation → "255" instead of 30
// FIX: convert age to Number before adding
let age = "25";
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge); // Total Age: 30

/*
 Task 2: Examples of Type Conversion
*/

// Implicit type conversion example:
let implicitExample = "10" * 2; // JS converts "10" to number automatically
console.log("Implicit Example (\"10\" * 2):", implicitExample); // 20
console.log("Type of implicitExample:", typeof implicitExample); // number

// Explicit type conversion example with edge case (null)
let explicitExample = String(null); 
console.log("Explicit Example String(null):", explicitExample); // "null"
console.log("Type of explicitExample:", typeof explicitExample); // string

// Edge case: NaN
let edgeCase = Number("hello"); // "hello" cannot convert → NaN
console.log("Edge Case Number(\"hello\"):", edgeCase); // NaN
console.log("Is NaN a number?", typeof edgeCase); // "number" 


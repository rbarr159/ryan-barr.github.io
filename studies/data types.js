/**
 * DATA TYPES
 * 0. In javascript, there are a number of different data types that are used to represent...well... different types of data.
 * a name, for example, would likely be represented as a STRING - a grouping of characters--whereas some recorded value, 
 * say, a temperature, would probably be more easily represented as a number. 
 * The other data types are boolean, array, object, funciton, undefined, null, NaN, and (+/-) infinity.
 * 
 * 1. Data types give javascript a bit of context about how it should handle the data in different scenarios.
 * for example, if you 'tell' javascript two number variables with a + between them, it evaluates that as a mathematical sum of the two numbers.
 * if you do the same, however, with two strings, js will interpret that as a concatenation of the two strings (i.e. 'string1string2')
 * 
 * 2. Data Types can be split into two categories--simple and complex
 * Simple data types more or less represent a single value-- one string, one number, undefined, etc.
 * Complex data, like arrays and objects, are pieces of data that can comprise multiple other pieces of data, both simple and complex, like arrays
 */

// 1. Number //
// Numbers represent numerical values and can be used with mathematical operators.
var num1 = 5;
var num2 = 9;
console.log(num1 * num2); // will print 45

// 2. String //
// Strings represent text data. Note that you can have a string that comprises number characters (or any other valur normally representing a specific data type), 
// and it will be treated as text, NOT the standard contextual value of the data.
var stringA = 'Ryan' 
var stringB = 'Test'
var stringC = '5461'
var stringD = 'undefined'
var stringE = 'null'
console.log(stringA + stringB + stringC + stringD + stringE); // this will return a string of 'RyanTest5461undefinednull'

// 3. Boolean //
// Boolean values are the result of a boolean, or logical expression. Boolean values are either true or false.

var bool = 1 > 2; // bool resolves to a value of FALSE, as the expression is false

// Logical expressions (and their resolution to boolean values) are incredibly important in programming because they allow for the use of conditional statements
// e.g. if expression is true, do X, otherwise, do Y 
// for example,
var test = 7
if (test > 9) { // 7 is not greater than 9, so this will resolve to false
    console.log('logical test resolved to boolean true') // because we passed false into the if statement, this code is skipped
} else {
    console.log('logical test resolved to boolean false') // because the first condition was skipped, this code block is executed
};


// 4. Array //
// an array is a compelx data type--a zero-indexed list of values, like below

var array = [500, 600, 700, 800, 900] // the indices and correspinding values for this array are: (0, 500), (1, 600), (2, 700), (3, 800), (4, 900) 

// arrays often represent ordered LISTS of values or objects

//array elements can be accessed by calling the array name followed by the index # in brackets
// for example:
console.log(array[0] + array[2]); // this resolves to console.log(500 + 700) and would print 1200 to the console

//arrays have an inherent .length property that will resolve to the nuymber of elements in the array, which is also equal to the index of the 
// final element plus one added for the first/0 indexed element
// therefore, the last element of any array is always at the index of [.length - 1]

console.log(array[array.length - 1]); // resolves to array[5 - 1] or array[4], and print the final element, 900

//there are a number of ways to manipulate arrays, such as .push, .pop, .shift, .unshift, etc

array.push(1000)// this will add the value 1000 onto the end of the array
array.pop(); // this will remove the last (or [.length - 1]th) element from the array
array.shift(); // this will remove the first element (array[0]) from the array
array.unshift(5); // this will add 5 to the beginning of the array

// these are just a few of the numerous methods available to manipulate arrays

// 5. Object //
// objects are another complex data type
// wheras an array is an indexed list, aan object is an UNORDERED collection of key-value pairs, like below:
let testObj = {
    key1: value1, 
    key2: value2, 
    key3: value3 };

    // because objects are NOT ordered, they are not used to represent lists, but to represent and model things in the real world.
    // for example, an object could represent a car, with the KV pairs describing some common attributes:
    let car = {
        make: 'Ford',
        model: 'Taurus',
        year: '1999',
        KBB: 2150,
        miles: 90000
    }

    // there are two ways to access object properties:
   
    console.log(car.make) // dot access method (obj.property) - this should print 'Ford' to the console

    console.log(car['model']) // bracket access method (obj['property'])

    // note that the DOT method will search for a literal property on the object, and cannot be used with any dynamic value/variable, as below:
    let tstProp = 'make';
    console.log(car.tstProp); // this wil print undefined, as there is no testProp property in the car object
    // one must use the bracket access method (without quotes!!!) to access object values when using a variable/non-literal property
    console.log(car[tstProp]); // this will print 'Ford' to the console

    // Similar to Arrays, there are a number of ways to modify objects
    
    // a new value can be assigned to a property using either the bracket or dot method

    car.make = 'Dodge';     // car.make now resolves to 'Dodge'
    car['model'] = 'Charger'     // car['model'] now resolves to 'Charger'
    
    // Object.assign(target, source) will copy all key value pairs from the source object into the target object
    let sourceObj = {add: newVal1, alsoAdd: newVal2};
    Object.assign(car, sourceObj);          // the two pairs from sourceObj are now copided into the car object


    // Object.keys(obj) will return an array of the keys in obj

    let carKeys = Object.keys(car); // carKeys resolves to ['make', 'model', 'year', 'KBB', 'miles']


// 6. Function //
// functions are responsible for a lot of the "heavy lifting" in javascript
// functions allow programmers to condense repetitive code blocks into a high-level, more abstract process that will run certain code based on input parameters
// to declare a function, use the keyword 'function', followed 


// 7. undefined //
// undefined is the default value assigned to variables that have been declared but not yet initialized or assigned

var undVar; // variable declared with no value assigned

console.log(undVar); //this will print undefined to the console

// undefined resolves to falsy in Boolean context

if (undVar) {
    console.log('truthy')
} else {
     console.log('falsy')   // falsy will print to the console because undefined is a falsy value, so the "if" statement is skipped

}                           

// 8. null //
// null is a value that represents the absence of an object value



// null resolves to falsy in Boolean context

if (undVar) {
    console.log(nullVar)
} else {
     console.log(nullVar)   // falsy will print to the console because null is a falsy value, so the "if" statement is skipped

}              

// 9. NaN //
// NaN is a value that stands for "Not a Number"

// There are five types of operations that will return NaN:

// 1 - if a number can not be parsed 
// ??????????????????????????????????
// 2 - if a mathematic operation returns a nonreal/complex number 
console.log(Math.sqrt(-1));
// 3 - if an operand in a mathematical operation is NaN
console.log(7 * Math.sqrt(-1)); 
// 4 - if a mathematical expression is an indeterminate form
console.log(0 / 0);
// 5 - if a mathematical operation involves a string (except for +, which is treated as concatenation with strings)
console.log('test' * 5);


// 10. Infinity //
// Infinity is a global property that resolves to a numeric value that is greater than all numbers
// it is also equal to the property Number.POSITIVE_INFINITY


// 11. Simple v Complex Data Types //

// 12. Copy v Reference values //

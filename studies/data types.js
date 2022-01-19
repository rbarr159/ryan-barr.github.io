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
// functions are responsible for a lot of "heavy lifting" in javascript
// functions allow programmers to condense repetitive code blocks into a high-level, more abstract process that will run certain code based on input parameters
// the main components of a funciton are the name, parameters, function body, and return statement
// note that a function does not need to have parameters or returns

//Ex. - a funciton w/ parameters & returns:

function addFive(n) { // funciton name = addFive, parameter = n
    return n + 5;     // this function will return a value equal to the input n plus 5
}                     // everything within the curly braces are referred to as the function body
var tenPlusFive = addFive(10);
console.log(tenPlusFive) // this will return 15

//Ex. - a funciton w/o parameters & returns:

function sayHi() {
    console.log('hello world!')
}

sayHi(); //invoking or calling this funciton will print 'hello world!' to the console

// to declare a function, use the keyword 'function', followed by the function definition, as below:
function testPrint(z){ // in this example, z is a parameter of the funciton--which represents an argument to be passed in when the funciton is called
    console.log(z)
} 
// functions can also be written as function expressions--which is a function that is part of a larger expression, like being assigned to a variable
// for example,
var testFunc = function(x) {
    console.log(x);
}
/*
    a KEY DIFFERENCE between function expressions and function declarations comes in HOISTING
    a function DECLARATION, much like a declared variable, is hoisted, allowing the functionto be called in a program before the line in which it is declared
    a function EXPRESSION will NOT be hoisted--only the associated variable will be hoisted.
*/

// functions are considered "first-class" objects - as they can be used in place of any data type.

// a function can be stored in a variable (as in the expression example above), or in an object or array, shown below

    let arrFn = [0, 'string', function() {console.log('hip hip array')}]

// accessing the value arrFn[2] allows us to call the funciton

arrFn[2](); // prints 'hip hip array'

// a funciton can also be passed in as an argument to another funciton, shown here:
function arrayTest(arr, fn) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {                       // The arrayTest fn will take in an array and a function, and will call the input funciton for each element of the array
            output.push(arr[i])                 // if calling the function on an array element resolves to true, that element will be pushed into an output array
        }
    }
    return output;                                     
}
let array = [0, 1, 2, 0, -4, 9];
console.log(arrayTest(array, function(num) {
  return num > 0;
}))


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

// when put into the typeof operator, typeof null returns object
console.log(typeof null); //returns 'object'

// with the loose euqality operator, 
console.log(null == undefined ); // returns true

// but with strict equality
console.log(null === undefined ); // returns false


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
// 2 - if a mathematic operation returns a nonreal/complex number 
console.log(Math.sqrt(-1));
// 3 - if an operand in a mathematical operation is NaN
console.log(7 * Math.sqrt(-1)); 
// 4 - if a mathematical expression is an indeterminate form
console.log(0 / 0);
// 5 - if a mathematical operation involves a string (except for +, which is treated as concatenation with strings)
console.log('test' * 5);


// 10. Infinity and -Infinity//

// Infinity is a global property that resolves to a numeric value that is GREATER than all numbers, that is:
// Infinity > x for all x EXCEPT x = Infinity
// Negative Infinity is a global property that resolves to a numeric value that is LESS than all numbers, that is:
// x > -Infinity for all x EXCEPT x = -Infinity

// some mathematical properties of positive infinity:

console.log(10 * Infinity) // = Infinity --- any positive value * infinity = infinity
console.log(-3 * Infinity) // = negative infinity --- any negative value * Infinity = negative infinity
console.log(3 / Infinity) // = +0 any number / positive infinity is positive signed zero
console.log(-3 / Infinity) // = -0 any number / positive infinity is negative signed zero (signed zero important for rounding and one-sided limits)
console.log(NaN * Infinity) // = NaN

// These properties are the same for - Infinity, with all real number values multiplied by (-1) (aka signs switched)

// Infinity is also equal to the property Number.POSITIVE_INFINITY, and -Infinity is equal to Number.NEGATIVE_INFINITY



// 11. Simple/Primitive v Complex Data Types //

// in js, complex data types can contain other data types

let complexAr = ['string', 45, null, undefined, Infinity, [2, 3, 4, 5], {key1: 'val1'}, function() {console.log('I\'m complex')}]
let compObj = {
    array: complexAr,
    nestedObj: {how: 'did I get here'}
}
// conversely, simple data types cannot contain other data types, simple or complex-- they represent only a single value

//strings, numbers, boolean, undefined, null all represent single data points

// 12. Copy v Reference values //
// in js, assigned or initialized variables can be thought of as pointing to a value to which they resolve
let a = 20; // from here forward, a will resolve to the numerical value 20
let b = 'more peas' // the same is the case for this--b will resolve to the string 'more peas'
let c = a; // here, c points to a, which, as mentioned, resolves to 20--c therefore also resolves to 20
// the example in the line above assigns the value in a very specific way--that is, the value of a is read and that value is COPIED to c
// in essence, a and c are not pointing to the "same" number 20--they each have their own 20. This can be illustrated by altering one of the two variables

c += 5;
console.log(c) // this will print 25
console.log(a) // this will print 20

// because c had its 'own copy' of the value, we can alter the c number without changing the value of a
// this is the case for all simple data types in js

// by contrast, complex data (objects and arrays) point to a specific index or address in memory, rather than pointing directly to a value
let values = [1, 5, 3, 8, 7, 6, 0]; // creating an array or object points our variable to a reference address where the array values exist
let newArr = values;        // because values points to an address where the data exists, this expression will point newArr to the address, not the values stored there

// this is significant because newArr does NOT have its 'own copy' of the data like our simple example did--so any changes to newArr will also be changes to the array that 
// the values variable points to--they're the SAME ARRAY!
// for example,
newArr.push('smol puppy')
console.log(values) // this prints  [1, 5, 3, 8, 7, 6, 0, 'smol puppy'] because there is only one array--no copies.

// if we re-assign the newArr variable, however, it will not change what our values variable resolves to, as we will be pointing newArr to a new address

newArr = [4, 3, 2, 1, 'blast off'];
console.log(values);




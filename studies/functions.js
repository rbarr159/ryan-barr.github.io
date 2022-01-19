/**
 *FUNCTIONS
 * 0. funcitons are blocks of code that perform specific...well...functions, on command
 *
 * 1. functions allow programmers to condense repetitive code blocks into a high-level, more abstract process that will run certain code based on input parameters
 * 
 * 2. the main components of a funciton are the name, parameters (optional), function body, and return statement (optional)
 * 
 * 3. there are three ways to create a funciton: a function declaration (named function), a function expression (anonymous function), and an arrow function, 
 * or lambda function - they differ in syntax and are treated differently when it comes to hoisting. 
 * 
 */
  
 

// 1. to utilize a function, much like a variable, the funciton must first be declared.

function sayHello() {
    console.log('wuzzam???')            // this function now exists as a variable in the global context
}

// now to use the function, we must call or invoke the function, by typeing the funciton name followed by ();
sayHello(); // this will cause the code in the function body to be executed, so 'wuzzam???' will print to the console


// 2. Now let's look at a more complex example--below is a function with that takes in an input value, called a parameter

function addFive(n) { // funciton name = addFive, parameter = n
    return n + 5;     // this function will return a value equal to the input n plus 5
}                     // everything within the curly braces are referred to as the function body
var tenPlusFive = addFive(10);          // note that 10 here is referred to as an ARGUMENT, not a parameter. parameters are like a variable name when we're defining the function--arguments are the values passed in to take the place of parameters whe n our funciton is invoked
console.log(tenPlusFive) // this will return 15

// 3. The syntax for a named function is as follows:
function fnName(param1) {
    //this is the function body
    return param1 + 1 // this is the return statement
}
//to call this function, we simply
fnName(5); //this will resolve to 6

// 4. we can also assign a function to a variable using a funciton expression with the following syntax:
var funkExp = function(z) {
    console.log(z);
}

// now to invoke this funciton, we simple call the variablename with ()
funkExp(5) // this will print 5 to the console

// 5. as discussed, one advantage of funcitons is that they can run a preset block of code with certain parameters that can be changed, and the output value can be saved for use in subsequent code
//inputs, or parameters, are specified within the parentheses, seen below:

var arrayMult = function (array, n = 1) { // here we have a funciton with two inputs--an array and a value n--the number by which we will multiply the array values. 
    let retArr = [];                   // note they syntax for creating a default parameter value for n--that is, if no 'n' is entered, n will = 1. I also initialized an empty array that we will use for our return
    for (let i = 0; i < array.length; i++) {
        retArr.push(array[i] * n)
    } return retArr;                    // this return statement means that this function call will resolve to the value of retArr

}
let arr = [2, 4, 6, 8, 10]
let newArr = (arrayMult(arr, 5)); // this assigns the return value from our function, given these parameters, to the variable newArr

console.log(newArr) 


// 6. Functions have a local scope, and can also access the global scope--this means that we can call global variables within our funciton, but we CANNOT call funciton variables in the global scope
// for example:
let scopeTest = function(x, y) {
    let output = x + y
    return output;
}
scopeTest(5, 6)

console.log(output); // this statement will return an error. though we have a variable called output in our invoked funciton, this variable only exists within the scope of the function,

// we CAN, however, use funcitons to modify global variables, seen here:
let callCount = 0;
let globalManipulation = function() {
    callCount += 1;
}
globalManipulation() //calling this funciton will add 1 to the current value of global variable callCount
console.log(callCount) //this will print 1, as we invoked our function to add 1 to the prior value of 0
globalManipulation()
console.log(callCount) //this will print 2, as  we invoked our function to add 1 to the prior value of 1

// 7. Functions can also create closures, which are values stored in heap memory (longer term memory as opposed to stack memory where temporary variables live) after the function is invoked.
// closures exist because js uses lexical scoping--that is, any scope has access to the variables of its parent scope--just as functions can access global variables
// for example,
let timesN = function(N) {
    return function(x) {
        return x * N;
    }
}
let timesFive = timesN(5); 
// here, we call our timesN function with an argument of 5, so timesFive returns function(x) {return x * 5}}
// here, we have a closure where N = 5. the value of N is stored in memory because javascript 'knows' that datra is neeeded to call our 'timesFive' funciton, which we'll do below
console.log(timesFive(3)) // this calls our function(3) returning 3 * N, which refers to the cosure value to resolve the expression to 3 * 5 = 15



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

// 8. functions are considered "first-class" objects - as they can be used in place of any data type.
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

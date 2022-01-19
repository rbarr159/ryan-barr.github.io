/**
 * VARIABLES
 * 0. Variables are containers used to store data within a certain context in a program. Variables allowa program to refer to 
 * specific data without hard-coding that data multiple times. One variable can be pointed toward any given piece of data, and one may 
 * change which data a variable points at, but a variable may only pooint to one piece of data at a time.
 * 
 * 1.To create a variable, one must use a keyword like var, let, or const, followed by the variable name - note that there are some 'keywords' in js that cannot be used as variable names, as they already refer to certain things in js.
 * 
 * 2. var and let can be used to simply DECLARE a variable, without 
 * assigning (pointing) it to a specific piece of data. conversely, using the const keyword requires one to both DECLARE the varaibale AND 
 * assign it to some data -- a process called INITIALIZATION
 */

// 1. Declaration //
// The first step in creating a variable is to declare it. To do so, one may type var or let followed by the variable name, like so
var testVar;
// or
let testVarTwo;
// these variables now exist in the global context (more on that later) -- BUT they ARE NOT yet associated with any data. 
// These varaibles will therefore resolve to a value of undefined
console.log(testVar); // this will print undefined

// 2. Assignment and Initialization //
// Assignment is the process of pointing an existing variable to a piece of data, like below
testVar = 73;
testVarTwo = 'kerfuffle'
// These variables can also be reassigned to new values, like so (this is not the case for variables initialized with const)
testVar = 88;
// the declaration and assignment process can be done in the same line, a process called initialization
var initVar = [0, 1, 2];
const g =  -9.8;
// this brings us to the const keyword--const is used to initialize a variable whose value can NOT be reassigned--it is a CONSTANT
//for example,
const cVar = 'a';
cVar = 'b'; // error
//this will result in an error, as a variable initialized w/ const can not be re-assigned.

// 3. Scope //
// Variables only exist within a certain context or scope. The broadest, or global scope, comprises all code in a given program.
// Within a program, there are certain sections, or blocks, of code that have thier own scope. a variable declared in a LOCAL (or block) scope, 
// will not exist outside of that block. 
// These blocks are often the body of a function or loop.

var globalVar = 'test'; // this variable exists in the global scope of the program

function scopeEx() {
    var localVar = globalVar.slice(1); // the global variable can be referenced in this block of code 
}
console.log(localVar); // this will result in an error because the variable newVar is only defined in the funciton/local scope, 
                       // and this line is trying to reference it outside of that scope

// 4. Hoisting //
// Hoisting is a process by which declarations (functions AND variables) in a program are 'hoisted to the top' of the program
// obviously, the code is not actuaolly moving, but a compiler will read these declarations as if they were above the other code in the program.
// When code is compiled, the compiler runs through the code and saves a space in memory for any declared variables or functions--this, in a way, 
// seems to alter the "order of operations" for a program--it no longer runs strictly top-to-bottom.
// As a result, variables will exist in lines of code 'before' the line they are actually declared. 
// For example,
console.log(hoisted); // note that this will print 'undefined, because only the declaration, i.e. "var hoisted;" is hoisted
var hoisted = 'Lord lift me up'
// Note that hoisting is limited to the scope in which the declaration exists -- that is, a variable declared in a function will be hoisted to the top of the 
// function code block, e.g. :

console.log(fnVariable) // this will return a 'not defined' error because the fnVariable delaration is not hoisted 'outside' the function
function hoistScope() {

    console.log(fnVariable); // here the variable will not error, because the declaration is hoisted and exists within the function
    
    var fnVariable = 'hoisted within local scope' // note that the string will not be hoisted--before this line, fnVariable will resolve to undefined within the function

}
// variables declared with let and const are technically hoisted as well, but the variables cannot be accessed before their declarations in the program
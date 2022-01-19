/**
 *LOOPS
 * 0. Loops are another fundamental tool in the programmer's repertoire - they are blocks of code that run repeatedly until some condition is met
 *
 * 1. This comes in handy when dealing with large complex data structures like objects, arrays, and nested objects and arrays
 * 
 * 2. There are a few different methods of looping, all with specific advantages for certain situations. The ones we will focus on here are while loops, for loops, and for-in loops
 * 
 * 3. One strict rule of loops is that a programmer must ensure that the loop's exit condition is eventually reached, otherwise the program will run indefinitely and will need to be aborted
 */
  
 // 1. While Loop
 // a while loop takes some conditional statement and runs a block of code repeatedly as long as that condition is true
 // for example:
 let n = 1;
 while (n <= 10) {                              // here we set our condition-- as long as n is less than or equal to 10, the program wil execute the following code block
     console.log(`this is iteration # ${n} !`)    // this should print to the console for every iteration--i.e. this is iteration 1, this is iteration 2, ... until our condition is false
     n++;                                       // this is an important step-incrementing n by 1 at the end of every iteration means we will eventually reach a point where n <= 10 resolves to false and the loop will end
 }
 
 // 2. For Loop
 // a for loop is similar to a while loop in that we set some condition to determine when to stop the loop--BUT, the variable involved in that condition is initialized and altered 
 // within the syntax of the loop itself
 // the syntax for this statement is for (initialize variable; condition; variable change) -- see the example below:
 let array = ['a', 'b', 'c', 'd', 'e', 'f']
 for (let i = 0; i < array.length; i++) {       // iterating through an array is a common use of for looping. here we start an index variable i at 0 and we're going to increment i until i is equal to the lenght of the array
    console.log(`the value at index ${i} is ${array[i]}`)       // the first iteration will be i = o, sop we'll print "the value at index 0 is 'a'", 
 }                                                              // on the next iteration, i = 1, and print "the value at index 1 is 'b'"...etc, untilour last iteration, when i is 1 less than array.length
 
 // note that we can loop backwards through an array just as easily with a few adjustments:
 for (let i = array.length - 1; i >= 0; i--) {              // by starting i at the final index (length - 1) and looping for all i >= 0, decrementing i by 1, we can now print the values in reverse order
    console.log(`the value at index ${i} is ${array[i]}`)       
 }      
 // one final note on for loops--the third portion of the loop--the update portio--can be anything--we can easily log every other array value witha  slight change of the code
 for (let i = 0; i < array.length; i += 2) {       // here, after every loop we increment i by 2, so we're skipping over every othe index in the array
    console.log(`the value at index ${i} is ${array[i]}`)       // the i values in this loop will be 0, 2, and 4, so our print statement will reflect only those values
 }
 // 3.For - In Loops
 // these loops are similar to the standard for loops, but are particularly useful for iterating through object properties
 // because the key-value pairs in an object are not ordered, we cannot use the standard indexed for loop like we did above
 // instead, a for-in loop allows us to iterate through all keys/ string-=keyed properties in an object-- see the syntax below:
 let obj = {a: [5, 0], b: [9, 0.5], c: [73, 12], d: [3, 17]};
 let arr1 = [];
 let arr2 = [];
 for (var key in obj) { // here, key is a variable that will change on every iteration until the code has run for all properties of our object obj
     arr1.push(obj[key][0])     // note that bracket notation must be used when accessing a value at the key porperties--dot notation would look for a literal property called key
     arr2.push(obj[key][1])     // this loop should iterate througha all keys in the object, so we will end up with two arrays representing all of the objects values
 }

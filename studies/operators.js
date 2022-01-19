/**
 *OPERATORS
 * 0. javascript has a number of operators used for storing, manipulating, and comparing data
 * 
 * 1. there are many unary (one operand) and binary (two operands) operators, and even a ternary (three operands) operator
 *  
 */
  

 // 1. Assignment operators
 // assignment operators are binary operators that point, or assign, the value of the right operand to the left operand
 // the basic assignment operator is =
 let variable1 = 50;                    // here we assign a simple number value to teh variable1 variable
 let variable2 = variable1 / 20;        // we can also utilize a slightly more complex right operand that also resolves to a number 
 let array1 = [variable1, variable2, variable1 + variable2];  // here we set our variable value equal to an array that references the prior variables
 array1[3] = 1000; // here we are assigning a value of 1000 to the 3 index of the above array
 let string1 = 'test';          // here we assign a string value to a variable
 variable1 = variable2 + array1[2]; // we can also RE assign variables using the = operator
 
 // the assignment operator is pretty straightforward, but there are a few others that are a bit less intuitive--the arithmetic assignment operators:

 let tst = 5;
 tst += 10 // the addition assignment operator resolves to left operand = left operand + right operand, or, for the example here, tst = 5 + 10
 tst -= 2; // the concept for addition assignment holds true for these examples as well-- so here, tst = tst - 2 = 15 - 2 = 13
 tst *= 100; // tst = tst * 100 = 13 * 100 = 1300
 tst /= 5;   // tst = tst / 5 = 1300 / 5 = 260

 // 2. Arithmetic operators
 // the binary aritmetic operators are addition (+), subtraction (-), multiplication(*), division (/), modulo or remainder (%), and exponentiation (**)
 // their syntax can be seen below:
 var sum = 10 + 3;
 var prod = 4 * 5;
 var diff = 10 - 5;
 var quot = 24 / 6;
 var rem = 25 % 4; // this value returns the remainder of left operand / right operand, in this case, rem resolves to 1
 var exp = 2 ** 3; // this value returns the value of left operand ^(right operand), in this case, exp resolves to 8

 // we also have a few unary operators here: 

 // ++ increment - adds 1 to operand, but will return different values depending on syntax-- ++x sets x = x + 1 and returns that x + 1, but x++ sets x = x + 1 and returns the original x
console.log(sum++); // this will print our sum value of 13, but will set sum 14, seen below
console.log(sum) // will print 14
console.log(++sum);// will print 15
 
 // -- decrement - subtracts 1 from operand, but will return different values depending on syntax: --x sets x = x - 1 and returns that x - 1, but x-- sets x = x - 1 and returns the original x
console.log(sum--); // this will print our sum value of 15, but will set sum = 14, seen below
console.log(sum) // will print 14
console.log(--sum);// will print 13
 
 // - unary negation - returns its operand * (-1)
 let neg = -5;
 console.log(-neg) // this will print 5, as - (-5) = (-5 * -1) = 5

 // + unary plus
 // this operator will attempt top convert the operand to a number, and if it cannot, will return NaN. if the operand is already a number, it returns that number
 console.log(+sum); // prints 13
 console.log(+'') // prints 0
 console.log(+true) // prints 1
 console.log(+false) // prints 0
 console.log(+null) // prints 0
 
 // 3. Comparison operators
 // comparison operators will always return a boolean value based on whether a comparison is true or false:
 let a = 5;
 let b = 10;
 let c = 5;
 let str = '5';

 // equal == this will return true if two values are loosely equal (a string of '5' is loosely equal to a number value of 5)
 console.log(a == c); // true
 console.log(a == b); // false
 console.log(a == str); // true
 // not equal != this returns the opposite of the loose equal
 console.log(a == c); // false
 console.log(a == b); // true
 console.log(a == str); // false
 // strict equal === this is like loose equal, but without the string exception--the data types must be the same
 console.log(a === c); // true
 console.log(a === b); // false
 console.log(a === str); // false
 // strict not equal !== this returns the opposite of the strict equal
 console.log(a === c); // false
 console.log(a === b); // true
 console.log(a === str); // true
 // greater than > returns true if left operand is greater than right operand, false if it is not
 console.log(a > c); // false
 console.log(a > b); // false
 console.log(b > a); // true
 // greater than or equal to >= returns true if left operand is greater than or equal to right operand, otherwise false
 console.log(a >= c); // true
 console.log(a >= b); // false
 console.log(b >= a); // true
 // less than < returns true if left operand is less than right operand, false if it is not
 console.log(a < c); // false
 console.log(a < b); // true
 console.log(b < a); // false
 // less than or equal to <= returns true if left operand is less than or equal to right operand, otherwise false
 console.log(a <= c); // true
 console.log(a <= b); // true
 console.log(b <= a); // false

 // 4. Logical operators
 // we have three logical operators that will resovle to boolean true or false: 
 // logical AND && - returns true only if left and right operand are true
 console.log(true && true) //will return true
 console.log(true && false) //will return false

 // logical OR || returns true if either left or right operand are true
 console.log(true || true) //will return true
 console.log(true || false) //will return true
 console.log(false || false) //will return false

 // logical NOT ! unary operator--returns true if operand is false, and false if operand is true
 console.log(!true)//returns false
 console.log(!false) //returns true
 
 // 5. Unary operators
 // there are a number of unary operators that perform various functions
 // the typeof operator will return a string representing the data type of the operand:
 console.log(typeof 7); // will print 'number'
 
 console.log(typeof 'test'); // will print 'string
 
 console.log(typeof true); // will print 'boolean'
 
 console.log(typeof undVar);// will print 'undefined' 

 console.log(typeof {a: 1, b: 2}); // will print 'object'
 console.log(typeof [1, 2, 3]); // will also print 'object' 
 console.log(typeof null); // will also print 'object' 
 
 console.log(typeof function(){let i = 40}); // will print 'function'

 //another unary operator is the delete operator, which will delete an objects property
 let obj = {
     name: 'Ryan',
     age: 26
 }
 delete obj.age;
 console.log(obj) // this will print { name: 'Ryan' }, as the age property has been deleted

 // 6. Ternary operator ?
 // the ternary, or conditional operator is the only operator that takes in three operands
 // this operator takes in a conditional statement anbd two possible return values. If the conditional is true, the left return value is returned, if false, the right value is returned
 // the syntax is (condition) ? returnIfTrue : returnIfFalse
 let age = 20;
 console.log((age > 21) ? 'have a beer' : 'have a jucie box') // this will print 'have a juice box, because our condition is false


 
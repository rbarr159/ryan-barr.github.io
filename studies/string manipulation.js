/**
 *STRING MANIPULATION
 * 0. Strings are an important data type because they allow us to label and describe things in plain words--this is very useful in modeling real-world things 
 * 
 * 1. However, manipulating strings might be a bit less intuitive than other simple data types, like numbers or booleans
 * 
 * 2. We have two tools at our disposal for manipulating string values : operators, and methods
 * 
 */

 // 1. String Operators
 //the concatenation operator (+) is used to join two strings, shown below

  console.log('string1' + 'string2'); // this will print 'string1string2' -- if we want to add a space, we need to explicitly add it, like the example below:

  console.log('string1' + ' ' + 'string2'); // this will print 'string1 string2'

  //we can also concatenate strings with the addition assignment operator, shown below:
  let str = 'abcde';
  console.log(str += 'fgh') // this will print 'abcdefgh'

  // 2. String Methods
  // there also exist a number of useful string methods:
  // string.length will return the number of characters in the string
  let tstStr = 'thousand finger man'
  console.log(tstStr.length) // will print 19
  // accessing a specific character: to access a specific character in a string, we can use a syntax similar to accessing an array value
  console.log(tstStr[0]) // this will print 't', as it is at the 0 position in the string
  console.log(tstStr[5]) // this will print 'a', as it is at the 5 position in the string
 // string.slice(x, y) will extract a piece of a string, starting at index x and chopping off between y - 1 and y, for example:
 let sliced = tstStr.slice(4, 10)
 console.log(sliced)            // this will print 'sand f', because the slice method will cut off the 'thou' and 'inger man' parts, per our input values

 // string.toUpperCase() - this will make ALL characters in string upper case
 console.log(tstStr.toUpperCase()) // will print 'THOUSAND FINGER MAN'

 // string.toLowerCase() - Conversely, this will make an entire string lower case
 console.log('TEST'.toLowerCase()) // this will print 'test'
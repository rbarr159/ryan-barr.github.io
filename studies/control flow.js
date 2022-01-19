/**
 *CONTROL FLOW
 * 0. Control flow is the order in which a computer executes statements in a script. 
 * By default, code runs in order from the first line down.
 * There are a number of ways to alter the control flow such that certain parts of code are skipped over or repeated.
 *  
 * 1. Conditional Statements are a cornerstone of control flow. Detailed below, these allow code to be run or skipped based on whatever condition is described in the statement. 
 * 
 * 2. Loops are another tool used to alter the sequence of what code is executed--these are detailed in another section
 * 
 * 3. Control Flow is fundamental to building a functional program, as without it, one would need to hard code different programs for each possible outcome 
 * e.g. having a program that's strictly dedicated to adding 5 + 3, rather than a program that can evaluate mathemeatical expressions
 * 
 */
  
// 1. IF
// "if" statements are the first type of conditional statement.
//Syntax for an if statement is described below:
/*
if (conditional statement that will resolve to boolean) {
    execute this code if the statement resolves to true
} */
// ex.
var a = 5;
var b = 10;
if (a * b > 45) {           // in this case, a * b = 5 * 10 = 50, so the statement resolves to true 
    console.log('That\'s a spicy meatball') // because the conditional resoolved to true, this code is run and the message prints
}

// 2. ELSE IF
// else if essentailly adds another possibility to our 'if' conditional
// we can use an else if statement to check another condition in case our 'if' statement resolves to false -- note that we do NOT 
// reach the 'else if' statement if the 'if' statement above it resolves to true
// ex.
var a = 2;
var b = 10;
if (a * b > 45) {           // in this case, a * b = 2 * 10 = 20, so the statement resolves to false 
    console.log('That\'s a spicy meatball') // because the conditional resolved to false, this code is skipped and we move on to the 'else if'
} else if (a * b > 0) {                     // our value a * b = 20 > 0 is true, so this conditional's code blcok is run, and we print 'no meatball today :(' ...very sad indeed
    console.log('no meatball today :(')
}


// 3. ELSE
 // finally, if none of the above conditions are hit, we can have a catch-all statement with "else"
 // else does not require an explicit conditional  like if and else if--with 'else', the conditiona is that none of the prior conditions were met
// let's look at a more realistic, non-meatball-centric example:
let users = [
    {
        userID: 'candy',
        password: 'secretsauce123'
    }, {
        userID: 'kirby',
        password: 'poyo'
    }
]

function login(id, pass) {
    for (i = 0; i < users.length; i++) {
        if (users[i].userID === id) {               // for an input id and password, we want to check if the id matches any of the user ids in the users array
            if (pass === undefined) {                   // once we've found the user with a matching id, we check to see if they entered a pass--if not, pass should = undefined, so we tell them to enter one
                return 'no password entered--please enter password'
            }
             else if (users[i].password === pass) {     // if the DID enter a password, we now want to see if it matches the one associate with their userID-- if it does, then return login successful
                return 'login successful'
            } else {
                return 'Password Incorrect.'            // if none of our aboveconditions are met (i.e. they DID enter a password and it does NOT match the correct password) we return 'password incorrect
            }
        } 
    } return 'user not found'
}





// 4. SWITCH
// switch is another, slightly more explicit way to preferentially choose what code to execute based on conditions, called cases
//the syntax for switch is shown in the example below:

function vending(snack) {
    let price;
    switch (snack) {            // here, we have the keyword switch, followed by a key in parentheses - the key is the value that we check against different cases to choose a path
        case 'chips':
            price = 1;
            break;
        case 'm&ms':            // each 'case' keyword is followed by a value against which our key is compared--- if the key (snack) === the value in a given case, the code is run
            price = 0.5;
            break;
        case 'hot dog':
            price = 2;
            break;              // note that we also need a break after each case--otherwise, everything after the matching case will also run
        default:                                // finally, we have a default value-- that is, if the key does not match any case, we run the default code--analogous to an "else" in a conditional
            console.log('item not available, please choose a menu item')
            break;
    }
    if (price) {
        console.log(`that will be $ ${price}`)
    }
}

// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-rbarr159');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    var males = _.filter(array, function(customer) {
        return customer.gender === 'male';

    }) 
    return males.length
};

var femaleCount = function(array) {
    var females = _.reduce(array, function(acc, customer) {
        if (customer.gender === 'female') {
            return acc = acc + 1;
        } else {return acc;}
    }, 0)
    return females
}

var oldestCustomer = function(array) {
    let oldestUser = array[0];
    for(let i = 0; i < array.length; i++) {
        if (array[i].age > oldestUser.age) {
            oldestUser = array[i]
        }
    } return oldestUser.name;
}
;

var youngestCustomer = function(array) {
    let youngestUser = array[0];
    for(let i = 0; i < array.length; i++) {
        if (array[i].age < youngestUser.age) {
            youngestUser = array[i]
        }
    } return youngestUser.name;
}
;

var averageBalance = function(array) {    
    var sum = _.reduce(array, function(acc, customer) {
        let str = customer.balance.slice(1).replace(/,/g,'')
        return acc += +str;
}, 0)

return sum / array.length;
}
;

var firstLetterCount = function (arr, letter) {
    var count = _.reduce(arr, function (acc, user) {
        if (user.name[0].toUpperCase() === letter.toUpperCase()) {
            return acc = acc + 1;
        } else { return acc; }
    }, 0)
    return count
};

var friendFirstLetterCount = function (arr, customer, letter) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === customer) {
            Object.assign(obj, arr[i])
        }
    }
    var count = _.reduce(obj.friends, function (acc, friend) {
        if (friend.name.charAt(0).toUpperCase() === letter.toUpperCase()) {
            return acc = acc + 1;
        } else { return acc; }
    }, 0)
    return count
};

var friendsCount = function (array, name) {
    var count = _.filter(array, function (customer) {
        for (let i = 0; i < customer.friends.length; i++) {
            if (Object.values(customer.friends[i]).includes(name)) {
                return true;
            }
        }

    })
    let names = [];
    for (let i = 0; i < count.length; i++) {
        names.push(count[i].name)
    }
    return names
} 

var topThreeTags = function (array) {
    let tags = [];
    let output = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].tags.length; j++) {
            tags.push(array[i].tags[j])
        }
    }
    let tagCount = {}
    for (let i = 0; i < tags.length; i++) {
        if (Object.keys(tagCount).includes(tags[i])) {
            tagCount[tags[i]] += 1;
        } else {
            tagCount[tags[i]] = 1;
        }
    } let vals = Object.values(tagCount);
    let max = Math.max(...vals)
    for (var key in tagCount) {
        if (tagCount[key] === max) {
            output.push(key);
        }
}
        return output;
}

var genderCount = function(array) {
    var males = _.filter(array, function(customer) {
        return customer.gender === 'male';
    }) 
    var females = _.filter(array, function(customer) {
        return customer.gender === 'female';
    }) 
    var nb = _.filter(array, function(customer) {
        return customer.gender === 'non-binary';
    }) 
    return {
        male: males.length,
        female: females.length,
        'non-binary': nb.length,
        
    }
}
;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;

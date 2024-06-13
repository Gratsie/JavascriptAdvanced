// Solve the below questions:

// done #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]] 
console.log(array.flat(20))

// done #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
console.log(greeting.flatMap(array => array.join(" ")))

// done #3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
console.log(greeting.flatMap(array => array.join(" ")).join(" "))


// done #4 Turn the trapped 3 number into: [3] - done
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log(trapped.flat(25))


// done #5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
console.log(userEmail3.trim())


// done #6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }

console.log(Object.entries(users))


//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }
const usersArray = Object.entries(users)
const mapArray = usersArray.map((obj) =>
{
    return [obj[0], obj[1] * 2]

});

console.log(mapArray)


//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }

const users = { user1: 18273, user2: 92833, user3: 90315 }
const usersArray = Object.entries(users)
const mapArray = usersArray.map(obj => [obj[0], obj [1] * 2])

Object.fromEntries(mapArray)

// version 1

const users = { user1: 18273, user2: 92833, user3: 90315 }
const mapArray = Object.entries(users).map(obj => [obj[0], obj [1] * 2])

Object.fromEntries(mapArray)


// version 2
let usersID = { user1: 18273, user2: 92833, user3: 90315 }
let usersEntries = Object.entries(usersID)
.map(obj => [obj[0], obj [1] * 2])
Object.fromEntries(users)

const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

// Examples
const basket = [-1,0,3,100, 99, 2, 99]

for (item of basket) {

  console.log(item);
}

for (let i = 0; i < basket.length; i++) {
  item = basket[i]

  console.log(item);
}

function biggestNumberInArray(arr) {

  let largest = 0;
  
  //for (let i = 0; i < arr.length; i++) {
  for (item of arr) {

    if (item > largest) {
      largest = arr[i];
    }
  }

  console.log(largest)

}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0


//1
const listOfNumbers = [-1,0,3,100, 99, 2, 99]

function biggestNumberInArray(arr) {
  largest = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  console.log(largest)
}

function smallestNumberInArray(arr) {

  let smallest = newNumbers[0];  
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  console.log(smallest)

}

largest = 3

i = 0
arr[i] = -1

i = 1
arr[i] = 0

i = 2
arr[i] = 3

i = 3

//2
const array = [-1,0,3,100, 99, 2, 99]

function biggestNumberInArray2(arr) {
  for (item of array) {
    console.log(item);
  }
}

//3
function biggestNumberInArray3(arr) {

}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {

}
const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

//1
for ( let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

//2
basket.forEach(item => {
    console.log(item)
})

//3 for of loop
//Iterating over - arrays, strings
//array
for (item of basket){
    console.log(item);
}

//string
for (item of 'basket'){
    console.log(item);
}

//4 for in loop - properties
//enumerating - objects
for (item in detailedBasket){
    console.log(item);
}


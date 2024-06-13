//Evaluate these:
//#1
[2] === [2] // false
{} === {}  // false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // 4
const object2 = object1; // 4
const object3 = object2; // 4
const object4 = { a: 5}; // 5
object1.a = 4;

console.log(object1)
console.log(object2)
console.log(object3)
console.log(object4)

//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
    constructor(cowName, cowType, cowColor) {
        this.cowName = cowName;
        this.cowType = cowType;
        this.cowColor = cowColor;
    }
    sound() {
        console.log(`Moooo, I am ${this.cowName}. My type is ${this.cowType} and I am ${this.cowColor}! `)
    }
}
    
class Mamal extends Animal {
    constructor(cowName, cowType, cowColor){
        super(cowName, cowType, cowColor)
    }
    sound2() {
        console.log(`Hey, I am ${this.cowName} and I am ${this.cowColor}`);
    }
}

const cow1 = new Animal('Lilly', 'fancy cow', 'pink');
const cow2 = new Mamal('Becky', 'crazy cow', 'green');
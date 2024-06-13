//reference type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

//context vs scope
function b() {
    let a = 4;
} // that is scope

console.log(this) // 'this' refers to what object are we indide of

const object4 = {
    a: function() {
        console.log(this);
    }
}


//instantiation
class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I am ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name,type){
        super(name, type)
        console.log('wizard', this);
    }
    play() {
        console.log(`WEEEEEE I am a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');


//primitive value; pass by value

var a = 5;
var b = a;

b++;

console.log(a)
console.log(b)

//objects; pass by reference
let obj1 = {name: 'Yap', password: '123'};
let obj2 = obj1;

obj2.password = 'easypeasy'

console.log(obj1)
console.log(obj2)

//

var c = [1, 2, 3, 4, 5];
var d = c;
d.push(5888975)

console.log(d)

// 'clone' doesn't affect the change of C

let obj = {a: 'a', b: 'b', c:'c'};
let clone = object.assign({}, obj);
let clone2 = {...obj}

obj.c = 5;
console.log(obj)
console.log(clone)
console.log(clone2)

// shallow clone 

let obj = {a: 'a', b: 'b', c: {deep: 'try and copy me'}};
let clone = Object.assign({}, obj);
let clone2 = {...obj}
let superClone = JSON.parse(JSON.stringify(obj))

obj.c.deep = 'hahaha';
console.log(obj)
console.log(clone)
console.log(superClone)


//type Coercion; type Coercion happens when we use '=='

1 == '1'

if (1) {
    console.log(5)
}
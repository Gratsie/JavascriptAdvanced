// // let + const

const player = "bobby"
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
    console.log('inside', wizardLevel);
}

console.log('outside', wizardLevel);

const obj = {
    player: 'bobny',
    experience: 100,
    wizardLevel: false
}

// Destruction 

const obj = {
    player: 'bobny',
    experience: 100,
    wizardLevel: false
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

const { player, experience } = obj;
let { wizardLevel } = obj; 

// Object Properies

const a = 'Simon';
const b = true;
const c = {};

const obj = {
    a
    b
    c
}

// Template srings

const name1 = "Sally";
const age = 34;
const pet = "horse";

// const greeting = "Hello" = name1 = " you seem to be doing " + greeting + "!"

const greetingBest = `Hello ${name1} you seem to be ${age-10}. What a lovely ${pet} you have`;


//Default arguments

function greet(name= '', age=30, pet='cat') {
    return `Hello ${name1} you seem to be ${age-10}. What a lovely ${pet} you have`;
}


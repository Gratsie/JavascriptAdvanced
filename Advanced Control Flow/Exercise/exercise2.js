//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}
// Answer 

function winBattle(result){
    return result;
}
var experiencePoints = ( winBattle(true) ? 10 : 1);


//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward"); - undefined

//#3 return value when moveCommand("back");

//#4 return value when moveCommand("right");

//#5 return value when moveCommand("left");

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!



function meal(time) {
    var whatTimeIsIt;
    switch (time) {
        case "morning":
            whatTimeIsIt = "Time for Breakfast!";
            break;
        case "noon":
            whatTimeIsIt = "It's lunch o'clock";
            break;
        case "evening":
            whatTimeIsIt = "Winner winner chicken dinner!";
            break;
        case "night":
            whatTimeIsIt = "Good night, sleep tight, don't let the bed bugs bite!";
            break;
        default:
            whatTimeIsIt = "I'm having trouble understanding that! Please try again!";
            break;  
    }
    return whatTimeIsIt;
}

// meal(new dateTime("01/01/2024")); Thomas suggested to extend it
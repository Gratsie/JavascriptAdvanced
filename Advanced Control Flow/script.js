//condition ? expr1 : expr2;   this is called returnary operator
function isUserValid(bool){
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Acess Denied";

var automatedAnswer = "Your account # is " + ( isUserValid(true) ? "1234" : "not available");

function condition() {
    if (isUserValid(true)) {
        return "You may enter";
    } else {
        return "Acess denied";
    }
}

var answer2 = condition();


//switch statemant

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward": 
            whatHappens = "you encounter a monster";
            break;
        case "back": 
            whatHappens = "you arrived home";
            break;
        case "right": 
            whatHappens = "you found a river";
            break;
        case "left": 
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}
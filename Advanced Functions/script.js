//Closuers -  a function ran, the function executed. It's never going to execute again 
//BUT it's going to remember that there are references to the variable
//so the child scope always has access to the parent scope.

const frist = () => {
    const greet = 'Hi';
    const second = () => {
        const name = "bobby"
        alert(greet);
    }
    return second;
}

const newFunc = first();
const();


//Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);

//Compose
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);

//Avoiding Side Effects, functional purity.

var a = 1;
function b() {
    a = 2
}
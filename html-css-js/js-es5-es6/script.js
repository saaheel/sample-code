// Example 1 - Looping
const fruits = ['mango','peach','banana'];
const fruitsObj = {0:'mango',1:'peach',2:'banana'};

// for(let i=0; i<fruits.length;i++){}   // console.log(i, fruits[i]);

// short hand 
// for(let fruit of fruits){console.log(fruit);}    // console.log(fruit);
// for(let index in fruits){}    // console.log(index);
// for(fruit in fruitsObj) { console.log(fruit);}

// iterating arrays & strings
// enumerating objects

// Example 2 - Math.floor
// console.log(Math.floor(4.9))
// console.log(~~4.9);

// Example 3 - Mat.pow
// console.log(Math.pow(2,4));
// console.log(2**4);


// Example 4 - var, let, const
const player = "bobby";
let experienceLevel = 100;
let wizardLevel = true;

if(experienceLevel == 100){
    let wizardLevel = false;
    console.log('inside',wizardLevel);
}

console.log('outside',wizardLevel);

// Example 5 - Arrow Function

const square = a => a * a;
console.log(square(2));

// Example 6 - Closures
// A function ran and executed. not going to run again but will save the reference

const first = () => {
    const greet = "Hello"
    const second = () => {
        const name = "bobby";
        console.log(`${greet} ${name}`);
    }
    second();
}

const myNewFunc = first;
myNewFunc();

// currying
const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);
const multiplyBy10 = curriedMultiply(10);

console.log(multiply(2,5));
console.log(curriedMultiply(4)(5));
console.log(multiplyBy5(2));
console.log(multiplyBy5(3));
console.log(multiplyBy5(4));
console.log(multiplyBy10(4));


// Componse
// const compose = (f, g) => (a) => f(g(a));
// const sumA = (num) => num + 1;
// compose(sumA, sumA)(5);


// Execise
//#1 Create a one line function that adds adds two parameters
const sumTwoNumbers = (a, b) => a + b

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3) // returns 13

//Currying: What does the last line return?
const sumB = (a, b) => a + b
const curriedSumA = (a) => (b) => a + b
curriedSumA(30)(1) // 31


//Currying: What does the last line return?
const sumC = (a, b) => a + b
const curriedSumB = (a) => (b) => a + b
const add5A = curriedSumB(5)
add5A(12) // 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5B = (num) => num + 5;
compose(add1, add5B)(10) // 16

//What are the two elements of a pure function?
// 1. Deterministic --> always produces the same results given the same inputs
// 2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.


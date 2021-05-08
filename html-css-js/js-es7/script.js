let greet = "Hello";

greet.includes("o")

let pets = ['dog', 'cat', 'rat']

console.log(pets.includes('dof'));
console.log(pets.includes('dog'));




// 
const square = x => x**2;
console.log(square(2));



// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
console.log(dragons.includes("John"));

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
// const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
const filteredArray = dragons.filter(name => name.includes('John')) // ['Johnathan']
console.log(filteredArray);

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const Power100 = x => x**100;
console.log(Power100(2));


// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
console.log(Power100(10000));


const fruitsArray = ["Apple","Banana","Chikoo","Dragon Fruit"];

let [a, b, c, d] = [...fruitsArray];

console.log(a);
console.log(b);
console.log(c);
console.log(d);

const newFruits = [...fruitsArray];
console.log(newFruits);

const toArray = (...args) => {

    return args;
}

console.log(toArray(1,2,3,4,5));
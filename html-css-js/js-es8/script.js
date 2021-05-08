// padStart
// padEnd

var obj = {
    username0: 'Sandy',
    username1: 'Rahul',
    username2: 'Andy',
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})

Object.values(obj).forEach((value) => {
    console.log(value);
})

Object.entries(obj).forEach((value) => {
    console.log(value);
})

const data = Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username','')
})

console.log(data);

var obj2 = {
    username0: {name:'Sandy',password:'pass123'},
    username1: 'Rahul',
    username2: 'Andy',
}

Object.entries(obj2).forEach((value) => {
    console.log(value);
})



// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle.padStart(9));
console.log(rabbit.padStart(9));


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
console.log(turtle);


// #3) Get the below object to go from:
let objData = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'
let details = '';
details = Object.entries(objData).map(value => value.join(" ")).join(' ')

console.log(details);
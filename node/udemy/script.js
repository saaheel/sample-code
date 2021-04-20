// const script2 = require('./script2.js')

// // import { largeNumber } from './script2.js'

// const a = script2.largeNumber;
// const b = 5;

// console.log(a+b);

// // console.log(__dirname);

// // console.log(globalThis);

// Read
const fs = require('fs');
fs.readFile('./hello.txt', (err, data) => {
    console.time('funtime');
    if(err){
        console.log("Error");
    }
    console.log('Async - ',data.toString('utf8'));
    console.timeEnd('funtime');
})

const file = fs.readFileSync('./hello.txt');
console.log('Sync - ',file.toString());

// Append
// fs.appendFile('./hello.txt', ' This is so cool', err => {
//     if(err){
//         console.log(err);
//     }
// })

// Write
fs.writeFile('bye.txt', 'Sad to see you go', err => {
    if(err){
        console.log(err);
    }
})

// Delete
fs.unlink('./bye.txt', err => {
    if(err){
        console.log(err);
    }
    console.log('Inception');
})
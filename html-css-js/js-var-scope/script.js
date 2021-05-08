// var b = "I am outside";

// function checkInside(params) {
//     var a = "I am inside"
// }

// console.log(b);
// console.log(a);


var fun = 5;

function funFunction() {
    var fun = "Hello";
    console.log(1, fun);
}

function funerFunction() {
    var fun = "Bye";
    console.log(2, fun);
}

function funestFunction() {
    fun = "Ahhhh";
    console.log(3, fun);
}

console.log("window", fun);

funFunction();
funerFunction();
funestFunction();

console.log("window", fun);



// Exercise

// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    console.log(a);       // 3
}

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    console.log(a);       //5
}


//#3
function q3() {
    window.a = "hello";
}


function q32() {
    console.log(a);   //hello
}

//#4
var a = 1;
function q4() {
    var a = "test";
    console.log(a);       // test
}

//#5
var a = 2;
if (true) {
    var a = 5;
    console.log(a);       //5
}
console.log(a);           //5
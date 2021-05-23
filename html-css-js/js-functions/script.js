var fname = 'FullStack';
lname = 'Nerd'
let team = 'Geek';


function namedfunction(name) {
    console.log('hello '+name)
    console.log('hello '+this.fname)
    console.log('hello '+this.lname)
    console.log('team '+this.team)
}

namedfunction(fname);

const expressionFunction = function(name){
    console.log('hello(exp fn) '+name)   
}

expressionFunction(fname)

const dataObject = {
    fname: 'Coder',
    greet: function() {
        console.log("hello "+this.fname);
    },
    greetInside() {
        console.log("hello "+this.fname);
    },
    greetArrow: () => {
        console.log("hello "+this.fname);
    }
}

dataObject.greet();         // this ref to object this
dataObject.greetInside();   // this ref to object this
dataObject.greetArrow();    // Arrow fn this uses window object
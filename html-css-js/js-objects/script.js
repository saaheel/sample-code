// reference Type
// var object1 = { value: 10 }
// var object2 = object1
// var object3 = { value: 10 }

// // context vs scope

// window === this;
// // this ref to left of dot
// function name(params) {
//     console.log(this);
// }
// window.name()

// const object4 = {
//     a: function (params) {
//         console.log(this);
//     }
// }

// object4.a();

// instantiation

// class Player {
//     constructor(name, type) {
//         console.log('player',this);
//         this.name = name;
//         this.type = type;
//     }
//     introduce(){
//         console.log(`Hi, I am ${this.name}, I'm a ${this.type}`);
//     }
// }

// class Wizard extends Player {
//     constructor(name, type){
//         super(name, type)
//         console.log('wizard',this);
//     }
//     play() {
//         console.log(`Weeee I'm a ${this.type}`);
//     }
// }

// const wizard1 = new Wizard('Shally', 'Healer')
// const wizard2 = new Wizard('Whawn', 'Dark Magic')

// wizard1.play();


// cloning - concat for array, assign for object, spread operator for object
var obj1 = {name: "sahil", password: "pass123", address: {no: 101,city:"Mumbai"}}
var obj2 = Object.assign({}, obj1)                      // shallow clone        
var obj3 = {... obj1 };                                 // shallow clone
var obj4 = JSON.parse(JSON.stringify(obj1))             // deep clone

obj1.password = 'eazy'
obj1.address.no = 201
console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);
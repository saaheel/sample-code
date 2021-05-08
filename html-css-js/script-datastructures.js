var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.
console.log(array.shift());
console.log(array);

// 2. Sort the array in order.
array.sort()
console.log(array);

// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");
console.log(array);

// 4. Remove "Apples" from the array.

console.log(array.splice(0, 1));


// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
console.log(array.reverse());

// you should have at the end:
// ["Kiwi", "Oranges", "Blueberries"]

// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
console.log(array2[1][1][0]);

var user = {
    name: "john",
    age: 24,
    hobby: "Scoccer",
    isMarried: false,
    spells: ["abra","ka","dabra"],
    shout: function(){          // function inside object is method 
        console.log('Ahhh');
    }
}
user.favouriteFood = "Spinach"
user.isMarried = true;

console.log(user.shout());

var list2 = [
    {
        username: "andy",
        password: "secret"
    },
    {
        username: "johny",
        password: "chekc"
    }
]

console.log(list2[0].password);
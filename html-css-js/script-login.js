var database = [
    {
        username: "john",
        password: "secret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "bob",
        password: "456"
    },
    {
        username: "edward",
        password: "789"
    }
]

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tire from all that learning"
    },
    {
        username: "Sally",
        timeline: "Javascript is so cool"
    }
]

var userNamePrompt = prompt("Whats your username");
var passwordPrompt = prompt("Whats your username");

function isUserValid(username, password) {
    for(var i=0; i < database.length; i++){
        if (database[i].username === username &&
            database[i].password === password) {
            return true;
        }
    }
    return false;
}

function signIn(user, pass) {
    if (isUserValid(user, pass)) {
        console.log(newsFeed);
    } else {
        alert("Wrong user name")
    }
    
}

signIn(userNamePrompt, passwordPrompt)
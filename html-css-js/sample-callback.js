
console.log("Start");

setTimeout(()=>{
    console.log("Timeout");
},3000)

function checkLogin(user,pwd,callback){
    console.log("inside checklogin");
        
    setTimeout(()=>{
        callback(user)
    },3000)

}

checkLogin('test@test.com',"123456", (user) => {
    console.log(`The valid user is ${user}`);
})

console.log("End");
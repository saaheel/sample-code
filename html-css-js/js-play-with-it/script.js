let i;        
for(i=1;i<=5;i++){
    setTimeout(()=> {
        console.log(i);
    },5000);
}



var a = 5;

let number = (a == 6)?"Five":"invalid";

console.log(number);

// Debugging video
const flattened = [[0,1],[2,3],[4,5]].reduce(
    (a,b) => a.concat(b),[]);

    // check it
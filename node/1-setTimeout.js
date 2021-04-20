console.log('te');

const func = (args) => {
    console.log("Hello after "+args+" secs");
}

const timerId = setTimeout(func, 4 * 1000, 4);
setTimeout(func, 8 * 1000, 8);

clearTimeout(timerId);

let cnt = 0;
const printHelloWorld = () => {
    console.log('Hello World'+cnt);
    cnt += 1;

    if(cnt === 5){
        console.log('Done');
        clearInterval(helloWorldId);
    }
}

const helloWorldId = setInterval(printHelloWorld, 1 * 1000);


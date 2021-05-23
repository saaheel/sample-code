async function fetchUser() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

// fetchUser();

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function(){
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url => {
            return fetch(url).then(res => res.json())
        }))
        console.log(users);
        console.log(posts);
        console.log(albums);    
    } catch (error) {
        console.log('oops',error);
    }
    
}
// getData();

// Solve the below problems:

// #1) Convert the below promise into async await
// fetch("https://jsonplaceholder.typicode.com/users/")
//   .then((response) => response.json())
//   .then(console.log);

//   fetchUser();   //call

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...

// const getDataTemp = async function () {
//   const [users, posts, albums] = await Promise.all(
//     urls.map((url) => fetch(url).then((resp) => resp.json())),
//   );
//   console.log("users", users);
//   console.log("posta", posts);
//   console.log("albums", albums);
// };

// const getDataAsync = async function(){
//     try {
//         const [ users, posts, albums ] = await Promise.all(
//             urls.map(async function (url) {
//                 try {
//                     const res = await fetch(url)
//                     return await res.json()    
//                 } catch (error) {
//                     console.log('Await failed',error);
//                 }
                
//             })
//         )
//         console.log(users);
//         console.log(posts);
//         console.log(albums);    
//     } catch (error) {
//         console.log('oops',error);
//     }
    
// }
// getDataAsync();


// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
// const urls = [
//   "https://jsonplaceholder.typicode.com/users",
//   "https://jsonplaceholdeTYPO.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/albums",
// ];


// for await ES2020

const getDataAwait = async function () {
    const arrayofPromises = urls.map(url => fetch(url))
    for await (let request of arrayofPromises){
        const data = await request.json();
        console.log(data);
    }
}

// getDataAwait();
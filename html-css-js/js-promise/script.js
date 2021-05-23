// const promise = new Promise((resolve, reject) => {
//     if (true) {
//         resolve('Stuff worked')    
//     } else {
//         reject('oops it broke')
//     }
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'Hiii')
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'Pookie')
// })


// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, 'I am here')
// })

// promise
//     .then(result => result+'!!')
//     .then(result2 => {
//         throw Error
//         console.log(result2);        
//     })
//     .catch(() => {
//         console.log('error');
//     })

// Promise.all([promise, promise2, promise3, promise4])
//     .then(values => {
//         console.log(values);
//     })

// const urls = [
//     'https://jsonplaceholder.typicode.com/users',
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://jsonplaceholder.typicode.com/albums'
// ]

// Promise.all(urls.map(url => {
//     return fetch(url)
//             .then(res => res.json())
// })).then(results => {
//     console.log(results[0]);
//     console.log(results[1]);
//     console.log(results[2]);
// }).catch(() => console.log('error'))


// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string

const promise1 = new Promise((resolve, reject) => {
    // setTimeout(resolve, 4000, 'success')
    setTimeout(() => {
        resolve('success 1')
    }, 4000)
})

// #2) Run the above promise and make it console.log "success"
promise1.then(result => console.log(result))

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const promise2 = Promise.resolve(
    setTimeout(() => {
      console.log("success 2");
    }, 4000)
  );
  promise2.then(result => console.log(result))


// #4) Catch this error and console log 'Ooops something went wrong'
// Promise.reject('failed')
Promise.reject('failed')
  .catch(console.log('Ooops something went wrong'))


// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]


Promise.all(urls.map(url =>
    fetch(url).then(people => people.json())
))
  .then(array => {
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
  })
  .catch(err => console.log('ughhhh fix it!', err));


// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
var todos = [
    "Clean room",
    "brush teeth",
    "execise",
    "study JS",
    "eat healthy"
];

todos.forEach(function(todo,i) {
    console.log(todo,i);
})

todos.forEach((todo,i) => {
    console.log(todo,i);
})

todos.forEach((todo,i) => console.log(todo,i))
todos.forEach(todo => console.log(todo))


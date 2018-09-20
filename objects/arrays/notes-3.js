const notes = ['Note 1', 'Note 2', 'Note 3']

notes[2] = 'This now a new note 3'

//takes a single argument and this is actually a function// we define what to do for each item in array, so if I
//have 2 item in the array, this function will get called 2 times, if 15 item we have than it's get called 15 times

// notes.forEach(function () {
//     console.log('testing 123')
// })

//we can have argumnets inside the function, this is a call-back function
notes.forEach(function (item, index) {
    console.log(index)
    console.log(item)
})

console.log(notes.length)
console.log(notes)

//challange area
//1. The first item
//2. The second item
//use this for each to print a message.

const todos = ['Todo 1', 'Todo 2', 'Todo 3', 'Todo 4', 'Todo 5']


todos.forEach(function(item, index) {
    const num = index + 1
    console.log(`${num}. ${item}`)
})


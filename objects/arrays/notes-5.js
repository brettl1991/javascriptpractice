const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'excercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

//The filter method returns a new array with just teh filetred items. Get called one time for each item.
// const filterNotes = notes.filter(function (note, index) {
//     return true
// })

// console.log(filterNotes)

//we get back all the 3:
//[ { title: 'My next trip', body: 'I would like to go to Spain' },
// { title: 'Habbits to work on',
// body: 'excercise. Eating a bit better.' },
// { title: 'Office modification', body: 'Get a new seat' } ]

//but if we change false to return we get: []

//const filterNotes = notes.filter(function (note, index) {
//    const isTitleMatch = note.title.toLowerCase().includes('ne')
//    const isBodyMatch = note.body.toLowerCase().includes('ne')
//    return isTitleMatch || isBodyMatch
//})
    
// console.log(filterNotes)

// we get what is just include 'ne'
//[ { title: 'My next trip', body: 'I would like to go to Spain' },
//{ title: 'Office modification', body: 'Get a new seat' } ]

const findNotes = function(notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
})
}

console.log(findNotes(notes, 'work'))

//we get beack just a single note Habbits title and body which includes work

//challange area, print todos which include false
const todos = [{
    text: 'Math test',
    completed: true
}, {
    text: 'Buy food',
    completed: false
}, {
    text: 'Clean the house',
    completed: true
}]

const getThingsToDo = function(todos) {
    return todos.filter(function (todo, index) {
        return todo.completed === false
})
}

console.log(getThingsToDo(todos))
 //we get just the middle one which is false
//other solution if we write the following instead ot the second return above:
//      return !todo.completed


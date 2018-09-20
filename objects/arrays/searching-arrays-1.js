    // const notes = ['Note 1', 'Note 2', 'Note 3']

    // notes[2] = 'This now a new note 3'

    // // console.log(notes.indexOf('Note 2'))

    // //this is going to return a number and if does not exsist we get back negative, so indexOf method allow us to get a position
    //of an item in the array, if the item not exist: -1 will be returned
    // //in this case above we gonna get 1 because this is the Note 2

    // console.log(notes.indexOf('note 2'))
    // //we going to get negative -1 because not find

    // //we put objects to the arrays

const notes = [{}, {
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'excercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

console.log(notes.length)
console.log(notes)

// console.log(notes.indexOf({}))

//result what we get:
// 4
// [ {},
//   { title: 'My next trip', body: 'I would like to go to Spain' },
//   { title: 'Habbits to work on',
//     body: 'excercise. Eating a bit better.' },
//   { title: 'Office modification', body: 'Get a new seat' } ]
// -1

//if
// console.log({} === {})

//we get: 
//4
// [ {},
//     { title: 'My next trip', body: 'I would like to go to Spain' },
//     { title: 'Habbits to work on',
//       body: 'excercise. Eating a bit better.' },
//     { title: 'Office modification', body: 'Get a new seat' } ]
//   false

// let someObject = {}
// let otherObject = someObject
// console.log(someObject === otherObject)
//going to be true

//findIndex allow us to provide our own definition of what makes 2 things equal, this is for objects
const index = notes.findIndex(function(note, index) {
    console.log(note)
    return note.title === 'Habbits to work on'
})
console.log(index)

//we going to get back 2


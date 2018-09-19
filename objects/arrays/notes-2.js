const notes = ['Note 1', 'Note 2', 'Note 3']

//remove an item from the end of the list
//notes.pop()

//the shift method removes the very first item from your list:

//(notes.shift())

//we can add a new item to the end of the list, we use the array push:
//notes.push('My new note')

//to add an item to the beginning:
//notes.unshift('My first note')

//middle of the array add element or replace or remove anything from our list
//notes.splice(1, 1)

//above: start of index one and remove one single item after

//notes.splice(1, 0, 'This is the new second item')

//to replace item

//notes.splice(1, 1, 'This is the new second item')

notes[2] = 'This now a new note 3'

//so above we replace the 3rd item!!! 0 always the firs!

console.log(notes.length)
console.log(notes)
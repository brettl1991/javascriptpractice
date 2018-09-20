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

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

//using find it is a great choise above if we looking for an item directly, if can find return back undefined,
//but if we are looking for the index to do something with it example to remove it yhan use findIndex
//return back: { title: 'Office modification', body: 'Get a new seat' }


const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes[index]
}

//so if we still get tha message :
//{ title: 'Office modification', body: 'Get a new seat' }
//because we set it up with lowercase function 

const note = findNote(notes, 'office modification')
console.log(note)

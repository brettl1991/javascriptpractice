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


const sortNotes = function(notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1   
        } else if (b.title.toLowerCase() > a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)

//we get in alphabetical order everything
//so the sort method takes a callback function and called with 2 items, commonly a and b
//if a should come first you want to return -1, if b you want to return 1, if they are equal 0.

//challange area
//sort the todos by completed properties// which one not completed it comes first, than which containts true

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

const sortTodos = function(todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)
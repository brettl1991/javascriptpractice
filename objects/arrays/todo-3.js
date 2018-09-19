//challange area
//1.convert array to array of objects (todos)--> text(string), completed (true/false)
//2.create a function to remove a todo by text value

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

const deleteToDo = function (todos, todoText) {
    const index = todos.findIndex(function(todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })

    if (index > -1) {
        todos.splice(index, 1)
    }
}
//function call:
deleteToDo(todos, 'Buy food')
console.log(todos)

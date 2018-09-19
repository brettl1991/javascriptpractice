const todos = ['Todo 1', 'Todo 2', 'Todo 3', 'Todo 4', 'Todo 5']

//delete the 3rd item
todos.splice(2, 1)
//add a new item to the end
todos.push('My new todo')
//remove the first item from the list
todos.shift()
console.log(`You have ${todos.length} todos.`)
console.log(todos)


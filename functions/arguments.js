//Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

//Default arguments
//in this case we going to get twice undefined

let getScoreText = function(name, score) {
    console.log(name)
    console.log(score)
}

getScoreText()

//if the value is not provided in tha last line in getScoreText(), like above we can provide in the function

let getScoreText = function (name = 'Anonymus', score = 0) {
    //return 'Name: ' + name + ' - Score: ' + score
    //above ' means space
    return `Name: ${name} - Score: ${score}`
}
let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

//going to be Anonymus and 99 because of global scope values the name has not been defined, like above

//Challange area - 2 arguments and default for one of them//tip calculator
//total for the bill, tipPercent .2 (20% tip writing just for example)

//let getTip = function (total, tipPercent = .2) {
//    return total * tipPercent
//}
//let tip = getTip(40, .25)
//console.log(tip)

//let name = 'Jen'
//let age = 12
//console.log(`Hey, my name is ${name}! I am ${age} years old.`)

//Challange area// 
//Integrate a template string (this means: ``) to the let getTip area
//A 25% tip on $40 would be $10.

let getTip = function (total, tipPercent = .2) {
//or like this: 
//   let percent = tipPercent * 100
//   let tip = total * tipPercent
//   return `A ${percent}% tip on $${total} would be $${tip}.`
//or like this way:
    return `A ${tipPercent *100}% tip on $${total} would be $${total * tipPercent}.`
}
let tip = getTip(40, .25)
console.log(tip)
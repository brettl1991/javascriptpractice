//Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

//Default arguments
let getScoreText = function (name = 'Anonymus', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score
}
let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

//Challange area - 2 arguments and default for one of them
//total for the bill, tipPercent .2 (20% tip writing)

let getTip = function (total, tipPercent = .2) {
    return total * tipPercent
}
let tip = getTip(40, .25)
console.log(tip)


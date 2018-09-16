let num = 103.941

//Number.prototype.toFixed()
//Returns a string representing the number in fixed-point notation.
console.log(num.toFixed(2))

console.log(Math.round(num))
//round down 103
console.log(Math.floor(num))
//round up 104
console.log(Math.ceil(num))

//we want a numnber between 10 and 20:
let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)

//challange area: create a function which is going to take a person's guess (a single argument), create a random number and given range and
//figure out the guest was correct
//1 - 5 - true if correct - false if not correct
//my solution:

let makeGuess01 = function(number) {
    let minNumber = 1
    let maxNumber = 5
    let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber +1)) + minNumber
    if (number = randomNumber) {
        return true
    }   else {
        return false
    }
}   

console.log(makeGuess01(3))

//his solution:
let makeGuess = function(guess) {
    let minNumber = 1
    let maxNumber = 5
    let randomNum = Math.floor(Math.random() * (maxNumber - minNumber +1)) + minNumber

    return guess === randomNum
}

console.log(makeGuess(3))
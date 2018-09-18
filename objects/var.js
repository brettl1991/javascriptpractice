var firstName = 'Agnes'
//we can re assign a value to this

firstName = 'Mike'
var firstName = 'Jen'
//we are not going to get an error it will print Jen
console.log(firstName)

if (10 === 10) {
var firstName = 'Jen'
}
console.log(firstName)

//we are going to get Jen

const setName = function() {
    var firstName = 'Jen'
}

setName()
console.log(firstName)

//we get error firstName has not been defind

let age
console.log(age)
//going to be undefined

var age
console.log(age)
//going to be undefined

console.log(age)
var age
//in this case we going to get undefined

var age
console.log(age)
age = 10

//still undefined

age = 10
console.log(age)
var age
//going to be 10 printing

//Summary: f we try to access a var veriable before diclaired it's gonna be undefined. If we try to acces a let or canst
//variable before it is declaired we get a reference error
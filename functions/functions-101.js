//Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()

//we are going to get 3 times user 

let square = function (num) {
   let result = num * num
   return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

//Challange are
//ConvertFahrenheitToCelsius
//Call a couple of times (32->we gonna get 0) (68 ->we gonna get 20)
//Print teh converted values

let ConvertFahrenheitToCelsius = function (fahrenheit) {
    let result = (fahrenheit - 32) * 5 / 9
    return result
}

let tempOne = ConvertFahrenheitToCelsius(32)
let tempTwo = ConvertFahrenheitToCelsius(68)
console.log(tempOne)
console.log(tempTwo)
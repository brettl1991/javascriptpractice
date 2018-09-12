//Global scope - (ConvertFahrenheitToCelsius, tempOne, tempTwo)
    //Local scope - (fahrenheit, celsius)
        //Local scope - (isFreezing)

let ConvertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9

    if (celsius <= 0) {
        let isFreezing = true
    }

    return celsius
}

let tempOne = ConvertFahrenheitToCelsius(32)
let tempTwo = ConvertFahrenheitToCelsius(68)
console.log(tempOne)
console.log(tempTwo)
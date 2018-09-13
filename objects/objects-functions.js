let myBook = {
    title: '1984', 
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History', 
    author: 'Howard Zinn',
    pageCount: 723
}

//we are using book argument instead of myBook or otherBook because that is allowed us to print different books values

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages lon.`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)
console.log(bookSummary.pageCountSummary)

//Challange are
//create function, take farenheit in and going to return objects with all three-objects with fahrenheit with converted celsius value and
//with converted kelvin value

let fahrenheit = 33
let myFahrenheit = {
    fahrenheit: fahrenheit,
    convertedCelsius: (fahrenheit - 32) * 5 / 9,
    convertedKelvin: (fahrenheit + 459.67) * (5 / 9)
}

let getFahrenheit = function (result) {
    return {
        fahrenheitScore: `${result.fahrenheit}`,
        celsiusScore: `${result.convertedCelsius}`,
        kelvinScore: `${result.convertedKelvin}`
    }
}

letFahrenheitsummary = getFahrenheit(myFahrenheit)
console.log(letFahrenheitsummary)

//his soulution:
let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5 / 9),
        celsius: (fahrenheit - 32) * 5 / 9
        }
    }
let temps = convertFahrenheit(74)
console.log(temps)

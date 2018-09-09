let temp = 55

//Logical and operator - True if both sides are true. False otherwise.
//Logical or operator - True if at least one side is true. False otherwise. 

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out')
} else if (temp <= 0 || temp>= 120) {
    console.log('Do not go outside!')
} else {
    console.log('Eh. Do what you want...')
}

//Challange area

let guestOneVegan = true
let guestTwoVegan = false

//Are both vegan? Offer vegan dishes.
//At least one vegan? Make sure to offer up some vegan options.
//Else? Offer up anything on the menue.

if (guestOneVegan && guestTwoVegan) {
    console.log('Please offer vegan dishes.')
} else if (guestOneVegan || guestTwoVegan) {
    console.log('Make sure to offer up some vegan options.')
} else {
    console.log('Offer up anything on the menue.')
}
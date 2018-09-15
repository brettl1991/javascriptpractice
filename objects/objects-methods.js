// let restaurant = {
//     name: 'ASB',
//     guestCapacity: 75,
//     guestCount: 0,
//     checkAvailability: function (partySize) {
//         console.log(partySize)
//     }
// }

//restaurant.checkAvailability(4)

//guestCount means how many seats currently used
//figure out example a party size going to fit in or not
//we can use the previous soloution in object-references lesson or :
//we just added the checkAvailablity property to the object, a method is just an object-property who's vaule is a function
//it's going to give us 4 after running

//messing around with return true or false
// let restaurant = {
//         name: 'ASB',
//         guestCapacity: 75,
//         guestCount: 0,
//         checkAvailability: function (partySize) {
//             return true
//         }
//     }
//this figures out for us the party size can seat or not, and we are going to get true after running these:
// let status = restaurant.checkAvailability(4)
// console.log(status)

//you get acces to the object propertys inside of the function and we are going to get the whole objects propertys one by one
// let restaurant = {
//     name: 'ASB',
//     guestCapacity: 75,
//     guestCount: 0,
//     checkAvailability: function (partySize) {
//         console.log(this)
//         return true
//     }
// }
// let status = restaurant.checkAvailability(4)
// console.log(status)

//so with this we are going to get the guestCapacity and true, so it's figuring out do we have enough seat available or not


// let restaurant = {
//     name: 'ASB',
//     guestCapacity: 75,
//     guestCount: 0,
//     checkAvailability: function (partySize) {
//         let seatsLeft = this.guestCapacity - this.guestCount
//         return partySize <= seatsLeft
//     }
// }
// let status = restaurant.checkAvailability(4)
// console.log(status)
//so we can sit down but we can change the guestcount 73 and is going to be false, so 4 people wont fit in there

//challange area: new methods inside: 2 new method :
//seatParty:takes the partySize to be seated and adds that on to guestCount
//removeParty:take the partySize leaving the restaurant and remove it from guestCount

let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        this.guestCount = partySize + this.guestCount
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}


restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))  

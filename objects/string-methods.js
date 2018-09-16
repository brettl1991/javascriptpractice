let name = ' Agnes Brettl'

//Length property/ we are going to get 12 after running
console.log(name.length)

//convert to upper case/after running my name coming with upper case
console.log (name.toUpperCase())

//convert to lower case
console.log(name.toLowerCase())

//includes methods
let password = 'abc123password098'
console.log(password.includes('password'))
//we are going to get true, but if we are changing abc123password098 to anything else which not contains the password word after running
//it is going to be false

//trim method:allowed us to remove extra right spacec from the form, for this I was put extra space before my name and
//after running it has been removed
console.log(name.trim())

//challange area
//create a function, it's called isValidPassword and return true if the length more than 8, and it is does not contain the word 'password'
let isValidPassword = function(password) {
    if (password.length >= 8 && !password.includes('password')) {
        return true
    } else {
        return false
    }
}
console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc!@&^%$'))
console.log(isValidPassword('asvfdepassword'))


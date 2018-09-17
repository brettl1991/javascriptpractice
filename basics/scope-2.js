//Global (name) 
    //Local (name)
        //Local
    //Local

let name = 'Andrew'

if (true) {
    let name = 'Mike'
    
    if (true) {
    console.log(name)
    }
}
if (true) {

}
//after thus running it's going to show Mike for us and not Andrew
//next case we put outside a console.log(name) in the global scope, so in this case going to print Mike and Andrew

let name = 'Andrew'

if (true) {
    let name = 'Mike'
    
    if (true) {
        console.log(name)
    }
}

if (true) {
    console.log(name)
}

//when we asign a value to the variable:

let name = 'Andrew'

if (true) {
    let name = 'Mike'
    
    if (true) {
        name = 'Jen'
        console.log(name)
    }
}

if (true) {
    console.log(name)
}

//in this case we are gonna get Andrew and Jen

//if we comment out Andrew and Mike we are going to get twice Jen: it is happen if we are assign a value to a variable and we don't have
//diclaired variable before:

//let name = 'Andrew'

if (true) {
    //let name = 'Mike'
    
    if (true) {
        name = 'Jen'
        console.log(name)
    }
}

if (true) {
    console.log(name)
}
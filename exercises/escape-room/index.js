const readline = require("readline-sync")
const name = readline.question("What is your name? ")
const intro = readline.question(name + ", You find yourself locked in a room. You must get out and have three options to choose from...")

let player = {
    name: name,
    hasKey: false,
    isAlive: true,
}
function start() {
    const  options = ["Find the key", "Hand in hole", "Open the door"]
    let option = readline.keyInSelect(options, "Please Select From The Following")

    if (options[option] === "Find the key"){
        FindTheKey()
    }else if (options[option] === "Hand in hole"){
        HandInHole()
    }else if (options[option] === "Open the door"){
        OpenTheDoor()
    }
}
    start()

function FindTheKey() {
    readline.question("You Look around the room and find a note on the wall")
    readline.question(" THE NOTE: What has two hands and a face, but no arms or legs?")
    let places = [ "Book", "Telephone", "Clock"]
    let search = readline.keyInSelect(places, "Which will you search?")
    if (places[search] === "Book"){
        readline.question("You dont find anything under the book")
        FindTheKey()
    }else if (places[search] === "Clock") {
        player.hasKey = true
        readline.question("You look behind the clock and find the key")
        start()
    }else if (places[search] === "Telephone") {
        readline.question("The phone begins to ring")
        let pickUp = ["Yes", "No"]
        let talk = readline.keyInSelect(pickUp, "Will you answer it?")
    if(pickUp[talk] === "Yes") {
            readline.question("It regulates our daily movement...")
            FindTheKey()
    }else if (pickUp[talk] === "No") {
            readline.question("you found nothing but may have missed something...")
            FindTheKey()
    }
    }
}

function HandInHole() {
    player.isAlive = false
    readline.question("The hole instanly sucks you in")
    readline.question("You wake up floating in darkness but cannot breathe")
    readline.question("After a few moments you are dead")

}

function OpenTheDoor() {
    if (player.hasKey === false) {
        readline.question("The door is locked. Find the key first")
        start()
    }else if (player.hasKey === true) {
        readline.question ("You use the key and the door unlocks... CONGRAGULATIONS! YOU ESCAPED!")
    }
}
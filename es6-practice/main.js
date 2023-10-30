/*const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(function(carrot) {
        return { type: "carrot", name: carrot }
    })
}*/

const carrots = ["bright orange", "ripe", "rotten"]

const mapVegetables = carrots.map((carrot) => ({type: "carrot", name: carrot}))
console.log(mapVegetables)



const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

/*function filterForFriendly(arr) {
    return arr.filter(function(person) {
        return person.friendly
    })
}*/

const filterForFriendly = people.filter((person) => person.friendly)
console.log(filterForFriendly)


const doMathSum = (a, b) => a + b 
console.log(doMathSum(10, 12))

const produceProduct = (a, b) => a * b
console.log(produceProduct(11, 2))

let firstName = "Jane"
let lastName = "Doe"
let age = 100
const printString = (firstName, lastName, age) => ( "Hi " + firstName +" "+ lastName + " how does it feel to be " + age + "?")
console.log(printString("kat", "Stark", 40))

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 const filterForDogs = animals.filter(animal => {if (animal.type === "dog") {return true} else {return false}})
 console.log(filterForDogs)
 
const names = [ "Jerry", "Adam" ]

const person = { firstName: "Robert", lastName: "Jones", age: 37 }

const name = names.push(person.firstName)
console.log(names)



const people = [ "John", "Adam", "Amber" ]

const peopleElements = people.map(person => `<h1> ${person} </h1>`)

console.log(peopleElements) //Expected Output: [ "<h1>John</h1>", "<h1>Adam</h1>", "<h1>Amber</h1>" ]
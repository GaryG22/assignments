const arr = [2, 5, 100]

const doubleNumbers = arr.map(function(num){
    return num * 2
})
  
  //console.log(doubleNumbers); // [4, 10, 200]

const strings = [2, 5, 100]

const stringItUp = strings.map(function(string){
    return string + ""
})
  //console.log(stringItUp)// ["2", "5", "100"]

const cap = ["john", "JACOB", "jinGleHeimer", "schmidt"]

const lowerCase = cap.map((name) => name.toLowerCase())
//console.log(lowerCase)

const lowerCaseAndCap = lowerCase.map((name) => name.charAt(0).toUpperCase() + name.slice(1))
//console.log(lowerCaseAndCap)

const people = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

const namesOnly = people.map((names) => names.name)
//console.log(namesOnly) // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


  const makeStrings = [
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]
  // ["Angelina Jolie can go to The Matrix",
  // "Eric Jones is under age!!",
  // "Paris Hilton is under age!!",
  // "Kayne West is under age!!",
  // "Bob Ziroll can go to The Matrix"]

  const canMatrix = makeStrings.map(can => {
    if (can.age > 18 ){
        return can.name + " can go to the Matrix!"
    }else{
        return can.name + " is under age!!"
    }
  })
  //console.log(canMatrix)
  
  const readyToPutInTheDOM = [
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]

  const h1h2 = readyToPutInTheDOM.map((person)=> "<h1>" + person.name + "</h1>" + "<h2>" + person.age + "</h2>")
  console.log(h1h2)
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]
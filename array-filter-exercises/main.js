const fiveAndGreaterOnly = [3, 6, 8, 2]  /// [6, 8]

const greater = fiveAndGreaterOnly.filter(num => num > 5)
console.log(greater)

const evensOnly = [3, 6, 8, 2]  /// [6, 8, 2]

const even = evensOnly.filter(num => num % 2 === 0)
console.log(even)

const fiveCharactersOrFewerOnly = ["dog", "wolf", "by", "family", "eaten", "camping"] // ["by", "dog", "wolf", "eaten"]

const fewer = fiveCharactersOrFewerOnly.filter(string => string.length <= 5)
console.log(fewer)

const peopleWhoBelongToTheIlluminati = [
      { name: "Angelina Jolie", member: true },
      { name: "Eric Jones", member: false },
      { name: "Paris Hilton", member: true },
      { name: "Kayne West", member: false },
      { name: "Bob Ziroll", member: true }
  ] //[ { name: 'Angelina Jolie', member: true },
  //  { name: 'Paris Hilton', member: true },
  //  { name: 'Bob Ziroll', member: true } ]

  const illuminati = peopleWhoBelongToTheIlluminati.filter(people => people.member === true)
  console.log(illuminati)
  
  const ofAge = [
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ] //[ { name: 'Angelina Jolie', age: 80 },
    //  { name: 'Bob Ziroll', age: 100 } ]

const canGo = ofAge.filter(people => people.age >18 )
console.log(canGo)

  
  
//const collectAnimals = (...theAnimal) => Array(...theAnimal)

function collectAnimals(...theAnimal) {
    let animals = Array(...theAnimal)
    return animals
}
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

function combineFruit(fruit, sweets, vegetables){
    let items = {fruit, sweets, vegetables}
    return items
}

console.log(combineFruit(["apple", "pear"],["cake", "pie"],["carrot"]))
//=> {
       // fruit: ["apple", "pear"],
       // sweets: ["cake", "pie"],
       // vegetables: ["carrot"]
    // }

    function parseSentence(location, duration){
        return "We're going to have a good time in " + location + " for " + duration
    }
      
    console.log(parseSentence("Burly Idaho", "2 weeks"));

let nums = [20, 50 , 60, 70, 80]
function returnFirst(items){
    const [a, b, c, d] = items/*change this line to be es6*/
    return a
}
console.log(returnFirst(nums))


const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];
let [a, b, c, d, e] = favoriteActivities
function returnFavorites(firstFav, secondFav, thirdFav){
    firstFav = b
    secondFav = c
    thirdFav = e
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
}

console.log(returnFavorites(favoriteActivities))

const combineAnimals = (arr1, arr2, arr3) => combinedArray = [...arr1, ...arr2, ...arr3]

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))

// ["dog", "cat", "mouse", "jackolope", "platypus"]

function product(a, b, c, d, e) {
    let numbers = [a, b, c, d, e];
  
 return numbers.reduce((acc, number) => acc * number, 1)
}
console.log(product(1, 2, 3, 4, 5))

function unshift(array, ...a) {
    let nums = [...a].concat(array);
    return nums
}
console.log(unshift(nums))

function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        let firstName = name[0]
        let lastName = name[1]
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]
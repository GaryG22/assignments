const leastToGreatest = [1, 3, 5, 2, 90, 20] // [1, 2, 3, 5, 20, 90]
const great = leastToGreatest.sort((a, b) => a-b)
console.log(great)

const greatestToLeast = [1, 3, 5, 2, 90, 20] // [90, 20, 5, 3, 2, 1]
const biggest = greatestToLeast.sort((a,b) => b-a)
console.log(biggest)

const lengthSort = ["dog", "wolf", "by", "family", "eaten"] // ["by", "dog", "wolf", "eaten", "family"]
const length = lengthSort.sort((a, b) => a.length - b.length)
console.log(length)

const alphabetical = ["dog", "wolf", "by", "family", "eaten"] // ["by", "dog", "eaten", "family", "wolf"]
const letters = alphabetical.sort((a, b) => {
    if (a < b ){
        return -1
    }              
    if (a > b ){
        return 1
    }
    return 0
})                  //The above code compares each name. 
                    //If it's greater, it returns 1. If it's less, it returns -1. Otherwise, it returns 0.
                    //The returned value is used to order our array's values alphabetically
console.log(letters) 

const byAge = [
      { name: "Quiet Samurai", age: 22 },
      { name: "Arrogant Ambassador", age: 100 },
      { name: "Misunderstood Observer", age: 2 },
      { name: "Unlucky Swami", age: 77 }
  ] // => [ { name: 'Misunderstood Observer', age: 2 },
  //  { name: 'Quiet Samurai', age: 22 },
  //  { name: 'Unlucky Swami', age: 77 },
  //  { name: 'Arrogant Ambassador', age: 100 } ]

const age = byAge.sort((a, b) => a.age - b.age)
console.log(age)
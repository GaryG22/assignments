var fruit = ["banana", "apple", "orange", "watermelon"]

fruit.shift ()
//console.log (fruit)

var orangeIndex = fruit.indexOf ("orange")
//console.log (orangeIndex)

fruit.push(orangeIndex)
//console.log(fruit)

var vegetables = ["carrot", "tomato", "pepper", "lettuce"]

vegetables.pop ()
//console.log (vegetables)

//console.log (vegetables.length)

vegetables.push(3)
//console.log(vegetables)

var fruit = fruit
var vegetables = vegetables
var food = fruit.concat(vegetables)
//console.log(food)


food.splice (4, 2)
//console.log(food)


food.reverse()
//console.log(food)

var food = food + ""
console.log(food)
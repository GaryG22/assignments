const readlineSync = require("readline-sync");
var num1 = readlineSync.question("Please enter your first number")
var num2 = readlineSync.question("Please enter your second number")
var operation = readlineSync.question("Please enter the operation to perform: add, sub, mul, div ")

const operator1 = parseInt(num1)
const operator2 = parseInt(num2)

if (operation === "add") {
	console.log ("The result is:" + (operator1 + operator2))
}
if (operation === "sub") {
	console.log ("The result is:" + (operator1 - operator2))
}
if (operation === "mul") {
	console.log ("The result is:" + (operator1 * operator2))
}
if (operation === "div") {
	console.log ("The result is:" + (operator1 / operator2))
}











const add = document.add
const subtract = document.subtract
const multiply = document.multiply
const result1 = document.getElementById("result1")
const result2 = document.getElementById("result2")
const result3 = document.getElementById("result3")

add.addEventListener("submit", function(e){
    e.preventDefault()
    let anwser = Number(add.add1.value) + Number(add.add2.value)
    result1.append(anwser)
})

subtract.addEventListener("submit", function(e){
    e.preventDefault()
    let anwser = Number(subtract.sub1.value) - Number(subtract.sub2.value)
    result2.append(anwser)
})

multiply.addEventListener("submit", function(e){
    e.preventDefault()
    let anwser = Number(multiply.mul1.value) * Number(multiply.mul2.value)
    result3.append(anwser)
})
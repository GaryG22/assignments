const input = document.pestControl

let price = document.getElementById("price")
console.log(price.textContent)

input.addEventListener("submit", function(e){
    e.preventDefault()
    price.textContent = "Total Price:"
    total = Number(input.goombas.value * 5 ) + Number(input.cheep.value * 7) + Number(input.bob.value * 11)
    price.textContent = price.textContent + " " + total
    input.goombas.value = ""
    input.cheep.value = ""
    input.bob.value = ""
})


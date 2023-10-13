const pestControl = document.pestControl
const goombas = document.getElementById("goombas")
const cheepCheep = document.getElementById("cheepCheeps")
const bobOmbs = document.getElementById("bobOmbs")

pestControl.addEventListener("submit", function(e){
    e.preventDefault()

    let total1 = goombas.value * 5
    console.log(total1)
})


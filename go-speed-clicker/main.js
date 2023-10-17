const btn = document.getElementById("btn")
const time = document.getElementById("time")
let counter = document.getElementById("counter")
const start = document.getElementById("start")
const reset = document.getElementById("reset")

btn.addEventListener("click", (e)=>{
if (time.textContent !== "0"){
counter.textContent = Number(counter.textContent) + Number(1)
localStorage.setItem("timesClicked", counter.textContent)
}})

let counting = localStorage.timesClicked
counter.textContent = counting

let timeLeft = 30
let timer
let isStopped = true

const startTimer = ()=>{
    if (isStopped){
        isStopped = false
        time.innerHTML = timeLeft
        timer = setInterval(render, 1000)
    }
}
start.onclick = startTimer;

const resetTimer = ()=>{
    isStopped = true
    clearInterval(timer)
    timeLeft = 30
    time.innerHTML = timeLeft
}
reset.onclick = resetTimer;

const render = ()=>{
    timeLeft -=1
    time.innerHTML = timeLeft
    if(timeLeft === 0){
        isStopped = true
        clearInterval(timer)
        timeLeft = 30
    }
}

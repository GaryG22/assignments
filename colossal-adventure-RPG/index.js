const readline = require("readline-sync")

const intro = readline.question("BOOOOOOOM!  Pilot: MAIN 1-1!, I AM HIT, I REPEAT, I AM HIT")
readline.question("LEFT AND RIGHT ENGINES GONE! GRID 11S MS 12289, I REPEAT 11S MS 12289")

const callSign = readline.question("MAIN 1-1: 'Pilot state your Call Sign'  ")

readline.question("MAIN 1-1 THIS IS ," + callSign + ", I LOST BOTH ENGINES, PREPARING TO EJECT")
readline.question("You eject from the aircraft. Deployinging your parachute. You begin desending into a cold dark forest below...")
console.log("You see two spots to land in")

const spotToLand = ["straight into the thick of the forest", "Try to make it to a small pond"]
let landing = readline.keyInSelect(spotToLand, "Choose wisely")


let pilot = {
    name: callSign,
    hp: 100,
    attackDamage:20,
    enemysKilled: 0
}

let skinWalker = {
name: "Skin Walker",
hp: 150,
attackDamage: 40
}

let evilWitch = {
name: "Evil Witch",
hp: 200,
attackDamage: 30
}

let enemySoldier = {
    name: "Enemy Soldier",
    hp: 100,
    attackDamage: 20
}

let enemyPatrol = {
name: "Enemy Patrol",
hp: 1200,
attackDamage:50
}

let wolfPack = {
    name: "Wolf Pack",
    hp: 800,
    attackDamage: 20
}

let goldCrate = {
    name: "Golden Crate",
    items: ["Grenade", "Rocket Launcher", "Kevlar Vest & Helemet", "Adrenaline Syring", "Dog Treats"]
}

function specialItems(){
    if (inventory.includes ("M27 Automatic Rifle")){
        pilot.attackDamage = pilot.attackDamage + 15
    }

    if (inventory.includes ("Grenade")){
        pilot.attackDamage = pilot.attackDamage + 30
    }

    if (inventory.includes ("Rocket Launcher")){
        pilot.attackDamage = pilot.attackDamage + 50
    }

    if (inventory.includes ("Kevlar Vest & Helemet")){
        pilot.hp = pilot.hp + 50
    }

    if (inventory.includes ("Addrenaline Syring")){
        pilot.hp = pilot.hp + 100
        pilot.attackDamage = pilot.attackDamage + 100
    }

    if (inventory.includes("Dog Treats")){

    }
}
    const combatChoice = ["Run", "Fight"]
    let inventory = []

if (spotToLand[landing] === "straight into the thick of the forest" ){
    pilot.hp = "100"
    readline.question("You crash through the trees but you are unharmed")
}else if (spotToLand[landing] === "Try to make it to a small pond") {
    pilot.hp = "90"
    readline.question("You land short of the pond and smack into a tree causing you to roll your ankle. HP -10")
}

readline.question("You awake on the ground...")

readline.question("MAIN 1-1: " + callSign +  " 'We need your grid location' ")
const grid =  [ "11S MS 12467", "11S MS 12289"]
let location = readline.keyInSelect(grid, "try and remember what your grid is")

if (grid[location] === "11S MS 12467") {
    readline.question("MAIN 1-1: 'We cant find you at that grid, you wont be able to recieve an airdrop'")
}
else if (grid[location] === "11S MS 12289") {
    inventory = " M27 Automatic Rifle "
    readline.question("MAIN 1-1: 'Roger! We just airdropped you a weapon. Remember, try to avoid enemy patrols or you'll be a deadman for sure' ")
}
readline.question(" you look down at your map and see that you need to head South-West in order to reach a friendly nearby FOB")
readline.question("you decide to take a animal trail on the map that leads to the FOB")
const action = readline.question("USE 'I' TO VIEW YOUR INVENTORY AND HEALTH  ")
if (action === "i") {
        console.log("\n INVENTORY: " + inventory + "\n HEALTH: " + pilot.hp)
        console.log("Attack Damage: " + pilot.attackDamage)
        console.log("Enemys Killed: " + pilot.enemysKilled)
}

while(pilot.hp > 0 && pilot.enemysKilled < 8) {
    walk()
}
if (pilot.enemysKilled > 7) {
    console.log("You see the FOB and run over to it. A group of Marines help you in. CONGRADULATIONS YOU MADE IT!")
}

function walk (){
    const walking = readline.question("PLEASE USE 'W' ON THE KEYBOARD TO WALK. Remember you can always access your inventory with 'I' ")
    if (walking === "w") {
        console.log("You continue down the trail")
        readline.question("walking")
        readline.question("Walking")
        enemyEncounter()
    }if (action === "i") {
        console.log("INVENTORY: " + inventory)
        console.log("HEALTH: " + pilot.hp)
        console.log("Attack Damage: " + pilot.attackDamage)
        console.log("Enemys Killed: " + pilot.enemysKilled)
    }
}

/*function enemyEncounter(){
    let chance =
}

function combatChoice(){

}*/
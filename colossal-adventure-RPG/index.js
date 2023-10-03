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

let random = {
    name: "",
    hp: 0,
    attackDamage: 0,

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
    const openCrate = ["open", "Dont open"]
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
const action = readline.question("PLEASE USE 'I' TO VIEW YOUR INVENTORY AND STATS  ")
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
        enemyChance()
    }if (action === "i") {
        console.log("INVENTORY: " + inventory)
        console.log("HEALTH: " + pilot.hp)
        console.log("Attack Damage: " + pilot.attackDamage)
        console.log("Enemys Killed: " + pilot.enemysKilled)
    }
}

function enemyChance(){
    let enemyEncounter = Math.floor(Math.random() * 101 )
    if (enemyEncounter < 35 && enemyEncounter > 25) {
        readline.question("You hear a human like scream and through the trees a enlongaged creature with the structure of a human and glowing red eyes stairs back at you." + " \n ITS A SKINWALKER")
        enemy.name = skinWalker.name
        enemy.hp = skinWalker.hp
        enemy.attackDamage = wolf.attackDamage
        combatChoice()
    }else if (enemyEncounter < 25 && enemyEncounter > 25) {
        readline.question("You hear a creepy giggle and the bushes behind you move..." + "\n A WITCH THROWS A POTION AND JUMPS OUT")
        random.name = evilWitch.name 
        random.hp = evilWitch.hp
        random.attackDamage = evilWitch.attackDamage
        combatChoice()
    }else if (enemyEncounter < 35 && enemyEncounter > 25) {
        readline.question("You hear an enemy soldier lost and trying to find his squad..." + "\n YOU HAVE THE UPPERHAND ON HIM")
        random.name = enemySoldier.name
        random.hp = enemySoldier.hp
        random.attackDamage = enemySoldier.attackDamage
        combatChoice()
    }else if (enemyEncounter < 35 && enemyEncounter > 25) {
        readline.question("You here lots of movement and then suddenly it stops...")
        readline.question("IT COULD BE AN ENEMY PATROL SETTING UP AN AMBUSH ON YOU!")
        random.name = enemyPatrol.name
        random.hp = enemyPatrol.hp
        random.attackDamage = enemyPatrol.attackDamage
        combatChoice()
    }else if (enemyEncounter < 35 && enemyEncounter > 25) {
        readline.question("You hear snarling and then see 8 seperate sets of bright eyes stairing back at you through the trees ahead." + "\n ITS A WOLF PACK")
        random.name =  wolfPack.name
        random.hp = wolfPack.hp
        random.attackDamage = wolfPack.attackDamage
        if (pilot.inventory === "Dog Treats"){
            readline.question("You quickly pull out the bag of dog treats you found earlier and throw them to the wolf pack...")
            readline.question("The wolves go after the treats and the leader wolf looks at you with gentle eyes and barks." + "You smile and continue walking")
            walk()
        }
    }else if (enemyEncounter < 35 && enemyEncounter > 25){
        let gold = readline.question("You see a shining gold crate under a tree")
        let crate = readline.keyInSelect(openCrate, "Do you open the crate or continue walking")
        if (gold[crate] === "Open" ){
            goldCrate.chance()
        }else if (gold[crate] === "Dont open"){
            walk()
        }
    }
}

//function combatChoice(){

//}
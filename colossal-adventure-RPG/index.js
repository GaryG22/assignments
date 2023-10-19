// INTRO

const readline = require("readline-sync")

const intro = readline.question("BOOOOOOOM!  Pilot: MAIN 1-1!, I AM HIT, I REPEAT, I AM HIT")
readline.question("LEFT AND RIGHT ENGINES GONE! GRID 11S MS 12289, I REPEAT 11S MS 12289")

const callSign = readline.question("MAIN 1-1: 'Pilot state your Call Sign'  ")
//users name 
readline.question("MAIN 1-1 THIS IS ," + callSign + ", I LOST BOTH ENGINES, PREPARING TO EJECT")
readline.question("You eject from the aircraft. Deployinging your parachute. You begin desending into a cold dark forest below...")
console.log("You see two spots to land in")

const spotToLand = ["straight into the thick of the forest", "Try to make it to a small pond"]
let landing = readline.keyInSelect(spotToLand, "Choose wisely")

// OBJECTS
let pilot = { 
    name: callSign,
    hp: 100,
    attackDamage:20,
    enemysKilled: 0
} //USER

let skinWalker = {
name: "Skin Walker",
hp: 150,
attackDamage: 40
} //ENEMY

let evilWitch = {
name: "Evil Witch",
hp: 200,
attackDamage: 30
}//ENEMY

let enemySoldier = {
    name: "Enemy Soldier",
    hp: 100,
    attackDamage: 20
}//ENEMY

let enemyPatrol = {
name: "Enemy Patrol",
hp: 1200,
attackDamage:50
}//BOSS ENEMY

let wolfPack = {
    name: "Wolf Pack",
    hp: 800,
    attackDamage: 20
} //ENEMY

let goldCrate = {
    name: "Golden Crate",
} //CRATE

let random = {
    name: "",
    hp: 0,
    attackDamage: 0,

}//PLACE HOLDER OBJECT

function specialItems(){ // Items found in gold crate and what buff they give to the user
    if (inventory.includes("Grenade")){
        pilot.attackDamage = pilot.attackDamage + 30
    }

    if (inventory.includes("Rocket Launcher")){
        pilot.attackDamage = pilot.attackDamage + 50
    }

    if (inventory.includes("Kevlar Vest & Helmet")){
        pilot.hp = pilot.hp + 50
    }

    if (inventory.includes("Addrenaline Syringe")){
        pilot.hp = pilot.hp + 100
        pilot.attackDamage = pilot.attackDamage + 100
    }
}
// '=' assignment operator
// '==' compares two variables but ignores the data type
// '===' compares two variables but does check the data type (strictly equal)
    const runFight = ["Run", "Fight"] //array
    let inventory = [] //empty array for inventory

if (spotToLand[landing] === "straight into the thick of the forest" ){ // landing conditions
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

if (grid[location] === "11S MS 12467") { //user start weapon
    inventory = ["Fists"]
    readline.question("MAIN 1-1: 'We cant find you at that grid, you wont be able to recieve an airdrop'")
}
else if (grid[location] === "11S MS 12289") {
    inventory = ["M27 Automatic Rifle"]
    pilot.attackDamage = pilot.attackDamage + 15
    readline.question("MAIN 1-1: 'Roger! We just airdropped you a weapon. Remember, try to avoid enemy patrols or you'll be a deadman for sure' ")
}
readline.question(" you look down at your map and see that you need to head South-West in order to reach a friendly nearby FOB")
readline.question("you decide to take a animal trail on the map that leads to the FOB")

while(pilot.hp > 0 && pilot.enemysKilled < 8) { //if user still has hp and thier kills are less than 8 the game continues
    walk()
}
if (pilot.enemysKilled > 7) { //if user kill are more than 7, they win
    console.log("You see the FOB and run over to it. A group of Marines help you in. CONGRADULATIONS YOU MADE IT!")
}

function walk (){ 
    const option = readline.question("PLEASE USE 'W' ON THE KEYBOARD TO WALK. You can always access your inventory with 'I' ")
    if (option === "w") { // walking
        console.log("You continue down the trail")
        readline.question("walking")
        readline.question("Walking")
        enemyChance()
    }if (option === "i") { // access inventory
        console.log("INVENTORY: " + inventory)
        console.log("HEALTH: " + pilot.hp)
        console.log("Attack Damage: " + pilot.attackDamage)
        console.log("Enemys Killed: " + pilot.enemysKilled)
    }
}
//CONDITIONS 
function enemyChance(){ // math.floor makes the number whole 
    let encounter = Math.floor(Math.random() * 101) //selects a random number between 0-100 (101 because it starts at 0)
    if (encounter < 25) { // 25% chance  random number less than 25
        readline.question("You hear an enemy soldier alone and lost trying to find his squad..." + "\n YOU HAVE THE UPPERHAND ON HIM")
        random.name = enemySoldier.name  //creates the enemy
        random.hp = enemySoldier.hp
        random.attackDamage = enemySoldier.attackDamage
        combatDicision()
    }else if ( encounter < 45) { // 20% chance  random number between 25 and 45
        readline.question("You hear a human like scream and through the trees a enlongaged creature with the structure of a human and glowing red eyes stairs back at you." + " \n ITS A SKINWALKER")
        random.name = skinWalker.name
        random.hp = skinWalker.hp
        random.attackDamage = skinWalker.attackDamage
        combatDicision()
    }else if (encounter < 65) { // 20% chance  random number between 45 and 65
        readline.question("You hear a creepy giggle and the bushes behind you move..." + "\n A WITCH THROWS A POTION AND JUMPS OUT")
        random.name = evilWitch.name 
        random.hp = evilWitch.hp
        random.attackDamage = evilWitch.attackDamage
        combatDicision()
    }else if (encounter < 70) { // 5% chance  random number between 65 and 70
        readline.question("You here lots of movement and then suddenly it stops...")
        readline.question("IT COULD BE AN ENEMY PATROL SETTING UP AN AMBUSH ON YOU!")
        random.name = enemyPatrol.name
        random.hp = enemyPatrol.hp
        random.attackDamage = enemyPatrol.attackDamage
        combatDicision()
    }else if (encounter < 80) { // 10% chance  random number between 70 and 80
        readline.question("You hear snarling and then see 8 seperate sets of bright eyes stairing back at you through the trees ahead." + "\n ITS A WOLF PACK")
        random.name =  wolfPack.name
        random.hp = wolfPack.hp
        random.attackDamage = wolfPack.attackDamage
        if (inventory.includes("Dog Treats")){
            readline.question("You quickly pull out the bag of dog treats you found earlier and throw them to the wolf pack...")
            readline.question("The wolves go after the treats and the leader wolf looks at you with gentle eyes and barks." + "You smile and continue walking")
            walk()
        }
        combatDicision()
    }else if (encounter < 100){ // 20% chance  random number between 80 and 100
        readline.question("You see a shining gold crate under a tree")
        openDicision()
    }
}

function openDicision(){
    const openCrate = ["open", "Dont open"]
    let crate = readline.keyInSelect(openCrate, "Do you open the crate or continue walking")
    if (openCrate[crate] === "open" ){
        readline.question("You open the create...")
        let foundItem = Math.floor(Math.random() * 101)
        if (foundItem < 25){ // 25% chance 
            inventory.push("Grenade")
            specialItems()
            readline.question("You Found a Grenade")
        }else if (foundItem < 45) { // 20% chance
            inventory.push("Rocket Launcher")
            specialItems()
            readline.question("You found a Rocket Launcher")
        }else if (foundItem < 65) { // 20% chance
            inventory.push("Kevlar Vest & Helmet")
            specialItems()
            readline.question("You found a Kevlar Vest and Helmet")
        }else if (foundItem < 75){ // 10% chance
            inventory.push("Addrenaline Syringe")
            specialItems()
            readline.question("You found an Addrenaline Syringe")
        }else if ( foundItem < 100) { // 25% chance
            inventory.push("Dog Treats")
            specialItems()
            readline.question("You found a bag of Dog Treats")
        }
    }else if (openCrate[crate] === "Dont open"){
        walk()
    }
}

function combatDicision(){ //fight or run dicision
let dicision = readline.keyInSelect(runFight, "HURRY! Make your decicion quickly!")
if (dicision === 1){
    fight()
}if (dicision === 0){
    runAway()
}}

function fight(){
    while( random.hp > 0 && pilot.hp > 0){ //USER ATTACK
    
        let pilotAttack = Math.floor(Math.random() * pilot.attackDamage) //will be a random number between 0 and the pilots attack damage
        console.log("You attack the" + random.name  + " inflicting " + pilotAttack + " damage! ")
        random.hp = random.hp - pilotAttack
        readline.question("The " + random.name + "  HP is " + random.hp)

    let hitChance = Math.floor(Math.random() * 101)
    if (hitChance < 50) { //ENEMY ATTACK 50% chance
        let randomAttack = Math.floor(Math.random() * random.attackDamage) //multiplied by enemys attack damage
        console.log(" The " + random.name + " attacks you, inflicting " + randomAttack + " damage! ")
        pilot.hp = pilot.hp - randomAttack
        readline.question("Your HP is " + pilot.hp)
    } else {
        console.log("The " + random.name + " missed while attacking!") //MISSED ATTACK 50% chance

    } 
     if (random.hp <= 0 ){ //If the enemies hp is less than or equal to 0 
        readline.question ("You killed the " + random.name + " but you may have alreted enemys nearby")
        readline.question("You gained 50 HP from the " + random.name)
        pilot.hp = pilot.hp + 50
        pilot.enemysKilled = pilot.enemysKilled + 1
    }else if (pilot.hp <= 0 ) { //If the users hp is less than or equal to 0
        readline.question("You are killed by the " + random.name +  ". Your body lays under a mossy tree, forever forgotten in the dark cold forest ")
    }
}}

function runAway(){ //50% chance to escape
    let escape = Math.floor(Math.random() *101)
    if(escape > 50){
        readline.question("You escape from the " + random.name)
    }else if (escape < 50) {
        readline.question("You are unable to escape and must fight!")
        fight()
    }
}
class Player {
    constructor(name, status, totalCoins, hasStar){
        this.name = name
        this.status = status
        this.totalCoins = totalCoins
        this.hasStar = hasStar
    }


    setName(){
        let namePicked = Math.floor(Math.random() * 2)
            if (namePicked === 0){
                this.name = "Mario"
            } else this.name = "Luigi"
    }

    gotHit(){
        if (this.status === "Powered Up"){
            this.status = "Big"
        } else if (this.status === "Big"){
            this.status = "Small"
        } else if (this.status === "Small"){
            this.status = "Dead"
        }
    }

    gotPowerup(){
        if(this.status === "Small"){
            this.status = "Big"
        } else if (this.status === "Big"){
            this.status = "Powered Up"
        } else if (this.status === "Powered Up"){
            this.hasStar = true
        }
    }

    addCoin(){
        this.totalCoins = this.totalCoins + Number(1)
    }

    print(){
        if (this.hasStar === true){
            console.log("Congratulations!, You Got A Star!")
        }
        console.log(`Name: ${this.name} \n Status: ${this.status} \n Total Coins: ${this.totalCoins}`)
    }
}
    const player1 = new Player("player1", "Small" , 0 , false)

    player1.setName()

function randomEvent(){
    let decision = Math.floor(Math.random() * 3)

    if(decision === 0){
        player1.gotHit()
    }else if (decision === 1){
        player1.gotPowerup()
    } else player1.addCoin()

    player1.print()
}

player1.print()

let timer
function gameTime() {
    timer = setInterval(function(){
        if(player1.status === "Dead"){
            clearInterval(timer)
        } else randomEvent()
    }, 1000)
}
gameTime()
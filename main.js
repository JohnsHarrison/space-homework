const prompt = require("prompt-sync")({ sigint: true });

// create ship
class Ship{
    constructor(shipName,hull, firepower, accuracy){
        this.shipName = shipName
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    }
    attack(firepower, enemyHull){
        this.firepower

    }

}// create player ship with the following properties
// hull - 20
// firepower - 5
// accuracy - .7
let playerShip = new Ship('USS Hello World',20,5,.7)
// console.log((playerShip))

//enemy ship proporties
// hull - between 3 and 6
// firepower - between 2 and 4ç
// accuracy - between .6 and .8
// console.log(enemyShip)
// create the enemies 


function createEnemyShips(amount){
    let enemyFleet =[]
    for (i = 0; i < amount; i++ ){
        let enemyHull = Math.floor(Math.random() * (6 - 3) + 3);
        let enemyFirepower = Math.floor(Math.random() * (4 - 2) + 2);
        let enemyAccuracy =  (Math.random() * (.8 - .6) + .6).toFixed(1);
        enemyFleet.push(new Ship ('BadGuy',enemyHull,enemyFirepower,enemyAccuracy))
    }
    return enemyFleet
}

// console.log(createEnemyShips(20))



//battle

function battle(player,enemies){
    console.log(player)
    console.log(enemies)
    for(i = 0; i <enemies.length; i++){
        
    console.log(`Your ship ${player.shipName} begins battle with ${enemies[i].shipName} #${i+1}` )
    let input = prompt('do you attack the enemy?')
    if(input === "attack"){
        let startHealth = enemies[i].hull
        let endHealth = enemies[i].hull -= player.firepower
        console.log(`enemies hull before attack = ${startHealth}`)
        console.log(`you attacked the enemy for ${player.firepower} enemies hull after attack = ${endHealth}`)
    }if (input === 'run'){
        console.log("you ran away")
        break;
    }else{
        console.log("please enter 'attack' to attack the enemy or 'run' to run away")
    }
    // console.log(enemies[i])
    }
}
// battle(playerShip, createEnemyShips(10)) 


battle(playerShip,createEnemyShips(6))
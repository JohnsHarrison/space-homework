const prompt = require("prompt-sync")({ sigint: true });

// create ship
class Ship{
    constructor(shipName,hull, firepower, accuracy){
        this.shipName = shipName
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    }
    attack(enemyHull, enemyName){
        // enemies current health
        let enemyHealth= enemyHull
        //check to see if hit
        if (Math.random() < this.accuracy) {
            enemyHealth -= this.firepower
            console.log(`${this.shipName} hit ${enemyName} for ${this.firepower} damage`);
        }else{
            console.log(`${this.shipName} missed!`)
        }
        //display health after damage
        if(enemyHull > 0){
            console.log(`${enemyName} has ${enemyHealth} health remaining`)
        }
        return enemyHealth
    }

    damage(enemyFirepower){
        this.hull -= enemyFirepower
    }

}// create player ship with the following properties
// hull - 20
// firepower - 5
// accuracy - .7
// let playerShip = new Ship('USS Hello World',20,1,.7)
// console.log((playerShip))
function createPlayerShip(){
    let playerShip
    let input = prompt("What is the name of your ship?")
    playerShip = new Ship(input,20,1,.7)
    return playerShip
}


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


// ask the player if they want to fight or run
// function getPlayerResponse(){
//     let input = prompt('do you attack the enemy?')
//     return input
// }


// battle function
function battle(){
const player = createPlayerShip()
const enemies = createEnemyShips(1)
console.log(enemies)
console.log(enemies[0])

console.log(`Your ship ${player.shipName} begins battle with ${enemies[0].shipName} #${i+1}` )
while(enemies[0].hull > 0 && player.hull != 0 ){
    let input = prompt('Will you attack the enemy or run away?')
    if(input === "attack"){
          console.log(`${player.shipName} attacks ${enemies[0].shipName}!`) 
          enemies[0].hull = player.attack(enemies[0].hull, enemies[0].shipName)
          console.log('======================================================')

          //check to see if enemy is still alive
          //if enemy is alive have it fire back
          if(enemies[0].hull > 0){
          console.log(`${enemies[0].shipName} fires back! `)
          player.hull = enemies[0].attack(player.hull, player.shipName)
          //check to see if enemy health is at or below 0
          //if so they are destroyed
          } else if (enemies[0].hull <= 0){
                console.log(`${enemies[0].shipName} is destroyed`)
          //check if the player is still alive
          //if helth is at or below 0 the player is destroyed and the game ends
          } else if (player.hull <= 0 ){
                console.log(`${player.shipName} has been destroyed! game over `)
                break;
          } 
    //if that player runs the game is over
    }else if (input === 'run'){
            console.log("you ran away. game over")
            break;
    //check to see if the player gives a valid response
    }else if(input !== 'run' || input !== attack){
            console.log("please enter 'attack' to attack the enemy or 'run' to run away")
          }
}
}

battle()

// battle(playerShip,createEnemyShips(6))



// original battle function 

// function battle(player,enemies){
//     let playerHealth = playerShip.hull
//     // console.log(player)
//     // console.log(enemies)
    
//     for(i = 0; i < enemies.length; i++){
        
//     console.log(`Your ship ${player.shipName} begins battle with ${enemies[i].shipName} #${i+1}` )
//     let input = prompt('do you attack the enemy?')
//     //attacking
//     if(input === "attack"){
    
       
//        // test while loop 
//         while(enemies[i].hull> 0 && playerHealth > 0){
//         let startHealth = enemies[i].hull
//         let endHealth = enemies[i].hull -= player.firepower
//         let enemyFirepower = enemies[i].firepower
//         console.log(`your health is ${playerHealth}`)
//         console.log(`enemies hull before attack = ${startHealth}`)
//         console.log(`you attacked the enemy for ${player.firepower} enemies hull after attack = ${endHealth}`)
//         if (endHealth<= 0 === true){
//             console.log(`${enemies[i].shipName} is desrtoyed! `) 
//         }else if(endHealth > 0 === true){
//             playerHealth -= enemyFirepower
//         }else if(playerHealth <= 0){
//             console.log("you are destroyed")
//             break;
//         }
//     }
//     }else if (input === 'run'){
//         console.log("you ran away. game over")
//         break;
//     }else if(input !== 'run' || input !== attack){
//         console.log("please enter 'attack' to attack the enemy or 'run' to run away")
//     }
// }
//     // if (enemies.length ){
//     //     console.log("you win!")
//     // }
//     // console.log(enemies[i])
    
// }
// // battle(playerShip, createEnemyShips(10)) 


// battle(playerShip,createEnemyShips(6))
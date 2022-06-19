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
}
// create player ship with the following properties
// hull - 20
// firepower - 5
// accuracy - .7
// let playerShip = new Ship('USS Hello World',20,1,.7)
// console.log((playerShip))
function createPlayerShip(){
    let playerShip
    let input = prompt("What is the name of your ship?")
    playerShip = new Ship(input,20,5,.7)
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


// battle function
function battle(player, enemies){
console.log(`Your ship ${player.shipName} begins battle with ${enemies.shipName} #${i+1}` )
while(enemies.hull > 0 && player.hull != 0 ){
    let input = prompt('Will you attack the enemy or run away?')
    if(input === "attack"){
          console.log('======================================================')
          console.log(`${player.shipName} attacks ${enemies.shipName}!`) 
          enemies.hull = player.attack(enemies.hull, enemies.shipName)
          console.log('======================================================')

          //check to see if enemy is still alive
          //if enemy is alive have it fire back
          if(enemies.hull > 0){
          console.log(`${enemies.shipName} fires back! `)
          player.hull = enemies.attack(player.hull, player.shipName)
          console.log('======================================================')
          //check to see if enemy health is at or below 0
          //if so they are destroyed
          } else if (enemies.hull <= 0){
                console.log(`${enemies.shipName} is destroyed`)
                console.log('======================================================')
          //check if the player is still alive
          //if health is at or below 0 the player is destroyed and the game ends
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

//funtion to put together and run the game
function playGame(){
    const player = createPlayerShip()
    let amount = prompt('How man computers would you like to face?')
    const enemies = createEnemyShips(amount)
    // correct grammar 
    let word;
    if (enemies.length > 1){
        word = "ships"
    }else{
        word = 'ship'
    }

    console.log(`An alien fleet of ${enemies.length} ${word} approaches earth! Earth's only hope, the noble 
    space ship ${player.shipName}, is the only thing that stands in their way! `)

    for (i = 0; i < enemies.length; i++){
        // console.log(enemies[i])
        battle(player, enemies[i])
        // enemies.pop()
    }

   
// if the last enemies health is 0 all ships must be destroyed.
// Tell the player they won and ask to play again
if(enemies[amount-1].hull <= 0){
    console.log("You win!")
    let input = prompt('Would you like to play again? "yes" or "no"?')
    if(input == 'yes'){
        playGame()
    }
}

}
playGame();





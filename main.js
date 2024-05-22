let board = document.getElementsByClassName("container")
let inicio = document.getElementById("pantalla-inicio");
let combate = document.getElementById("pantalla-juego");
let final = document.getElementById("pantalla-game-over");
let botonAtaque = document.getElementById("boton-atacar")
let botonDefensa = document.getElementById("boton-defender")
let botonCura = document.getElementById("boton-curar")
let allButtons = document.getElementsByClassName("botones")
let timerId;
let barraDeVidaPlayer = document.getElementsByClassName("barra-de-vida")
let barraDeVidaEnemigo = document.getElementsByClassName("barra-de-vida-2")
let defendStatus = false 

// Personaje//

let player = new Player();
let enemy = new Enemy()


function startGame() {
    player.insertPlayer()
    enemy.insertEnemy()
}


inicio.addEventListener("click", () => {
    combate.style.display = "grid";
    inicio.style.display = "none";
    startGame()
})

botonAtaque.addEventListener("click", () => {
    console.log(defendStatus)
enemy.receiveDamage(player.attack)
cambioPantalla()
})

botonDefensa.addEventListener("click", () =>{
    defendStatus = true
    if (defendStatus) {
        player.defend()
        defendStatus = false
    }

    console.log(defendStatus)
    cambioPantalla()
})
console.log(player.defend())
botonCura.addEventListener("click", () => {
    player.healing()  
    cambioPantalla()
})

allButtons[0].addEventListener("click", function() {
    timerId = setTimeout(turnoEnemigo, 1000)
})

barraDeVidaPlayer[0].innerText = player.health
barraDeVidaEnemigo[0].innerText = enemy.health

function cambioPantalla(){
    if (player.health <= 0 || enemy.health <= 0){
        combate.style.display = "none"
        final.style.display = "flex"
    }
}

function turnoEnemigo (){
    let enemigoTurno = Math.random()
    if (enemigoTurno <= 0.33){
     player.receiveDamage(enemy.attack)
     console.log("ataco")
     return enemy.attack
        
    } else if(enemigoTurno > 0.33 && enemigoTurno <= 0.66) {
        console.log("defiendo")
        return enemy.defend()
    } else {
        enemy.healing()
            console.log("me curo")
            barraDeVidaEnemigo[0].innerText = enemy.health
            return enemy.health
        
    }
    
    
}
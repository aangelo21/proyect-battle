let board = document.getElementsByClassName("container")
let inicio = document.getElementById("pantalla-inicio");
let combate = document.getElementById("pantalla-juego");
let gameOver = document.getElementById("pantalla-game-over");
let victoria = document.getElementById("pantalla-victoria")
let botonAtaque = document.getElementById("boton-atacar")
let botonDefensa = document.getElementById("boton-defender")
let botonCura = document.getElementById("boton-curar")
let allButtons = document.getElementsByClassName("botones")
let timerId;
let barraDeVidaPlayer = document.getElementsByClassName("barra-de-vida")
let barraDeVidaEnemigo = document.getElementsByClassName("barra-de-vida-2")
let defenceStatusPersonaje = false
let defenceStatusEnemigo = false
let dañoRecibido;

// Personaje

let player = new Player();
let enemy = new Enemy()

//Iniciar juego

function startGame() {
    player.insertPlayer()
    enemy.insertEnemy()
}

//Botones

inicio.addEventListener("click", () => {
    combate.style.display = "grid";
    inicio.style.display = "none";
    startGame()
})

botonAtaque.addEventListener("click", () => {
    if(defenceStatusEnemigo === true){
        defenceStatusEnemigo = false
    } else {
       enemy.receiveDamage(player.attack)
    }
cambioPantalla() 
})

botonDefensa.addEventListener("click", () =>{
    player.defend()
    cambioPantalla()
})
botonCura.addEventListener("click", () => {
    player.healing()  
    cambioPantalla()
})

allButtons[0].addEventListener("click", function() {
    allButtons[0].style.display = "none"
    timerId = setTimeout(turnoEnemigo, 1000)
    cambioPantalla()
})

//Barra de vida inicio

barraDeVidaPlayer[0].innerText = player.health
barraDeVidaEnemigo[0].innerText = enemy.health

//Cambio de pantalla

function cambioPantalla(){
    if (player.health <= 0){
        combate.style.display = "none"
        gameOver.style.display = "flex"
    } else if (enemy.health <= 0) {
        combate.style.display = "none"
        victoria.style.display = "grid"

    }
}

//Acciones enemigo

function turnoEnemigo (){
    cambioPantalla()
    allButtons[0].style.display = "block"
    let enemigoTurno = Math.random()
    if (enemigoTurno <= 0.33 && defenceStatusPersonaje === false){
     console.log("ataco")
     player.receiveDamage(enemy.attack)
     cambioPantalla()
    } else if (enemigoTurno <= 0.33 && defenceStatusPersonaje === true) {
        console.log("te rompo el escudo")
        defenceStatusPersonaje = false
        cambioPantalla()
    } else if(enemigoTurno > 0.33 && enemigoTurno <= 0.66) {
        console.log("defiendo")
        cambioPantalla()
        return enemy.defend()
    } else {
        enemy.healing()
            console.log("me curo")
            barraDeVidaEnemigo[0].innerText = enemy.health
            cambioPantalla()
            return enemy.health
        
    } 
    
}
    
    
    
   
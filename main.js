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
let botonRestart = document.getElementsByClassName("game-over-boton")
let contadorShield = -1;
let contador = 0;
let contadorShieldEnemy = -1;

// Personaje

let player = new Player();
let enemy = new Enemy()

//Iniciar juego

function startGame() {
    player.insertPlayer()
    enemy.insertEnemy()
}

function restartGame(){
    enemy.health = 100
    player.health = 100
    defenceStatusEnemigo = false
    defenceStatusPersonaje = false
    barraDeVidaPlayer[0].innerText = player.health
    barraDeVidaEnemigo[0].innerText = enemy.health
}
//Botones


inicio.addEventListener("click", () => {
    combate.style.display = "grid";
    inicio.style.display = "none";
    startGame()
})

botonRestart[0].addEventListener("click", () => {
    gameOver.style.display = "none"
    inicio.style.display = "flex"
    restartGame()
})

botonAtaque.addEventListener("click", () => {
    if(defenceStatusEnemigo === true){
        defenceStatusEnemigo = false
        console.log("Rompes el escudo del enemigo")
    } else {
       enemy.receiveDamage(player.attack)
       console.log("Atacas al enemigo")
    }
cambioPantalla() 
})
function deshabilitar(){
    if(contadorShield >= contador){
    botonDefensa.setAttribute("disabled", "")
    }
    else {
    botonDefensa.removeAttribute("disabled", "")
    }
}

botonDefensa.addEventListener("click", () =>{
    //if(defenceStatusPersonaje === true || contadorShield >= contador)
    player.defend()
    console.log("Te proteges")
    cambioPantalla()
    contadorShield = contador + 3
    console.log(contadorShield)
})
botonCura.addEventListener("click", () => {
    player.healing()  
    console.log("Te curas")
    cambioPantalla()
})

allButtons[0].addEventListener("click", function() {
    allButtons[0].style.display = "none"
    timerId = setTimeout(turnoEnemigo, 1000)
    cambioPantalla()
    deshabilitar()
})

//Barra de vida inicio

barraDeVidaPlayer[0].innerText = player.health
barraDeVidaEnemigo[0].innerText = enemy.health

//Cambio de pantalla

function cambioPantalla(){
    if (player.health <= 0){
        combate.style.display = "none"
        gameOver.style.display = "grid"
    } else if (enemy.health <= 0) {
        combate.style.display = "none"
        victoria.style.display = "grid"

    }
}

//Acciones enemigo
 
 
    function turnoEnemigo (){
    cambioPantalla()
    contador ++
    deshabilitar()
    console.log("Acaba el turno " + contador)
    allButtons[0].style.display = "block"
    let enemigoTurno = Math.random()
    if (enemigoTurno <= 0.33 && defenceStatusPersonaje === false){
     console.log("El enemigo te ataca")
     player.receiveDamage(enemy.attack)
     cambioPantalla()
    } else if ( enemigoTurno <= 0.33 && defenceStatusPersonaje === true) {
        console.log("El enemigo te rompe el escudo")
        defenceStatusPersonaje = false
        cambioPantalla()
    } else if( contador >= contadorShieldEnemy && enemigoTurno > 0.33 && enemigoTurno <= 0.66) {
        console.log("El enemigo se está protegiendo")
        cambioPantalla()
        contadorShieldEnemy = contador + 3
        console.log(contadorShieldEnemy)
        console.log(contador >= contadorShieldEnemy)
        return enemy.defend()
    } else {
        enemy.healing()
            console.log("El enemigo se está curando")
            barraDeVidaEnemigo[0].innerText = enemy.health
            cambioPantalla()
            return enemy.health
        
    } 
    
}
    
   
   
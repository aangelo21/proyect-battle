let board = document.getElementsByClassName("container")
let inicio = document.getElementById("pantalla-inicio");
let combate = document.getElementById("pantalla-juego");
let gameOver = document.getElementById("pantalla-game-over");
let victoria = document.getElementById("pantalla-victoria")
let botonAtaque = document.getElementById("boton-atacar")
let botonDefensa = document.getElementById("boton-defender")
let botonCura = document.getElementById("boton-curar")
let allButtons = document.getElementsByClassName("botones")
let luffy = document.getElementById("Luffy")
let zoro = document.getElementById("Zoro")
let timerId;
let barraDeVidaPlayer = document.getElementsByClassName("barra-de-vida")
let barraDeVidaEnemigo = document.getElementsByClassName("barra-de-vida-2")
let defenceStatusPersonaje = false
let defenceStatusEnemigo = false
let dañoRecibido;
let botonRestart = document.getElementsByClassName("game-over-boton")
let botonWin = document.getElementsByClassName("win-boton")
let contadorShield = -1;
let contador = 0;
let contadorShieldEnemy = -1;

let luffyAtacaId;
let luffyStandingId;
let luffyDefendingId;
let luffyHealingId

let zoroAtacaId;
let zoroStandingId;
let zoroDefendingId;
let zoroHealingId;

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
    barraDeVidaPlayer[0].innerText = player.health + " hp / 100 hp"
    barraDeVidaEnemigo[0].innerText = enemy.health + " hp / 100 hp"
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

botonWin[0].addEventListener("click", () => {
    victoria.style.display = "none"
    inicio.style.display = "flex"
    restartGame()
})

botonAtaque.addEventListener("click", () => {
    luffy.setAttribute("src", "imagenes/Luffyatacando.gif")
    if(defenceStatusPersonaje === false){
        luffyStandingId = setTimeout(luffyStanding, 1200)
    } else {
        luffyDefendingId = setTimeout(luffyDefending,1200)
    }
    if(defenceStatusEnemigo === true){
        defenceStatusEnemigo = false
        console.log("Rompes el escudo del enemigo")
    } else {
       enemy.receiveDamage(player.attack)
       console.log("Atacas al enemigo")
    }
    zoro.setAttribute("src", "imagenes/zoro stand.gif")
    comprobarDefensaPlayer()
    cambioPantalla() 

})

botonDefensa.addEventListener("click", () =>{
    luffy.setAttribute("src", "imagenes/Luffydefensa.gif")
    player.defend()
    console.log("Te proteges")
    comprobarDefensaPlayer()
    cambioPantalla()
    contadorShield = contador + 3
    console.log(contadorShield)
})
botonCura.addEventListener("click", () => {
    luffy.setAttribute("src", "imagenes/luffy heal.gif")
    player.healing()  
    console.log("Te curas")
    barraDeVidaPlayer[0].innerText = player.health + " hp / 100 hp"
    comprobarDefensaPlayer()
    cambioPantalla()
})

allButtons[0].addEventListener("click", function() {
    allButtons[0].style.display = "none"
    timerId = setTimeout(turnoEnemigo, 1000)
    comprobarDefensaPlayer()
    cambioPantalla()
    deshabilitar()
})

//Barra de vida inicio

barraDeVidaPlayer[0].innerText = player.health + " hp / 100 hp"
barraDeVidaEnemigo[0].innerText = enemy.health + " hp / 100 hp"

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
        zoro.setAttribute("src", "imagenes/zoro.attack.gif")
        console.log("El enemigo te ataca")
        player.receiveDamage(enemy.attack)
        comprobarDefensaEnemigo()
        cambioPantalla()
    } else if ( enemigoTurno <= 0.33 && defenceStatusPersonaje === true) {
        zoro.setAttribute("src", "imagenes/zoro.attack.gif")
        zoroDefendingId = setTimeout(zoroDefending, 1200)
        console.log("El enemigo te rompe el escudo")
        defenceStatusPersonaje = false
        
        cambioPantalla()
        luffyStandingId = setTimeout(luffyStanding, 1200)
    } else if( contador >= contadorShieldEnemy && enemigoTurno > 0.33 && enemigoTurno <= 0.66) {
        zoro.setAttribute("src", "imagenes/zoro defence.gif")
        console.log("El enemigo se está protegiendo")
        
        cambioPantalla()
        contadorShieldEnemy = contador + 3
        console.log(contadorShieldEnemy)
        console.log(contador >= contadorShieldEnemy)
        return enemy.defend()
    } else {
        enemy.healing()
        zoro.setAttribute("src", "imagenes/zoro heal.gif")
        zoroStandingId = setTimeout (zoroStanding, 1200)
        console.log("El enemigo se está curando")
        barraDeVidaEnemigo[0].innerText = enemy.health + " hp / 100 hp"
        comprobarDefensaEnemigo()
        cambioPantalla()
        return enemy.health
        
    } 
    
    
}

//Funciones

function deshabilitar(){
    if(contadorShield >= contador){
        botonDefensa.setAttribute("disabled", "")
    }
    else {
        botonDefensa.removeAttribute("disabled", "")
    }
}
   
function luffyAtaca(){
    luffy.setAttribute("src", "imagenes/Luffyatacando.gif")
    clearTimeout(luffyAtacaId)
}
function luffyStanding(){
    luffy.setAttribute("src", "imagenes/LuffyStanding.gif")
    clearTimeout(luffyStandingId)
}
function luffyDefending(){
    luffy.setAttribute("src", "imagenes/Luffydefensa.gif")
    clearTimeout(luffyDefendingId)
}

function luffyHealing (){
    luffy.setAttribute("src", "imagenes/luffy heal.gif")
    clearTimeout(luffyHealingId)
}

function zoroAtaca(){
    zoro.setAttribute("src", "imagenes/zoro.attack.gif")
    clearTimeout(zoroAtacaId)
}
function zoroStanding(){
    zoro.setAttribute("src", "imagenes/zoro stand.gif")
    clearTimeout(zoroStandingId)
}
function zoroDefending(){
    zoro.setAttribute("src", "imagenes/zoro defence.gif")
    clearTimeout(zoroDefendingId)
}

function zoroHealing (){
    zoro.setAttribute("src", "imagenes/zoro heal.gif")
    clearTimeout(zoroHealingId)
}

function comprobarDefensaEnemigo(){
    
    if(defenceStatusEnemigo === false){
        zoroStandingId = setTimeout(zoroStanding, 1200)
    } else {
        zoroDefendingId = setTimeout(zoroDefending, 1200)
    }
}

function comprobarDefensaPlayer(){
    if(defenceStatusPersonaje === false){
        luffyStandingId = setTimeout(luffyStanding, 1200)
    } else {
        luffyDefendingId = setTimeout(luffyDefending, 1200)
    }
}
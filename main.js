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
let contadorShield = -1;
let contador = 0;
let contadorShieldEnemy = -1;
let luffyAtacaId;
let luffyStandingId;
let luffyDefendingId;
let zoroAtacaId;
let zoroStandingId;
let zoroDefendingId;

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
    luffy.setAttribute("src", "imagenes/Luffy atacando.gif")
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
    cambioPantalla() 

})

botonDefensa.addEventListener("click", () =>{
    luffy.setAttribute("src", "imagenes/Luffy defensa.gif")
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
        zoro.setAttribute("src", "imagenes/zoro.attack.gif")
            if(defenceStatusEnemigo === false){
                zoroStandingId = setTimeout(zoroStanding, 1200)
            } else {
                zoroDefendingId = setTimeout(zoroDefending, 1200)
            }
        console.log("El enemigo te ataca")
        player.receiveDamage(enemy.attack)
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
        console.log("El enemigo se está curando")
        barraDeVidaEnemigo[0].innerText = enemy.health
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
    luffy.setAttribute("src", "imagenes/Luffy atacando.gif")
    clearTimeout(luffyAtacaId)
}
function luffyStanding(){
    luffy.setAttribute("src", "imagenes/LuffyStanding.gif")
    clearTimeout(luffyStandingId)
}
function luffyDefending(){
    luffy.setAttribute("src", "imagenes/Luffy defensa.gif")
    clearTimeout(luffyDefendingId)
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


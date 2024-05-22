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
enemy.receiveDamage(player.attack)
cambioPantalla()
})

botonDefensa.addEventListener("click", () =>{
    enemy.attack * 0
    variable=1
    cambioPantalla()
})

botonCura.addEventListener("click", () => {
    player.healing()    
    cambioPantalla()
})

allButtons[0].addEventListener("click", () => {
    timerId = setTimeout(enemy.turnoEnemigo(), 500)
})

barraDeVidaPlayer[0].innerText = player.health
barraDeVidaEnemigo[0].innerText = enemy.health

function cambioPantalla(){
    if (player.health <= 0 || enemy.health <= 0){
        combate.style.display = "none"
        final.style.display = "flex"
    }
}

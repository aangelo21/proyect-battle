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
    let atacando = enemy.health -= player.attack
    console.log(atacando)
    if (atacando <= 0){
        combate.style.display = "none"
        final.style.display = "flex"
    }
    
})

botonDefensa.addEventListener("click", () =>{
    let dañoResultante = enemy.attack * 0
    console.log(dañoResultante)
    variable=1
})

botonCura.addEventListener("click", () => {
    let vidaTotal = player.health += player.heal
    if (vidaTotal >= 100) {
        vidaTotal = 100

    }
    console.log(vidaTotal)
})

allButtons[0].addEventListener("click", () => {
    timerId = setTimeout(enemy.turnoEnemigo, 1000)
    
})

barraDeVidaPlayer[0].innerText = player.health
barraDeVidaEnemigo[0].innerText = enemy.health
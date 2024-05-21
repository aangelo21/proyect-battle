let board = document.getElementsByClassName("container")
let inicio = document.getElementById("pantalla-inicio");
let combate = document.getElementById("pantalla-juego");
let final = document.getElementById("pantalla-game-over");
let botonAtaque = document.getElementById("boton-atacar")
let botonDefensa = document.getElementById("boton-defender")
let botonCura = document.getElementById("boton-curar")
let allButtons = document.getElementsByClassName("botones")
let timerId;

// Personaje//

let player = new Player(400, 500);
let enemy = new Enemy(400, 500)


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

allButtons.addEventListener("click", () => {
    timerId = setTimeout(console.log("Turno enemigo"), 1000)
    
})

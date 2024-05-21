let board = document.getElementsByClassName("container")
let inicio = document.getElementById("pantalla-inicio");
let combate = document.getElementById("pantalla-juego");
let final = document.getElementById("pantalla-game-over");



// Personaje//

let player = new Player(400, 500);


function startGame() {
    player.insertPlayer()
    enemy.insertEnemy()
}


inicio.addEventListener("click", () => {
    board[0].style.display = "grid";
    inicio.style.display = "none";
    startGame()
})
let board = document.getElementsByClassName("container");
let inicio = document.getElementById("pantalla-inicio");
let combate = document.getElementById("pantalla-juego");
let gameOver = document.getElementById("pantalla-game-over");
let victoria = document.getElementById("pantalla-victoria");
let botonAtaque = document.getElementById("boton-atacar");
let botonDefensa = document.getElementById("boton-defender");
let botonCura = document.getElementById("boton-curar");
let allButtons = document.getElementsByClassName("botones");
let botonRestart = document.getElementsByClassName("game-over-boton");
let botonWin = document.getElementsByClassName("win-boton");
let contador = 0;
let timerId;
let botonesId;

// Personaje
let player = new Player();
let enemy = new Enemy();

// Iniciar juego
function startGame() {
    player.insertPlayer();
    enemy.insertEnemy();
}

function restartGame() {
    enemy.health = 100;
    player.health = 100;
    contador = 0;
    contadorShield = -1;
    contadorShieldEnemy = -1;
    defenceStatusEnemigo = false;
    defenceStatusPersonaje = false;
    barraDeVidaPlayer[0].innerText = player.health + " hp / 100 hp";
    barraDeVidaEnemigo[0].innerText = enemy.health + " hp / 100 hp";
}

// Botones
inicio.addEventListener("click", () => {
    combate.style.display = "grid";
    inicio.style.display = "none";
    startGame();
});

botonRestart[0].addEventListener("click", () => {
    gameOver.style.display = "none";
    inicio.style.display = "flex";
    restartGame();
});

botonWin[0].addEventListener("click", () => {
    victoria.style.display = "none";
    inicio.style.display = "flex";
    restartGame();
});

botonAtaque.addEventListener("click", () => {
    luffy.setAttribute("src", "imagenes/Luffyatacando.gif");
    if (defenceStatusPersonaje === false) {
        luffyStandingId = setTimeout(luffyStanding, 1200);
    } else {
        luffyDefendingId = setTimeout(luffyDefending, 1200);
    }
    if (defenceStatusEnemigo === true) {
        defenceStatusEnemigo = false;
        console.log("Rompes el escudo del enemigo");
    } else {
        enemy.receiveDamage(player.attackMode());
        console.log("Atacas al enemigo");
    }
    zoro.setAttribute("src", "imagenes/zoro stand.gif");
    comprobarDefensaPlayer();
    cambioPantalla();
});

botonDefensa.addEventListener("click", () => {
    luffy.setAttribute("src", "imagenes/Luffydefensa.gif");
    player.defend();
    console.log("Te proteges");
    comprobarDefensaPlayer();
    cambioPantalla();
    contadorShield = contador + 3;
    console.log(contadorShield);
});

botonCura.addEventListener("click", () => {
    luffy.setAttribute("src", "imagenes/luffy heal.gif");
    player.healing();
    console.log("Te curas");
    barraDeVidaPlayer[0].innerText = player.health + " hp / 100 hp";
    comprobarDefensaPlayer();
    cambioPantalla();
    if (player.health === 100) {
        // Empty block
    }
});

allButtons[0].addEventListener("click", function() {
    allButtons[0].style.visibility = "hidden";
    botonesId = setTimeout(habilitarBotones, 2700);
    comprobarDefensaPlayer();
    cambioPantalla();
    deshabilitarDefensa();
    timerId = setTimeout(turnoEnemigo, 1000);
    /* deshabilitarCura(); */
});

// Barra de vida inicio
barraDeVidaPlayer[0].innerText = player.health + " hp / 100 hp";
barraDeVidaEnemigo[0].innerText = enemy.health + " hp / 100 hp";

// Cambio de pantalla
function cambioPantalla() {
    if (player.health <= 0 && enemy.health > 0) {
        combate.style.display = "none";
        gameOver.style.display = "grid";
    } else if (enemy.health <= 0) {
        combate.style.display = "none";
        victoria.style.display = "grid";
    } else if (enemy.health <= 0 && player.health <= 0) {
        combate.style.display = "none";
        victoria.style.display = "grid";
    }
}

// Funciones

function habilitarBotones () {
    allButtons[0].style.visibility = "visible";
    clearTimeout(botonesId);
}

function deshabilitarDefensa() {
    if (contadorShield >= contador) {
        botonDefensa.setAttribute("disabled", "");
    } else {
        botonDefensa.removeAttribute("disabled", "");
    }
}

/* function deshabilitarCura() {
    if (player.health === 100) {
        botonCura.setAttribute("disabled", "");
    } else {
        botonCura.removeAttribute("disabled", "");
    }
} */

function comprobarDefensaEnemigo() {
    if (defenceStatusEnemigo === false) {
        zoroStandingId = setTimeout(zoroStanding, 1200);
    } else {
        zoroDefendingId = setTimeout(zoroDefending, 1200);
    }
}

function comprobarDefensaPlayer() {
    if (defenceStatusPersonaje === false) {
        luffyStandingId = setTimeout(luffyStanding, 1200);
    } else {
        luffyDefendingId = setTimeout(luffyDefending, 1200);
    }
}


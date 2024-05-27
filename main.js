let board = document.getElementsByClassName("container");
let credito = document.getElementsByClassName("creditos");
let inicio = document.getElementById("pantalla-inicio");
let combate = document.getElementById("pantalla-juego");
let gameOver = document.getElementById("pantalla-game-over");
let victoria = document.getElementById("pantalla-victoria");
let botonAtaque = document.getElementById("boton-atacar");
let botonDefensa = document.getElementById("boton-defender");
let botonDefensa2 = document.getElementById("boton-defensa");
let botonCura = document.getElementById("boton-curar");
let allButtons = document.getElementsByClassName("botones");
let botonRestart = document.getElementsByClassName("game-over-boton");
let botonWin = document.getElementsByClassName("win-boton");
let audioInicio = document.getElementById("audio-inicio");
let audioJuego = document.getElementById("audio-juego");
let audioDerrota = document.getElementById("audio-derrota");
let audioVictoria = document.getElementById("audio-victoria");
let critico = document.getElementsByClassName("texto-critico")
let botonInicio = document.getElementsByClassName("boton-inicio")
let contador = 0;
let timerId;
let botonesId;
let cambioPantallaId;
let criticoId;

audioInicio.play();

// Personaje

let player = new Player();
let enemy = new Enemy();

// Iniciar juego

function startGame() {
  player.insertPlayer();
  enemy.insertEnemy();
  critico[0].style.visibility = "hidden"
}

function restartGame() {
  audioDerrota.pause();
  audioVictoria.pause();
  audioInicio.play();
  enemy.health = 100;
  player.health = 100;
  contador = 0;
  contadorShield = -1;
  contadorShieldEnemy = -1;
  defenceStatusEnemigo = false;
  defenceStatusPersonaje = false;
  luffy.setAttribute("src", "imagenes/LuffyStanding.gif")
  zoro.setAttribute("src", "imagenes/zoro stand.gif")
  luffyVida();
  zoroVida();
}

// Botones

botonInicio[0].addEventListener("click", () => {
  combate.style.display = "grid";
  inicio.style.display = "none";
  audioInicio.pause();
  audioJuego.play();
  startGame();
});

/*inicio.addEventListener("click", () => {
  combate.style.display = "grid";
  inicio.style.display = "none";
  audioInicio.pause();
  audioJuego.play();
  startGame();
});*/

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
});

botonDefensa.addEventListener("click", () => {
  luffy.setAttribute("src", "imagenes/Luffydefensa.gif");
  player.defend();
  console.log("Te proteges");
  comprobarDefensaPlayer();
  cambioPantallaId = setTimeout(cambioPantalla, 2400);
  contadorShield = contador + 3;
  console.log(contadorShield);
});

botonCura.addEventListener("click", () => {
  luffy.setAttribute("src", "imagenes/luffy heal.gif");
  player.healing();
  console.log("Te curas");
  luffyVida();
  comprobarDefensaPlayer();
  cambioPantallaId = setTimeout(cambioPantalla, 2400);
});

allButtons[0].addEventListener("click", function () {
  allButtons[0].style.visibility = "hidden";
  botonesId = setTimeout(habilitarBotones, 2700);
  comprobarDefensaPlayer();
  cambioPantallaId = setTimeout(cambioPantalla, 2400);
  deshabilitarDefensa();
  timerId = setTimeout(turnoEnemigo, 1000);
});

// Barra de vida inicio

luffyVida();
zoroVida();

// Cambio de pantalla

function cambioPantalla() {
  if (player.health <= 0 && enemy.health > 0) {
    combate.style.display = "none";
    gameOver.style.display = "grid";
    audioJuego.pause();
    audioDerrota.play();
  } else if (enemy.health <= 0) {
    combate.style.display = "none";
    victoria.style.display = "grid";
    audioJuego.pause();
    audioVictoria.play();
  } else if (enemy.health <= 0 && player.health <= 0) {
    combate.style.display = "none";
    victoria.style.display = "grid";
    audioJuego.pause();
    audioVictoria.play();
  }
}

// Funciones

function habilitarBotones() {
  allButtons[0].style.visibility = "visible";
  clearTimeout(botonesId);
}

function deshabilitarDefensa() {
  if (contadorShield >= contador) {
    botonDefensa2.setAttribute("src", "imagenes/boton-defensa-deshab.png");
    botonDefensa.setAttribute("disabled", "");
  } else {
    botonDefensa2.setAttribute("src", "imagenes/boton-defensa.png");
    botonDefensa.removeAttribute("disabled", "");
  }
}

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

function hideCritico (){
  critico[0].style.visibility = "hidden"
}

function luffyVida() {
  if (player.health === 100) {
    L1.style.visibility = "visible";
    L2.style.visibility = "visible";
    L3.style.visibility = "visible";
    L4.style.visibility = "visible";
    L5.style.visibility = "visible";
    L6.style.visibility = "visible";
    L7.style.visibility = "visible";
    L8.style.visibility = "visible";
    L9.style.visibility = "visible";
    L10.style.visibility = "visible";
  } else if (player.health === 90) {
    L1.style.visibility = "visible";
    L2.style.visibility = "visible";
    L3.style.visibility = "visible";
    L4.style.visibility = "visible";
    L5.style.visibility = "visible";
    L6.style.visibility = "visible";
    L7.style.visibility = "visible";
    L8.style.visibility = "visible";
    L9.style.visibility = "visible";
    L10.style.visibility = "hidden";
  } else if (player.health === 80) {
    L1.style.visibility = "visible";
    L2.style.visibility = "visible";
    L3.style.visibility = "visible";
    L4.style.visibility = "visible";
    L5.style.visibility = "visible";
    L6.style.visibility = "visible";
    L7.style.visibility = "visible";
    L8.style.visibility = "visible";
    L9.style.visibility = "hidden";
    L10.style.visibility = "hidden";
  } else if (player.health === 70) {
    L1.style.visibility = "visible";
    L2.style.visibility = "visible";
    L3.style.visibility = "visible";
    L4.style.visibility = "visible";
    L5.style.visibility = "visible";
    L6.style.visibility = "visible";
    L7.style.visibility = "visible";
    L8.style.visibility = "hidden";
    L9.style.visibility = "hidden";
    L10.style.visibility = "hidden";
  } else if (player.health === 60) {
    L1.style.visibility = "visible";
    L2.style.visibility = "visible";
    L3.style.visibility = "visible";
    L4.style.visibility = "visible";
    L5.style.visibility = "visible";
    L6.style.visibility = "visible";
    L7.style.visibility = "hidden";
    L8.style.visibility = "hidden";
    L9.style.visibility = "hidden";
    L10.style.visibility = "hidden";
  } else if (player.health === 50) {
    L1.style.visibility = "visible";
    L2.style.visibility = "visible";
    L3.style.visibility = "visible";
    L4.style.visibility = "visible";
    L5.style.visibility = "visible";
    L6.style.visibility = "hidden";
    L7.style.visibility = "hidden";
    L8.style.visibility = "hidden";
    L9.style.visibility = "hidden";
    L10.style.visibility = "hidden";
  } else if (player.health === 40) {
    L1.style.visibility = "visible";
    L2.style.visibility = "visible";
    L3.style.visibility = "visible";
    L4.style.visibility = "visible";
    L5.style.visibility = "hidden";
    L6.style.visibility = "hidden";
    L7.style.visibility = "hidden";
    L8.style.visibility = "hidden";
    L9.style.visibility = "hidden";
    L10.style.visibility = "hidden";
  } else if (player.health === 30) {
    L1.style.visibility = "visible";
    L2.style.visibility = "visible";
    L3.style.visibility = "visible";
    L4.style.visibility = "hidden";
    L5.style.visibility = "hidden";
    L6.style.visibility = "hidden";
    L7.style.visibility = "hidden";
    L8.style.visibility = "hidden";
    L9.style.visibility = "hidden";
    L10.style.visibility = "hidden";
  } else if (player.health === 20) {
    L1.style.visibility = "visible";
    L2.style.visibility = "visible";
    L3.style.visibility = "hidden";
    L4.style.visibility = "hidden";
    L5.style.visibility = "hidden";
    L6.style.visibility = "hidden";
    L7.style.visibility = "hidden";
    L8.style.visibility = "hidden";
    L9.style.visibility = "hidden";
    L10.style.visibility = "hidden";
  } else if (player.health === 10) {
    L1.style.visibility = "visible";
    L2.style.visibility = "hidden";
    L3.style.visibility = "hidden";
    L4.style.visibility = "hidden";
    L5.style.visibility = "hidden";
    L6.style.visibility = "hidden";
    L7.style.visibility = "hidden";
    L8.style.visibility = "hidden";
    L9.style.visibility = "hidden";
    L10.style.visibility = "hidden";
  } else if (player.health <= 0) {
    L1.style.visibility = "hidden";
    L2.style.visibility = "hidden";
    L3.style.visibility = "hidden";
    L4.style.visibility = "hidden";
    L5.style.visibility = "hidden";
    L6.style.visibility = "hidden";
    L7.style.visibility = "hidden";
    L8.style.visibility = "hidden";
    L9.style.visibility = "hidden";
    L10.style.visibility = "hidden";
  }
}

function zoroVida() {
  if (enemy.health === 100) {
    Z1.style.visibility = "visible";
    Z2.style.visibility = "visible";
    Z3.style.visibility = "visible";
    Z4.style.visibility = "visible";
    Z5.style.visibility = "visible";
    Z6.style.visibility = "visible";
    Z7.style.visibility = "visible";
    Z8.style.visibility = "visible";
    Z9.style.visibility = "visible";
    Z10.style.visibility = "visible";
  } else if (enemy.health === 90) {
    Z1.style.visibility = "visible";
    Z2.style.visibility = "visible";
    Z3.style.visibility = "visible";
    Z4.style.visibility = "visible";
    Z5.style.visibility = "visible";
    Z6.style.visibility = "visible";
    Z7.style.visibility = "visible";
    Z8.style.visibility = "visible";
    Z9.style.visibility = "visible";
    Z10.style.visibility = "hidden";
  } else if (enemy.health === 80) {
    Z1.style.visibility = "visible";
    Z2.style.visibility = "visible";
    Z3.style.visibility = "visible";
    Z4.style.visibility = "visible";
    Z5.style.visibility = "visible";
    Z6.style.visibility = "visible";
    Z7.style.visibility = "visible";
    Z8.style.visibility = "visible";
    Z9.style.visibility = "hidden";
    Z10.style.visibility = "hidden";
  } else if (enemy.health === 70) {
    Z1.style.visibility = "visible";
    Z2.style.visibility = "visible";
    Z3.style.visibility = "visible";
    Z4.style.visibility = "visible";
    Z5.style.visibility = "visible";
    Z6.style.visibility = "visible";
    Z7.style.visibility = "visible";
    Z8.style.visibility = "hidden";
    Z9.style.visibility = "hidden";
    Z10.style.visibility = "hidden";
  } else if (enemy.health === 60) {
    Z1.style.visibility = "visible";
    Z2.style.visibility = "visible";
    Z3.style.visibility = "visible";
    Z4.style.visibility = "visible";
    Z5.style.visibility = "visible";
    Z6.style.visibility = "visible";
    Z7.style.visibility = "hidden";
    Z8.style.visibility = "hidden";
    Z9.style.visibility = "hidden";
    Z10.style.visibility = "hidden";
  } else if (enemy.health === 50) {
    Z1.style.visibility = "visible";
    Z2.style.visibility = "visible";
    Z3.style.visibility = "visible";
    Z4.style.visibility = "visible";
    Z5.style.visibility = "visible";
    Z6.style.visibility = "hidden";
    Z7.style.visibility = "hidden";
    Z8.style.visibility = "hidden";
    Z9.style.visibility = "hidden";
    Z10.style.visibility = "hidden";
  } else if (enemy.health === 40) {
    Z1.style.visibility = "visible";
    Z2.style.visibility = "visible";
    Z3.style.visibility = "visible";
    Z4.style.visibility = "visible";
    Z5.style.visibility = "hidden";
    Z6.style.visibility = "hidden";
    Z7.style.visibility = "hidden";
    Z8.style.visibility = "hidden";
    Z9.style.visibility = "hidden";
    Z10.style.visibility = "hidden";
  } else if (enemy.health === 30) {
    Z1.style.visibility = "visible";
    Z2.style.visibility = "visible";
    Z3.style.visibility = "visible";
    Z4.style.visibility = "hidden";
    Z5.style.visibility = "hidden";
    Z6.style.visibility = "hidden";
    Z7.style.visibility = "hidden";
    Z8.style.visibility = "hidden";
    Z9.style.visibility = "hidden";
    Z10.style.visibility = "hidden";
  } else if (enemy.health === 20) {
    Z1.style.visibility = "visible";
    Z2.style.visibility = "visible";
    Z3.style.visibility = "hidden";
    Z4.style.visibility = "hidden";
    Z5.style.visibility = "hidden";
    Z6.style.visibility = "hidden";
    Z7.style.visibility = "hidden";
    Z8.style.visibility = "hidden";
    Z9.style.visibility = "hidden";
    Z10.style.visibility = "hidden";
  } else if (enemy.health === 10) {
    Z1.style.visibility = "visible";
    Z2.style.visibility = "hidden";
    Z3.style.visibility = "hidden";
    Z4.style.visibility = "hidden";
    Z5.style.visibility = "hidden";
    Z6.style.visibility = "hidden";
    Z7.style.visibility = "hidden";
    Z8.style.visibility = "hidden";
    Z9.style.visibility = "hidden";
    Z10.style.visibility = "hidden";
  } else if (enemy.health <= 0) {
    Z1.style.visibility = "hidden";
    Z2.style.visibility = "hidden";
    Z3.style.visibility = "hidden";
    Z4.style.visibility = "hidden";
    Z5.style.visibility = "hidden";
    Z6.style.visibility = "hidden";
    Z7.style.visibility = "hidden";
    Z8.style.visibility = "hidden";
    Z9.style.visibility = "hidden";
    Z10.style.visibility = "hidden";
  }
}

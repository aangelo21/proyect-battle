let luffyAtacaId;
let luffyStandingId;
let luffyDefendingId;
let luffyHealingId;
let luffyLoseId;
let defenceStatusPersonaje = false;
let barraDeVidaPlayer = document.getElementsByClassName("barra-de-vida");
let luffy = document.getElementById("Luffy");
let dañoRecibido;
let contadorShield = -1;
let damage;
let L1 = document.getElementById("L1");
let L2 = document.getElementById("L2");
let L3 = document.getElementById("L3");
let L4 = document.getElementById("L4");
let L5 = document.getElementById("L5");
let L6 = document.getElementById("L6");
let L7 = document.getElementById("L7");
let L8 = document.getElementById("L8");
let L9 = document.getElementById("L9");
let L10 = document.getElementById("L10");

class Player {
  constructor() {
    this.width = 50;
    this.heigth = 50;
    this.health = 100;
    this.attack = 20;
    this.defence = 10;
    this.heal = 10;
    this.sprite = document.createElement("div");
  }

  insertPlayer() {
    this.sprite.setAttribute("id", "Personaje");
    inicio.appendChild(this.sprite);
  }

  receiveDamage(damage) {
    this.health -= damage;
    luffyVida();
  }

  attackMode() {
    let probCritico = Math.random();
    if (probCritico <= 0.05) {
      this.attack = 60;
      critico[0].style.visibility = "visible"
      criticoId = setTimeout(hideCritico, 2400)
      console.log("TOMA CRITICO");
    } else {
      this.attack = 20;
    }
    return this.attack;
  }

  defend() {
    defenceStatusPersonaje = true;
  }

  healing() {
    this.health += this.heal;
    if (this.health >= 100) {
      this.health = 100;

      luffyVida();
      return this.health;
    }
  }
}

function luffyAtaca() {
  luffy.setAttribute("src", "imagenes/Luffyatacando.gif");
  clearTimeout(luffyAtacaId);
}
function luffyStanding() {
  luffy.setAttribute("src", "imagenes/LuffyStanding.gif");
  clearTimeout(luffyStandingId);
}
function luffyDefending() {
  luffy.setAttribute("src", "imagenes/Luffydefensa.gif");
  clearTimeout(luffyDefendingId);
}

function luffyHealing() {
  luffy.setAttribute("src", "imagenes/Luffy heal.gif");
  clearTimeout(luffyHealingId);
}

function luffyLose(){
  clearTimeout(luffyStandingId)
  luffy.setAttribute("src", "imagenes/Luffy lose.gif")
  clearTimeout(luffyLoseId)
}
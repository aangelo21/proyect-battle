let zoroAtacaId;
let zoroStandingId;
let zoroDefendingId;
let zoroHealingId;
let zoroLoseId;
let damage2;
let defenceStatusEnemigo = false;
let barraDeVidaEnemigo = document.getElementsByClassName("barra-de-vida-2");
let zoro = document.getElementById("Zoro");
let contadorShieldEnemy = -1;
let Z1 = document.getElementById("Z1");
let Z2 = document.getElementById("Z2");
let Z3 = document.getElementById("Z3");
let Z4 = document.getElementById("Z4");
let Z5 = document.getElementById("Z5");
let Z6 = document.getElementById("Z6");
let Z7 = document.getElementById("Z7");
let Z8 = document.getElementById("Z8");
let Z9 = document.getElementById("Z9");
let Z10 = document.getElementById("Z10");

class Enemy {
  constructor() {
    this.width = 50;
    this.heigth = 50;
    this.health = 100;
    this.attack = 20;
    this.defence = 10;
    this.heal = 10;
    this.sprite = document.createElement("div");
  }

  insertEnemy() {
    this.sprite.setAttribute("id", "Enemigo");
    inicio.appendChild(this.sprite);
  }

  receiveDamage(damage2) {
    this.health -= damage2;
    zoroVida();
  }

  attack() {
    return this.attack;
  }

  attackModeEnemy() {
    let probCritico = Math.random();
    if (probCritico <= 0.05) {
      this.attack = 60;
      critico[0].style.visibility = "visible"
      criticoId = setTimeout(hideCritico, 2400)
      console.log("TOMA HOSTION");
    } else {
      this.attack = 20;
    }
    return this.attack;
  }

  defend() {
    defenceStatusEnemigo = true;
  }

  healing() {
    this.health += this.heal;
    if (this.health >= 100) {
      this.health = 100;
      zoroVida();

      return this.health;
    }
    return this.health;
  }
}

function zoroAtaca() {
  zoro.setAttribute("src", "imagenes/zoro.attack.gif");
  clearTimeout(zoroAtacaId);
}
function zoroStanding() {
  zoro.setAttribute("src", "imagenes/zoro stand.gif");
  clearTimeout(zoroStandingId);
}
function zoroDefending() {
  zoro.setAttribute("src", "imagenes/zoro defence.gif");
  clearTimeout(zoroDefendingId);
}

function zoroHealing() {
  zoro.setAttribute("src", "imagenes/zoro heal.gif");
  clearTimeout(zoroHealingId);
}

function zoroLose (){
  console.log("auch")
  clearTimeout(zoroStandingId)
  zoro.setAttribute("src", "imagenes/zoro_lose.gif");
  clearTimeout(zoroLoseId);
}
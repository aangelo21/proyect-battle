let luffyAtacaId;
let luffyStandingId;
let luffyDefendingId;
let luffyHealingId;
let defenceStatusPersonaje = false
let barraDeVidaPlayer = document.getElementsByClassName("barra-de-vida")
let luffy = document.getElementById("Luffy")
let dañoRecibido;
let contadorShield = -1;
let damage;

class Player {
    constructor() {
        this.width = 50;
        this.heigth = 50;
        this.health = 100;
        this.attack = 20;
        this.defence = 10;
        this.heal = 10;
        this.sprite = document.createElement('div')
    }

    insertPlayer() {
        this.sprite.setAttribute('id', 'Personaje');
        inicio.appendChild(this.sprite);
    }

    receiveDamage() {
        this.health -= enemy.attack
        barraDeVidaPlayer[0].innerText = this.health + " hp / 100 hp"
    }

   attackMode() {
    let probCritico = Math.random();
    if (probCritico <= 0.05){
        this.attack = 60
    } else {
        this.attack = 20
    }
    return this.attack
    } 

    defend() {
      defenceStatusPersonaje = true 
    }
    
    healing() {
        this.health += this.heal
        if (this.health >= 100) {
            this.health = 100
            barraDeVidaPlayer[0].innerText = this.health + " hp / 100 hp"
        return this.health
    }
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
class Enemy {
    constructor() {
        this.width = 50;
        this.heigth = 50;
        this.health = 100;
        this.attack = 20;
        this.defence = 10;
        this.heal = 10;
        this.sprite = document.createElement('div')
    }

    insertEnemy() {
        this.sprite.setAttribute('id', 'Enemigo');
        inicio.appendChild(this.sprite);
    }

    receiveDamage(damage) {
        this.health -= damage
        barraDeVidaEnemigo[0].innerText = this.health + " hp / 100 hp"
    }

    attack() {
        return this.attack
    }

    defend() {
         defenceStatusEnemigo = true      
    }



    healing() {
        this.health += this.heal
        if (this.health >= 100) {
            this.health = 100
            barraDeVidaEnemigo[0].innerText = this.health + " hp / 100 hp"
        return this.health
    }
    return this.health
}


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

function zoroHealing (){
    zoro.setAttribute("src", "imagenes/zoro heal.gif")
    clearTimeout(zoroHealingId)
}
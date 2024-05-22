class Player {
    constructor() {
        this.width = 50;
        this.heigth = 50;
        this.health = 100;
        this.attack = 10;
        this.defence = 10;
        this.heal = 25;
        this.sprite = document.createElement('div')
    }

    insertPlayer() {
        this.sprite.setAttribute('id', 'Personaje');
        inicio.appendChild(this.sprite);
    }

    receiveDamage(damage) {
        this.health -= damage
        barraDeVidaPlayer[0].innerText = this.health
    }

    attack() {
       return this.attack
    }

    defend() {
        return this.defence
    }
}





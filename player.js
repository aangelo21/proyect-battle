class Player {
    constructor() {
        this.width = 50;
        this.heigth = 50;
        this.health = 100;
        this.attack = 20;
        this.defence = 10;
        this.heal = 20;
        this.sprite = document.createElement('div')
    }

    insertPlayer() {
        this.sprite.setAttribute('id', 'Personaje');
        inicio.appendChild(this.sprite);
    }

    receiveDamage() {
        this.health -= enemy.attack
        barraDeVidaPlayer[0].innerText = this.health
    }

    attack() {
       return this.attack
    }

    defend() {
      defenceStatusPersonaje = true 
    }
    
    healing() {
        this.health += this.heal
        if (this.health >= 100) {
            this.health = 100
            barraDeVidaPlayer[0].innerText = this.health
        return this.health
    }
}

}
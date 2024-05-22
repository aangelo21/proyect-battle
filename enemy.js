class Enemy {
    constructor() {
        this.width = 50;
        this.heigth = 50;
        this.health = 100;
        this.attack = 10;
        this.defence = 10;
        this.heal = 25;
        this.sprite = document.createElement('div')
    }

    insertEnemy() {
        this.sprite.setAttribute('id', 'Enemigo');
        inicio.appendChild(this.sprite);
    }

    receiveDamage(damage) {
        this.health -= damage
        barraDeVidaEnemigo[0].innerText = this.health
    }

    attack() {
        return this.attack
      
    }

    defend() {
        let damage = player.attack * 0
        return damage
       
    }



    healing() {
        this.health += this.heal
        console.log(this.health)
        if (this.health >= 100) {
            this.health = 100
            barraDeVidaEnemigo[0].innerText = this.health
        return this.health
    }
    return this.health
}


}


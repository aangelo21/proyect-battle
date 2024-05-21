class Player {
    constructor(x, y,) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.heigth = 50;
        this.life = 100;
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
        this.life -= damage
    }

    attack() {
       return this.attack
    }

    defend() {
        return this.defence
    }

    healing() {
        this.life += this.heal
    }
}





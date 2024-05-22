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

    receiveDamage() {
        console.log(enemy.attack)
        this.health -= enemy.attack
        barraDeVidaPlayer[0].innerText = this.health
    }

    attack() {
       return this.attack
    }

    defend() {
        console.log(defendStatus)
        if (defendStatus){
            let attackProtect = enemy.attack = 0
            console.log("me protegi")
            return attackProtect
        } else 
        return enemy.attack
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

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

    turnoEnemigo (){
        let enemigoTurno = Math.random()
        if (enemigoTurno <= 0.33){
         player.receiveDamage(this.attack)
         console.log("ataco")
         return this.attack
            
        } else if(enemigoTurno > 0.33 && enemigoTurno <= 0.66) {
            console.log("defiendo")
            return this.defend
        } else {
                this.healing()
                console.log("me curo")
                barraDeVidaEnemigo[0].innerText = this.health
                return this.health
            
        }
        
        
    }

    healing() {
        this.health += this.heal
        if (this.health >= 100) {
            this.health = 100
            console.log("me curo")
            barraDeVidaEnemigo[0].innerText = this.health
        return this.health
    }
}


}


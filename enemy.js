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
    }

    attack() {
        return this.attack
    }

    defend() {
        return this.defence
    }

    yourTurn(){
        
    }
    
    turnoEnemigo (){
        let enemigoTurno = Math.random()
        if (enemigoTurno <= 0.33){
            let enemigoAtacando = player.health -= enemy.attack
            if (enemigoAtacando <= 0){
                combate.style.display = "none"
                final.style.display = "flex"
            }
               return enemy.attack
        } else if(enemigoTurno > 0.33 && enemigoTurno <= 0.66) {
            return enemy.defend
        } else {
            let vidaTotalEnemy = enemy.health += enemy.heal
            if (vidaTotalEnemy >= 100) {
                vidaTotalEnemy = 100
                return vidaTotalEnemy
            }
        }
        return enemigoTurno
        
    }
}


function turnoEnemigo() {
    cambioPantalla();
    contador++;
    deshabilitarDefensa();
    console.log("Acaba el turno " + contador);
    let enemigoTurno = Math.random();
    if (enemigoTurno <= 0.33 && defenceStatusPersonaje === false) {
        zoro.setAttribute("src", "imagenes/zoro.attack.gif");
        console.log("El enemigo te ataca");
        player.receiveDamage(enemy.attack);
        comprobarDefensaEnemigo();
        cambioPantalla();
    } else if (enemigoTurno <= 0.33 && defenceStatusPersonaje === true) {
        zoro.setAttribute("src", "imagenes/zoro.attack.gif");
        zoroDefendingId = setTimeout(zoroDefending, 1200);
        console.log("El enemigo te rompe el escudo");
        defenceStatusPersonaje = false;
        luffyStandingId = setTimeout(luffyStanding, 1200);
        cambioPantalla();
    } else if (defenceStatusEnemigo === false && contador >= contadorShieldEnemy && enemigoTurno > 0.33 && enemigoTurno <= 0.66) {
        zoro.setAttribute("src", "imagenes/zoro defence.gif");
        console.log("El enemigo se está protegiendo");
        cambioPantalla();
        contadorShieldEnemy = contador + 3;
        console.log(contadorShieldEnemy);
        console.log(contador >= contadorShieldEnemy);
        return enemy.defend();
    } else if (enemy.health <= 90 && enemigoTurno > 0.66) {
        enemy.healing();
        zoro.setAttribute("src", "imagenes/zoro heal.gif");
        zoroStandingId = setTimeout(zoroStanding, 1200);
        console.log("El enemigo se está curando");
        barraDeVidaEnemigo[0].innerText = enemy.health + " hp / 100 hp";
        comprobarDefensaEnemigo();
        cambioPantalla();
        return enemy.health;
    } else if (defenceStatusPersonaje === true) {
        zoro.setAttribute("src", "imagenes/zoro.attack.gif");
        zoroDefendingId = setTimeout(zoroDefending, 1200);
        luffyStandingId = setTimeout(luffyStanding, 1200);
        console.log("El enemigo te rompe el escudo");
        defenceStatusPersonaje = false;
    } else if (defenceStatusPersonaje === false) {
        zoro.setAttribute("src", "imagenes/zoro.attack.gif");
        console.log("El enemigo te ataca");
        player.receiveDamage(enemy.attack);
        comprobarDefensaEnemigo();
        /* deshabilitarCura(); */
        cambioPantalla();
    }
}
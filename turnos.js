function turnoEnemigo() {
  cambioPantallaId = setTimeout(cambioPantalla, 2400)
  contador++;
  deshabilitarDefensa();
  console.log("Acaba el turno " + contador);
  let enemigoTurno = Math.random();
  if (enemigoTurno <= 0.33 && defenceStatusPersonaje === false) {
    zoro.setAttribute("src", "imagenes/zoro.attack.gif");
    console.log("El enemigo te ataca");
    player.receiveDamage(enemy.attack);
    comprobarDefensaEnemigo();
    cambioPantallaId = setTimeout(cambioPantalla, 2400)
  } else if (enemigoTurno <= 0.33 && defenceStatusPersonaje === true) {
    zoro.setAttribute("src", "imagenes/zoro.attack.gif");
    zoroDefendingId = setTimeout(zoroDefending, 1200);
    console.log("El enemigo te rompe el escudo");
    defenceStatusPersonaje = false;
    luffyStandingId = setTimeout(luffyStanding, 1200);
    cambioPantallaId = setTimeout(cambioPantalla, 2400)
  } else if (
    defenceStatusEnemigo === false &&
    contador >= contadorShieldEnemy &&
    enemigoTurno > 0.33 &&
    enemigoTurno <= 0.66
  ) {
    zoro.setAttribute("src", "imagenes/zoro defence.gif");
    console.log("El enemigo se está protegiendo");
    cambioPantallaId = setTimeout(cambioPantalla, 2400)
    contadorShieldEnemy = contador + 3;
    console.log(contadorShieldEnemy);
    console.log(contador >= contadorShieldEnemy);
    return enemy.defend();
  } else if (enemy.health <= 90 && enemigoTurno > 0.66) {
    enemy.healing();
    zoro.setAttribute("src", "imagenes/zoro heal.gif");
    zoroStandingId = setTimeout(zoroStanding, 1200);
    console.log("El enemigo se está curando");
    /* barraDeVidaEnemigo[0].innerText = enemy.health + " hp / 100 hp"; */
    zoroVida ()
    comprobarDefensaEnemigo();
    cambioPantallaId = setTimeout(cambioPantalla, 2400)
    return enemy.health;
  } else if (defenceStatusPersonaje === true && defenceStatusEnemigo === true) {
    zoro.setAttribute("src", "imagenes/zoro.attack.gif");
    
    luffyStandingId = setTimeout(luffyStanding, 1200);
    console.log("El enemigo te rompe el escudo");
    defenceStatusPersonaje = false;
    comprobarDefensaEnemigo();
  } else if (defenceStatusPersonaje === true && defenceStatusEnemigo === false) {
    zoro.setAttribute("src", "imagenes/zoro.attack.gif");
    luffyStandingId = setTimeout(luffyStanding, 1200);
    zoroDefendingId = setTimeout(zoroDefending, 1200);
    console.log("El enemigo te rompe el escudo");
    defenceStatusPersonaje = false;
    comprobarDefensaEnemigo();
  } else if (defenceStatusPersonaje === false) {
    zoro.setAttribute("src", "imagenes/zoro.attack.gif");
    console.log("El enemigo te ataca");
    player.receiveDamage(enemy.attack);
    comprobarDefensaEnemigo();
    /* deshabilitarCura(); */
    cambioPantallaId = setTimeout(cambioPantalla, 2400)
  }
}

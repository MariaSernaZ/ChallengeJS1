"use strict";

/*
1. crear evento keydown para localizar el keycode de las letras del teclado
2. localizar si el keycode de la letra pulsada coincide con el keycode de alguna de las pistas de audio
3. localizar el div con el keycode de la letra pulsada
4. añadir clase .playing al div de la letra
*/

document.addEventListener("keydown", playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //console.log(audio);
  //console.log(key);

  if (!audio) return; //detiene la función para separar los sonidos
  audio.currentTime = 0; //vuelve al inicio
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  //console.log(e);
  if (e.propertyName !== "transition") return; //saltar si no es transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key"); //es un Node list, NO un array
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

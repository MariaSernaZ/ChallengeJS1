"use strict";

window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //console.log(audio);
  if (!audio) return; //detiene la función para separar los sonidos
  audio.currentTime = 0; //vuelve al inicio
  audio.play();
  console.log(key);
});

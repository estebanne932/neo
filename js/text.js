const words = [
  "presencia que vende",
  "experiencias digitales",
  "marcas que destacan",
  "impacto visual",
  "estrategias que convierten"
];

let i = 0; // palabra
let j = 0; // letra
let currentWord = "";
let isDeleting = false;

const typingElement = document.querySelector(".typing");

function typeEffect() {
  currentWord = words[i];

  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, j--);
  } else {
    typingElement.textContent = currentWord.substring(0, j++);
  }

  let speed = isDeleting ? 50 : 90;

  if (!isDeleting && j === currentWord.length) {
    speed = 1500; // pausa cuando termina
    isDeleting = true;
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);
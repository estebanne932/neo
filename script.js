// pequeño efecto al hacer click en el botón
document.querySelector(".btn-primary").addEventListener("click", () => {
  alert("¡Vamos a empezar tu proyecto!");
});

const words = [
  "MARKETING",
  "FOTOGRAFÍA",
  "SOLUCIONES WEB"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const speed = 80;

function typeEffect() {
  currentWord = words[i];

  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  document.getElementById("typewriter").textContent = currentWord.substring(0, j);

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1200);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i++;
    if (i === words.length) i = 0;
  }

  setTimeout(typeEffect, isDeleting ? 40 : speed);
}

typeEffect();
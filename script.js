window.initScripts = function(){

  console.log("SCRIPT INICIADO");

  // =========================
  // BOTÓN HERO
  // =========================
  const btnHero = document.querySelector(".btn.primary");

  if(btnHero){
    btnHero.addEventListener("click", () => {
      alert("¡Vamos a empezar tu proyecto!");
    });
  }


  // =========================
  // TYPEWRITER
  // =========================
  const element = document.querySelector(".typing");

  if(element){

    const words = [
      { text: "IMPRESIONES", img: "img/impresiones.png" },
      { text: "ROTULACIÓN", img: "img/rotulo.png" },
      { text: "LETREROS LUMINOSOS", img: "img/letrero.png" },
      { text: "REDES SOCIALES", img: "img/socialmedia.png"},
      { text: "SOLUCIONES WEB", img: "img/web.png"}
    ];

    let i = 0;
    let j = 0;
    let isDeleting = false;

    function typeEffect(){

      const currentWord = words[i].text;

      j = isDeleting ? j-1 : j+1;

      element.textContent = currentWord.substring(0, j);

      if(!isDeleting && j === currentWord.length){
        isDeleting = true;

        const img = document.getElementById("heroImg");

        if(img){
          img.classList.add("fade");

          setTimeout(() => {
            img.src = words[i].img;
            img.classList.remove("fade");
          }, 300);
        }

        setTimeout(typeEffect, 1200);
        return;
      }

      if(isDeleting && j === 0){
        isDeleting = false;
        i++;
        if(i === words.length) i = 0;
      }

      setTimeout(typeEffect, isDeleting ? 40 : 100);
    }

    const imgInit = document.getElementById("heroImg");
    if(imgInit){
      imgInit.src = words[0].img;
    }

    typeEffect();
  }


  // =========================
  // SLIDER
  // =========================
  const slides = document.querySelectorAll(".slide");

  if(slides.length > 0){
    let index = 0;

    setInterval(() => {
      slides[index].classList.remove("active");

      index = (index + 1) % slides.length;

      slides[index].classList.add("active");

    }, 3500);
  }

  // =========================
// STATS (CONTADOR)
// =========================
const stats = document.querySelectorAll(".stat-item");

if(stats.length > 0){

  function animateStats(){

    stats.forEach((stat, index) => {

      const rect = stat.getBoundingClientRect();

      if(rect.top < window.innerHeight - 80){

        // animación de entrada
        setTimeout(() => {
          stat.classList.add("show");
        }, index * 150);

        const number = stat.querySelector("h3");

        if(number && !number.classList.contains("counted")){

          number.classList.add("counted");

          const target = parseInt(number.getAttribute("data-target")) || 0;

          let count = 0;
          const increment = target / 100;

          function updateCount(){
            count += increment;

            if(count < target){
              number.textContent = Math.floor(count) + getSuffix(number);
              requestAnimationFrame(updateCount);
            } else {
              number.textContent = target + getSuffix(number);
            }
          }

          updateCount();
        }

      }

    });

  }

  window.addEventListener("scroll", animateStats);
  animateStats();

  function getSuffix(el){
    if(el.textContent.includes("k")) return "k";
    if(el.textContent.includes("+")) return "+";
    return "";
  }
}

  // =========================
  // ANIMACIÓN CARDS
  // =========================
  const cards = document.querySelectorAll(".pricing-card");

  if(cards.length > 0){

    function showCards(){
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();

        if(rect.top < window.innerHeight - 100){
          setTimeout(() => {
            card.classList.add("show");
          }, index * 120);
        }
      });
    }

    window.addEventListener("scroll", showCards);
    showCards();
  }


  // =========================
  // SWITCH PRODUCTOS
  // =========================
  const buttons = document.querySelectorAll(".switch-btn");
  const panels = document.querySelectorAll(".pricing-panel");

  if(buttons.length > 0 && panels.length > 0){

    buttons.forEach(button => {

      button.addEventListener("click", () => {

        buttons.forEach(b => b.classList.remove("active"));
        button.classList.add("active");

        panels.forEach(p => p.classList.remove("active"));

        const target = document.getElementById(button.dataset.target);

        if(target){
          target.classList.add("active");
        }

      });

    });

  }

};
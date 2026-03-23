function initScripts(){

  console.log("SCRIPT INICIADO"); // debug


  // BOTÓN HERO
  const btn = document.querySelector(".btn.primary");

  if(btn){
    btn.addEventListener("click", () => {
      alert("¡Vamos a empezar tu proyecto!");
    });
  }


  // TYPEWRITER (SEGURO)
  const element = document.querySelector(".typing");

  if(element){

    const words = [
      { text: "MARKETING", img: "img/rotulo.png" },
      { text: "FOTOGRAFÍA", img: "img/camara.png" },
      { text: "SOLUCIONES WEB", img: "img/letrero.png" }
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


  // SLIDER
  const slides = document.querySelectorAll(".slide");

  if(slides.length){
    let index = 0;

    setInterval(() => {
      slides[index].classList.remove("active");

      index++;
      if(index >= slides.length) index = 0;

      slides[index].classList.add("active");

    }, 3500);
  }

  // 🔥 ANIMACIÓN CARDS
const cards = document.querySelectorAll(".digital-card");

function showCards(){
  cards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();

    if(rect.top < window.innerHeight - 80){
      setTimeout(() => {
        card.classList.add("show");
      }, index * 100);
    }
  });
}

window.addEventListener("scroll", showCards);
showCards();

// 🔥 SHOWCASE STATS
const stats = document.querySelectorAll(".stat-item");

function animateStats(){

  stats.forEach((stat, index) => {

    const rect = stat.getBoundingClientRect();

    if(rect.top < window.innerHeight - 80){

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


  // 🔥 CARDS (ULTRA SEGURAS)
  document.querySelectorAll(".card-header").forEach(header => {

    header.addEventListener("click", () => {

      const card = header.closest(".digital-card");
      if(!card) return;

      const content = card.querySelector(".card-content");
      if(!content) return;

      const isOpen = card.classList.contains("active");

      document.querySelectorAll(".digital-card").forEach(c => {
        c.classList.remove("active");

        const cContent = c.querySelector(".card-content");
        if(cContent){
          cContent.style.maxHeight = null;
        }
      });

      if(!isOpen){
        card.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      }

    });

  });


  // SWITCH PRODUCTOS
  const buttons = document.querySelectorAll(".switch-btn");
  const panels = document.querySelectorAll(".products-panel");

  buttons.forEach(btn => {

    btn.addEventListener("click", () => {

      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      panels.forEach(p => p.classList.remove("active"));

      const target = document.getElementById(btn.dataset.target);
      if(target){
        target.classList.add("active");
      }

    });

  });


  // TEXTO CURVO
  const textPath = document.getElementById("textPath");

  if(textPath){

    let start = null;

    function animateText(timestamp){

      if(!start) start = timestamp;

      let progress = (timestamp - start) * 0.01;
      let offset = progress % 100;

      textPath.setAttribute("startOffset", offset + "%");

      requestAnimationFrame(animateText);
    }

    requestAnimationFrame(animateText);
  }

}


// HERO ENTRY
document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".hero-content");

  if(content){
    setTimeout(() => {
      content.style.opacity = "1";
      content.style.transform = "translateY(0)";
    }, 200);
  }
});


// INIT
document.addEventListener("DOMContentLoaded", initScripts);
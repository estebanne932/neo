function loadSection(id, file) {
  return fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

Promise.all([
  loadSection("navbar", "sections/navbar.html"),
  loadSection("hero", "sections/hero.html"),
  loadSection("showcase", "sections/showcase.html"),
  loadSection("products", "sections/products.html"),
  loadSection("fotografia", "sections/fotografia.html"),
  loadSection("logotipos", "sections/logotipos.html"),
  loadSection("letreros", "sections/letreros.html")
]).then(() => {

  console.log("SECCIONES CARGADAS"); // 👈 prueba

  initScripts(); // 👈 clave

});
(function () {
  "use strict";

  var DATA_URL = "/assets/data/caed.json";

  function render(data) {
    var el = document.querySelector("#caed-content");
    if (!el) return;

    var paragrafosHtml = data.paragrafos.map(function (p) { return "<p>" + p + "</p>"; }).join("");

    el.innerHTML =
      '<div class="container"><div class="row align-items-center">' +
        '<div class="col-lg-6 hero-content" data-aos="fade-right" data-aos-delay="100">' +
          "<h1>" + data.titulo + "</h1>" + paragrafosHtml +
        "</div>" +
        '<div class="col-lg-6 hero-media" data-aos="zoom-in" data-aos-delay="200">' +
          '<img src="' + data.imagem.src + '" alt="' + data.imagem.alt + '" class="img-fluid main-image">' +
        "</div>" +
      "</div></div>";

    if (window.AOS) window.AOS.refresh();
  }

  fetch(DATA_URL)
    .then(function (r) {
      if (!r.ok) throw new Error("Falha ao carregar caed.json");
      return r.json();
    })
    .then(render)
    .catch(function (err) {
      console.error("caed.js:", err);
    });
})();

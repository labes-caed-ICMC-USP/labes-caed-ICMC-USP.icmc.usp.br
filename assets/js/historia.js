(function () {
  "use strict";

  var DATA_URL = "/assets/data/historia.json";

  function renderHero(d) {
    var el = document.querySelector("#hero-labes-content");
    if (!el || !d) return;

    var featuresHtml = d.features.map(function (f, i) {
      return '<div class="feature-item" data-aos="fade-right" data-aos-delay="' + (800 + i * 100) + '">' +
        '<i class="bi bi-check-circle-fill"></i>' +
        "<span>" + f + "</span>" +
        "</div>";
    }).join("");

    var galeriaHtml = d.galeria.map(function (g, i) {
      var tag = i === 0 ? "h5" : "h6";
      return '<div class="gallery-item ' + g.tamanho + '" data-aos="zoom-in" data-aos-delay="' + (800 + i * 100) + '">' +
        '<img src="' + g.src + '" alt="' + g.alt + '" class="img-fluid" loading="lazy">' +
        '<div class="gallery-overlay"><' + tag + ">" + g.legenda + "</" + tag + "></div>" +
        "</div>";
    }).join("");

    el.innerHTML =
      '<div class="row mt-5"><div class="col-lg-12">' +
        '<div class="highlights-section" data-aos="fade-up" data-aos-delay="700">' +
          '<div class="row align-items-center">' +
            '<div class="col-lg-6"><div class="highlights-content">' +
              '<h3 class="highlights-title">' + d.titulo + "</h3>" +
              '<p class="highlights-text">' + d.descricao + "</p>" +
              '<div class="highlights-features">' + featuresHtml + "</div>" +
              '<div class="highlights-cta">' +
                '<a href="' + d.cta.href + '" class="cta-btn primary" target="_blank" rel="noopener noreferrer">' + d.cta.label + "</a>" +
              "</div>" +
            "</div></div>" +
            '<div class="col-lg-6"><div class="highlights-gallery"><div class="gallery-grid">' +
              galeriaHtml +
            "</div></div></div>" +
          "</div>" +
        "</div>" +
      "</div></div>";
  }

  function renderHistoria(d) {
    var el = document.querySelector("#about-history-content");
    if (!el || !d) return;

    var timelineHtml = d.timeline.map(function (item) {
      var corpo = item.itens
        ? item.itens.map(function (it) { return "<p>" + it + "</p>"; }).join("")
        : "<p>" + item.texto + "</p>";
      return '<div class="timeline-item">' +
        '<div class="timeline-dot"></div>' +
        '<div class="timeline-content"><h4>' + item.ano + "</h4>" + corpo + "</div>" +
        "</div>";
    }).join("");

    el.innerHTML =
      '<div class="row align-items-center g-5">' +
        '<div class="col-lg-6">' +
          '<div class="about-content" data-aos="fade-up" data-aos-delay="200">' +
            "<h3>" + d.subtitulo + "</h3>" +
            "<h2>" + d.titulo + "</h2>" +
            "<p>" + d.descricao + "</p>" +
            '<div class="timeline">' + timelineHtml + "</div>" +
          "</div>" +
        "</div>" +
        '<div class="col-lg-6">' +
          '<div class="about-image" data-aos="zoom-in" data-aos-delay="300">' +
            '<img src="' + d.imagem.src + '" alt="' + d.imagem.alt + '" class="img-fluid rounded">' +
            '<div class="mission-vision" data-aos="fade-up" data-aos-delay="400">' +
              '<div class="mission"><h3>' + d.missao.titulo + "</h3><p>" + d.missao.texto + "</p></div>" +
              '<div class="vision"><h3>' + d.visao.titulo + "</h3><p>" + d.visao.texto + "</p></div>" +
            "</div>" +
          "</div>" +
        "</div>" +
      "</div>";
  }

  function renderVidaEstudantil(d) {
    var el = document.querySelector("#vida-estudantil-content");
    if (!el || !d) return;

    var infoGridHtml = d.infoGrid.map(function (item) {
      return '<div class="info-item">' +
        '<div class="info-icon"><i class="bi ' + item.icone + '"></i></div>' +
        '<div class="info-text"><strong>' + item.titulo + "</strong><span>" + item.texto + "</span></div>" +
        "</div>";
    }).join("");

    var atividadesHtml = d.atividades.map(function (a, i) {
      return '<div class="activity-item" data-aos="slide-up" data-aos-delay="' + (350 + i * 50) + '">' +
        '<div class="activity-thumb"><img src="' + a.src + '" alt="' + a.alt + '" class="img-fluid"></div>' +
        '<div class="activity-info"><h6>' + a.titulo + "</h6><p>" + a.descricao + "</p></div>" +
        "</div>";
    }).join("");

    el.innerHTML =
      '<div class="container section-title" data-aos="fade-up"><h2>Vida Estudantil</h2></div>' +
      '<div class="container" data-aos="fade-up" data-aos-delay="100">' +
        '<div class="row align-items-center g-5 mb-5">' +
          '<div class="col-lg-5" data-aos="fade-right" data-aos-delay="200">' +
            '<div class="hero-image-wrapper">' +
              '<img src="' + d.imagem.src + '" alt="' + d.imagem.alt + '" class="img-fluid main-image">' +
              '<div class="floating-card" data-aos="zoom-in" data-aos-delay="400">' +
                '<div class="card-icon"><i class="bi bi-people-fill"></i></div>' +
                '<div class="card-content">' +
                  '<span class="card-number">+' + d.estudantesAtivos + "</span>" +
                  '<span class="card-label">Estudantes Ativos</span>' +
                "</div>" +
              "</div>" +
            "</div>" +
          "</div>" +
          '<div class="col-lg-7" data-aos="fade-left" data-aos-delay="300">' +
            '<div class="content-wrapper">' +
              '<div class="section-badge" data-aos="fade-up" data-aos-delay="350"><span>' + d.badge + "</span></div>" +
              '<h2 data-aos="fade-up" data-aos-delay="400">' + d.titulo + "</h2>" +
              '<p class="lead-text" data-aos="fade-up" data-aos-delay="450">' + d.descricao + "</p>" +
              '<div class="info-grid" data-aos="fade-up" data-aos-delay="500">' + infoGridHtml + "</div>" +
            "</div>" +
          "</div>" +
        "</div>" +
        '<div class="activities-showcase"><div class="row g-4">' +
          '<div class="col-lg-6 mb-3" data-aos="fade-right" data-aos-delay="200">' +
            '<div class="featured-activity"><div class="activity-media">' +
              '<img src="' + d.destaque.src + '" alt="' + d.destaque.alt + '" class="img-fluid">' +
              '<div class="activity-overlay"><div class="overlay-content">' +
                "<h4>" + d.destaque.titulo + "</h4><p>" + d.destaque.descricao + "</p>" +
              "</div></div>" +
            "</div></div>" +
          "</div>" +
          '<div class="col-lg-6" data-aos="fade-left" data-aos-delay="300">' +
            '<div class="activities-list">' + atividadesHtml + "</div>" +
          "</div>" +
        "</div></div>" +
      "</div>";
  }

  function renderICMC(d) {
    var el = document.querySelector("#icmc-hero-content");
    if (!el || !d) return;

    var paragrafosHtml = d.paragrafos.map(function (p) { return "<p>" + p + "</p>"; }).join("");

    el.innerHTML =
      '<div class="container"><div class="row align-items-center">' +
        '<div class="col-lg-6 hero-content" data-aos="fade-right" data-aos-delay="100">' +
          "<h1>" + d.titulo + "</h1>" + paragrafosHtml +
        "</div>" +
        '<div class="col-lg-6 hero-media" data-aos="zoom-in" data-aos-delay="200">' +
          '<img src="' + d.imagem.src + '" alt="' + d.imagem.alt + '" class="img-fluid main-image">' +
          '<div class="image-overlay"><div class="badge-accredited">' +
            '<i class="bi bi-patch-check-fill"></i><span>' + d.badge + "</span>" +
          "</div></div>" +
        "</div>" +
      "</div></div>";
  }

  fetch(DATA_URL)
    .then(function (r) {
      if (!r.ok) throw new Error("Falha ao carregar historia.json");
      return r.json();
    })
    .then(function (data) {
      renderHero(data.hero);
      renderHistoria(data.historia);
      renderVidaEstudantil(data.vidaEstudantil);
      renderICMC(data.icmc);
      if (window.AOS) window.AOS.refresh();
    })
    .catch(function (err) {
      console.error("historia.js:", err);
    });
})();

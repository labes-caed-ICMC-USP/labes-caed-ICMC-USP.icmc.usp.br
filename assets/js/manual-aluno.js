(function () {
  "use strict";

  var DATA_URL = "/assets/data/manual-aluno.json";

  function renderComoIngressar(d) {
    var el = document.querySelector("#como-ingressar-content");
    if (!el || !d) return;

    var paragrafosHtml = d.paragrafos.map(function (p) { return "<p>" + p + "</p>"; }).join("");

    el.innerHTML =
      '<div class="row">' +
        '<div class="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="200">' +
          '<img src="' + d.imagem.src + '" class="img-fluid rounded" alt="' + d.imagem.alt + '">' +
        "</div>" +
        '<div class="col-lg-6" data-aos="fade-left" data-aos-delay="300">' +
          '<div class="student-life-intro">' +
            "<h3>" + d.titulo + "</h3>" +
            paragrafosHtml +
            '<div class="mt-4">' +
              '<a href="' + d.cta.href + '" class="btn btn-outline-primary" target="_blank">' + d.cta.label + "</a>" +
            "</div>" +
          "</div>" +
        "</div>" +
      "</div>";
  }

  function renderInfraestrutura(d) {
    var el = document.querySelector("#infraestrutura-content");
    if (!el || !d) return;

    var itensHtml = d.itens.map(function (item, i) {
      var card =
        '<div class="facility-card">' +
          '<img src="' + item.img + '" class="img-fluid" alt="' + item.alt + '">' +
          '<div class="facility-info"><h5>' + item.titulo + "</h5><p>" + item.descricao + "</p></div>" +
        "</div>";

      var inner = item.link
        ? '<a href="' + item.link + '" target="_blank" style="text-decoration:none;color:inherit;">' + card + "</a>"
        : card;

      return '<div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="' + (100 + i * 100) + '">' + inner + "</div>";
    }).join("");

    el.innerHTML =
      '<h3 class="text-center mb-4">' + d.titulo + "</h3>" +
      '<div class="row g-4">' + itensHtml + "</div>";
  }

  function renderServicos(d) {
    var el = document.querySelector("#servicos-content");
    if (!el || !d) return;

    var itensHtml = d.itens.map(function (item, i) {
      return '<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="' + (100 + i * 100) + '">' +
        '<div class="service-card">' +
          '<div class="icon-box"><i class="bi ' + item.icone + '"></i></div>' +
          "<h5>" + item.titulo + "</h5>" +
          "<p>" + item.descricao + "</p>" +
          '<a href="' + item.link + '" target="_blank" class="service-link">Saiba mais <i class="bi bi-arrow-right"></i></a>' +
        "</div>" +
      "</div>";
    }).join("");

    el.innerHTML =
      '<h3 class="text-center mb-4">' + d.titulo + "</h3>" +
      '<div class="row g-4">' + itensHtml + "</div>";
  }

  fetch(DATA_URL)
    .then(function (r) {
      if (!r.ok) throw new Error("Falha ao carregar manual-aluno.json");
      return r.json();
    })
    .then(function (data) {
      renderComoIngressar(data.comoIngressar);
      renderInfraestrutura(data.infraestrutura);
      renderServicos(data.servicos);
      if (window.AOS) window.AOS.refresh();
    })
    .catch(function (err) {
      console.error("manual-aluno.js:", err);
    });
})();

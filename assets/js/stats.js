(function () {
  "use strict";

  var DATA_URL = "/assets/data/stats.json";

  function renderCard(item, delay) {
    var sufixo = item.sufixo || "";
    return '<div class="col-xl-3 col-lg-6 col-md-6">' +
      '<div class="metric-card" data-aos="flip-left" data-aos-delay="' + delay + '">' +
        '<div class="metric-header">' +
          '<div class="metric-icon-wrapper"><i class="bi ' + item.icone + '"></i></div>' +
          '<div class="metric-value">' +
            '<span data-purecounter-start="0" data-purecounter-end="' + item.valor +
              '" data-purecounter-duration="1" class="purecounter"></span>' + sufixo +
          "</div>" +
        "</div>" +
        '<div class="metric-info"><h4>' + item.label + "</h4></div>" +
      "</div>" +
    "</div>";
  }

  function render(data) {
    var el = document.querySelector("#stats-numeros-content");
    if (!el) return;

    var concluidosHtml = data.concluidos.map(function (item, i) {
      return renderCard(item, 300 + i * 100);
    }).join("");

    var andamentoHtml = data.emAndamento.map(function (item, i) {
      return renderCard(item, 300 + i * 100);
    }).join("");

    el.innerHTML =
      '<div class="row justify-content-center">' +
        '<div class="col-lg-8 text-center">' +
          '<div class="intro-content" data-aos="fade-up" data-aos-delay="200">' +
            '<h2 class="section-heading">Alunos e Participação no Laboratório</h2>' +
            '<p class="section-description">' + data.descricao + "</p>" +
          "</div>" +
        "</div>" +
      "</div>" +
      '<div class="container section-title mt-4 pb-0" data-aos="fade-up"><h2>Concluídos</h2></div>' +
      '<div class="row g-4 mt-4 justify-content-center">' + concluidosHtml + "</div>" +
      '<div class="container section-title mt-5 pb-0" data-aos="fade-up"><h2>Em Andamento</h2></div>' +
      '<div class="row g-4 mt-4 pb-5">' + andamentoHtml + "</div>";

    if (window.PureCounter) new PureCounter();
    if (window.AOS) window.AOS.refresh();
  }

  fetch(DATA_URL)
    .then(function (r) {
      if (!r.ok) throw new Error("Falha ao carregar stats.json");
      return r.json();
    })
    .then(render)
    .catch(function (err) {
      console.error("stats.js:", err);
    });
})();

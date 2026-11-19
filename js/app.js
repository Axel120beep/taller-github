$(function () {
  const $lista = $("#lista");
  const $vacio = $("#vacio");

  // Crea una tarjeta por cada persona de estudiantes.js
  ESTUDIANTES.forEach(function (persona) {
    const $tarjeta = $("<li>")
      .addClass("tarjeta")
      .attr("data-nombre", persona.nombre.toLowerCase());
    $("<span>").addClass("emoji").text(persona.emoji).appendTo($tarjeta);
    $("<a>")
      .text(persona.nombre)
      .attr("href", "estudiantes/" + persona.carpeta + "/index.html")
      .appendTo($tarjeta);
    $lista.append($tarjeta);
  });

  // Filtra las tarjetas mientras escribes en el buscador
  $("#buscador").on("input", function () {
    const texto = $(this).val().toLowerCase().trim();
    $lista.children().each(function () {
      const coincide = $(this).attr("data-nombre").indexOf(texto) !== -1;
      $(this).toggle(coincide);
    });
    $vacio.prop("hidden", $lista.children(":visible").length > 0);
  });
});

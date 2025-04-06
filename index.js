const lupa = document.querySelector(".search-icon");

lupa.addEventListener("click", function () {
  const valor = document.querySelector(".search-input").value;
  const resultado = document.querySelector(".search-result");

  if (valor.trim() === "") {
    resultado.textContent = "Por favor, digite algo para pesquisar.";
    resultado.style.color = "#dc3545";
  } else {
    resultado.textContent = `🔍 Você pesquisou por: "${valor}"`;
    resultado.style.color = "#007bff";
  }
});

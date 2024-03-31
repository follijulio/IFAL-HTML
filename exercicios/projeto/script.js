fetch("./filmes.json")
  .then((response) => response.json())
  .then((data) => {
    const secaoPaginas = document.querySelector(".secao_paginas");
    data.forEach((filme) => {
      const button = document.createElement("button");
      button.textContent = filme.titulo;
      button.addEventListener("click", () => {
        carregarPagina(filme.id);
      });
      secaoPaginas.appendChild(button);
    });
  })
  .catch((error) =>
    console.error("Erro ao carregar os dados do filme:", error)
  );

function carregarPagina(id) {
  fetch("./filmes.json")
    .then((response) => response.json())
    .then((data) => {
      const filme = data.find((item) => item.id == id);
      window.location.href = `modelo.html?id=${filme.id}`;
    })
    .catch((error) =>
      console.error("Erro ao carregar os dados do filme:", error)
    );
}

const id = new URLSearchParams(window.location.search).get("id");

fetch("./filmes.json")
  .then((response) => response.json())
  .then((data) => {
    const filme = data[id - 1];
    document.getElementById("titulo").textContent = filme.titulo;
    document.getElementById("foto").src = filme.foto;
    document.getElementById("texto_1").textContent = filme.texto1;
    document.getElementById("texto_2").textContent = filme.texto2;
    document.getElementById("autor").textContent = filme.autor;
    document.getElementById("lancamento").textContent = filme.lancamento;
  })
  .catch((error) => {
    const infos_adicionais = document.querySelector(".titulo");
    const button = document.createElement("button");
    button.textContent = "VOLTAR A PÁGINA INICIAL";
    button.addEventListener("click", () => {
      carregarPaginaInicial();
    });
    infos_adicionais.appendChild(button);
    console.error("Erro ao carregar os filmes:", error);
  });

function carregarPaginaInicial() {
  window.location.replace("index.html");
}
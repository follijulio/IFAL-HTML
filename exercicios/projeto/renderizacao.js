const params = new URLSearchParams(window.location.search);
    const titulo = params.get("titulo");
    const foto = params.get("foto");
    const texto_1 = params.get("texto1");
    const texto_2 = params.get("texto2");
    const autor = params.get("autor");
    const lancamento = params.get("lancamento");

    document.getElementById("titulo").textContent = titulo;
    document.getElementById("foto").src = foto;
    document.getElementById("texto_1").textContent = texto_1;
    document.getElementById("texto_2").textContent = texto_2;
    document.getElementById("autor").textContent = autor;
    document.getElementById("lancamento").textContent = lancamento;
var juros = 0, desconto = 0;

function opcao(valor_opcao) {
    desconto = 0, juros = 0;
    if(valor_opcao === 1){
        desconto = 10
    } else if(valor_opcao === 2){
        desconto = 15;
    } else if(valor_opcao === 4){
        juros = 10;
    }
}

function calcular() {
        var valor_inicial = parseFloat(document.getElementById('tela').value)
        var valor_final = ((valor_inicial/100)*juros) - ((valor_inicial/100)*desconto) + valor_inicial;
        document.getElementById("tela_pagamento").value = valor_final;
}
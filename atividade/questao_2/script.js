function calcular() {
    var tipo = '';
    var A = parseInt(document.getElementById("A").value);
    var B = parseInt(document.getElementById("B").value);
    var C;
    if (A === B) {
        tipo = 'soma'
        C = soma(A, B)
    } else {
        tipo = 'multiplicação'
        C = mult(A, B)
    }

    document.getElementById('C').value = C;
    
    const resultado = `Valor de A: ${A}\nValor de B: ${B}\nValor de C: ${C}\nTipo de cálculo feito: ${tipo}`;


    const blob = new Blob([resultado], {
        type: 'text/plain;charset=utf-8'
    });


    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resultado.txt';
    link.click();
}


function soma(A, B) {
    return A + B;
}

function mult(A, B) {
    return A * B;
}
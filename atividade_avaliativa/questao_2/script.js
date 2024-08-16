function calcular() {
    var A = parseInt(document.getElementById("A").value);
    var B = parseInt(document.getElementById("B").value);
    var C;
    if (A === B) {
        C = soma(A, B)
    } else {
        C = mult(A, B)
    }

    document.getElementById('C').value = C;

}


function soma(A, B) {
    return A + B;
}

function mult(A, B) {
    return A * B;
}
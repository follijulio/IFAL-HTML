var porcentagem;

function calcular() {
  var saldo_medio = document.getElementById("saldo_medio").value;

  if (saldo_medio <= 500) {
    porcentagem = 0;
  } else if (saldo_medio >= 501 && saldo_medio <= 1000) {
    porcentagem = 30;
  } else if (saldo_medio >= 1001 && saldo_medio <= 3000) {
    porcentagem = 40;
  } else if (saldo_medio >= 3001) {
    porcentagem = 50;
  }
  porcentagem += 2;
  console.log(`porcentagem: ${porcentagem}`);
  valor_pagar = parseFloat((saldo_medio / 100) * porcentagem);
  document.getElementById("pagamento").value = valor_pagar;
  document.getElementById("pagamento2").value = saldo_medio;

  const resultado = `Saldo Médio: ${saldo_medio}\nCrédito ${valor_pagar}`;



  const blob = new Blob([resultado], {
    type: 'text/plain;charset=utf-8'
  });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'resultado.txt';
  link.click();
}
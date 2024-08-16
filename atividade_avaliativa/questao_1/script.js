 var porcentagem

 function calcular() {

     var valor_inicial = document.getElementById('valor_inicial').value

     if (valor_inicial <= 500) {
         porcentagem = 0
     } else if (valor_inicial >= 501 && valor_inicial <= 1000) {
         porcentagem = 30;
     } else if (valor_inicial >= 1001 && valor_inicial <= 3000) {
         porcentagem = 40;
     } else if (valor_inicial >= 3001) {
         porcentagem = 50;
     }
     porcentagem += 2
     console.log(`porcentagem: ${porcentagem}`)
     valor_pagar = parseFloat(((valor_inicial / 100) * porcentagem) )
     document.getElementById('pagamento').value = valor_pagar
     document.getElementById('pagamento2').value = valor_inicial
 }
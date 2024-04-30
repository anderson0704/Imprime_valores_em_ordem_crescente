function ordenarCrescente(valores) {
    return valores.sort(function(a, b) {
        return a - b;
    });
}

function imprimirOrdemCrescente() {
    var valores = [];

   
    for (var i = 0; i < 5; i++) {
        var valor = parseInt(prompt("Digite o valor " + (i + 1) + ":"));
        valores.push(valor);
    }

   
    var valoresOrdenados = ordenarCrescente(valores);

    
    console.log("Valores em ordem crescente:");
    for (var j = 0; j < valoresOrdenados.length; j++) {
        console.log(valoresOrdenados[j]);
    }
}

imprimirOrdemCrescente();
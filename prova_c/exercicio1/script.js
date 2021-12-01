function buscaValor() {
    var valores = new Array(1, 5, 8, 6, 4, 9, 12, 54, 32, 56, 0, 14, 90, 100, 345, 35, 23);

    var f_cad = document.f_cad;
    var valor = parseInt(f_cad.valor.value);

    if (isNaN(valor)) {
        alert("Informe um valor para busca");
        return;
    }

    var idx = valores.findIndex(c => c === valor);
    if (idx >= 0) {
        document.getElementById("resposta").innerHTML = `<div><span>Valor encontrado na posição:</span> ${idx}</div>`;
    } else {
        document.getElementById("resposta").innerHTML = `<div><span>Valor não encontrado</span></div>`;
    }

}
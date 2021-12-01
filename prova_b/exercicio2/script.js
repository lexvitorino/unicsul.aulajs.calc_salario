function calcular() {
    var f_cad = document.f_cad;
    var first = parseFloat(f_cad.first.value);
    var second = parseFloat(f_cad.second.value);
    var tmedia = f_cad.tmedia.value;

    if (isNaN(first)) {
        alert("Primeiro não informado");
        return;
    } else if (isNaN(second)) {
        alert("Segundo não informado");
        return;
    }

    var resposta = 0;
    switch (tmedia) {
        case "ma":
            resposta = (first + second) / first;
            document.getElementById("divres").innerHTML = `<div><span>A média aritimética é:</span> ${resposta.toFixed(3)}</div>`;
            break;
        case "mp":
            resposta = (first + second * first) / 3;
            document.getElementById("divres").innerHTML = `<div><span>A média ponderada é:</span> ${resposta.toFixed(3)}</div>`;
            break;
    }
}
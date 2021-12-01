function calcula() {
    var f_cad = document.f_cad;
    var porhora = parseFloat(f_cad.porhora.value);
    var horastrab = parseInt(f_cad.horastrab.value);
    var qtdfilhos = parseInt(f_cad.qtdfilhos.value);

    if (!porhora || porhora === 0) {
        alert("Salário por hora não informado");
        return;
    } else if (!horastrab || horastrab === 0) {
        alert("Qtd. de horas trabalhadas");
        return;
    } else if (!qtdfilhos || qtdfilhos === 0) {
        alert("Qtd. de filho");
        return;
    }

    var resposta = porhora * horastrab;
    var respostaporfilho = 0.0;
    if (resposta <= 750) {
        respostaporfilho = qtdfilhos * 23.5;
    } else if (resposta <= 1500) {
        respostaporfilho = qtdfilhos * 12.5;
    } else {
        respostaporfilho = qtdfilhos * 4.5;
    }

    document.getElementById("resposta").innerHTML = `
            <div><span>Salário bruto:</span> ${resposta.toFixed(2)}</div>
            <div><span>Salário familia:</span> ${respostaporfilho.toFixed(2)}</div>
    `;
}
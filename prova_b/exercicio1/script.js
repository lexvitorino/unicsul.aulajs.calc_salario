function verificaMaior() {
    var numbers = [];

    var f_cad = document.f_cad;
    var numero1 = parseFloat(f_cad.numero1.value);
    var numero2 = parseFloat(f_cad.numero2.value);
    var numero3 = parseFloat(f_cad.numero3.value);
    var numero4 = parseFloat(f_cad.numero4.value);
    var numero5 = parseFloat(f_cad.numero5.value);

    if (isNaN(numero1)) {
        alert("Número 1 não informado");
        return;
    } else if (isNaN(numero2)) {
        alert("Número 2 não informado");
        return;
    } else if (isNaN(numero3)) {
        alert("Número 3 não informado");
        return;
    } else if (isNaN(numero4)) {
        alert("Número 4 não informado");
        return;
    } else if (isNaN(numero5)) {
        alert("Número 5 não informado");
        return;
    }

    numbers.push(numero1);
    numbers.push(numero2);
    numbers.push(numero3);
    numbers.push(numero4);
    numbers.push(numero5);

    var resposta = numbers.reduce((a, b) => {
        return Math.max(a, b);
    });

    document.getElementById("resposta").setAttribute('value', `O maior número é o ${resposta}`);
}
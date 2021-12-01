var dados = [];

function gravar() {
    var f_cad = document.f_cad;
    var idn = parseInt(f_cad.idn.value);
    var idm = parseInt(f_cad.idm.value);

    if (isNaN(idn)) {
        alert("Idn não informado");
        return;
    } else if (isNaN(idm)) {
        alert("Idm não informado");
        return;
    }

    var x = 0;
    var ires = 0;
    var resultado = '';

    if (idn > idm) {
        x = idn;
    } else {
        x = idm;
    }

    for (let index = 1; index <= x; index++) {
        if (!resultado) {
            resultado += `${index}x${index}`;
        } else {
            resultado += ` + ${index}x${index}`;
        }
        ires += index * index;
    }

    document.getElementById("txtres").innerHTML = `<div><span>${resultado} = ${ires}</span></div>`;
}

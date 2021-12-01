var dados = [];

function gravar() {
    var f_cad = document.f_cad;
    var nome = f_cad.nome.value;
    var altura = f_cad.altura.value;

    if (!nome) {
        alert("Nome não informado");
        return;
    } else if (!altura) {
        alert("Altura não informado");
        return;
    }

    dados.push({ nome, altura });

    alert("Salvo com sucesso!");
    document.getElementById("f_cad").reset();

    var textarea = document.getElementsByTagName("textarea");
    if (!!textarea && textarea.length > 0)
        mostrar();
}

function mostrar() {
    var texto = "";

    dados.forEach(d => {
        texto += `${d.nome}, ${d.altura} \n`;
    });

    document.getElementById("resposta").innerHTML = `
            <textarea readonly>${texto}</textarea>
    `;
}
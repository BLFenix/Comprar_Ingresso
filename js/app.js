function comprar(){
    let selectTipIngress = document.getElementById("tipo-ingresso");
    let tipoIngresso = selectTipIngress.value;
    let quantidade;
    if (parseInt(document.getElementById("qtd").value) > 0) {
        quantidade = parseInt(document.getElementById("qtd").value);
    }else {
        alert("Erro! O valor fornecido é inválido");
        limparCampos();
        return 0;
    }
    let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
    let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent);
    let novoValor;
    
    if (tipoIngresso == "inferior") {
        novoValor = gerarNovoValor(qtdInferior, quantidade);

        verificarNovoValor(novoValor, "qtd-inferior");
    }else if (tipoIngresso == "superior") {
        novoValor = gerarNovoValor(qtdSuperior, quantidade);

        verificarNovoValor(novoValor, "qtd-superior");
    }else {
        novoValor = gerarNovoValor(qtdPista, quantidade);

        verificarNovoValor(novoValor, "qtd-pista");
    }

    limparCampos();
}

function gerarNovoValor(qtdInicial, qtdComprada){
    let novoValor = qtdInicial - qtdComprada;
    return novoValor;
}

function verificarNovoValor(novoValor, idTag){
    if (novoValor < 0) {
            alert("Erro! Não há ingressos suficientes!");
        }else{
            document.getElementById(idTag).textContent = novoValor;
        }
}

function limparCampos(){
    document.getElementById("qtd").value = "";
}
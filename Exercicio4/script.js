function validarPlacaDeCarro(){

    placa = document.getElementById("textoPlaca")
    textoPlaca = placa.value

    const regexPlacaNova = /^[a-zA-Z]{3}[0-9]{4}$/
    const regexPlacaAntiga = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/


    if(regexPlacaNova.test(textoPlaca)){
        document.getElementById("placaRes").innerHTML = "Placa válida! ✔️"
    } else if (regexPlacaAntiga.test(textoPlaca)) {
        document.getElementById("placaRes").innerHTML = "Placa válida! ✔️"
    } else {
        document.getElementById("placaRes").innerHTML = "Placa inválida! ❌"
    }



}

function gerarTelefonesAleatorios(){

    numberDDD = document.getElementById("numberDDD")
    numberQntd = document.getElementById("numberQntd")

    dddValue = numberDDD.value
    quantidadeValue = numberQntd.value

        for(let i = 0; i < quantidadeValue; i++){
        document.getElementById("telefones").innerHTML += (`(${dddValue}) ` + "9" + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + "-" + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + "\n")
        }

}

function gerarCPF(){

    qntdRecebidaCPF = document.getElementById("recebeQntdCPF")

    quantidadeValue = qntdRecebidaCPF.value

        for(let i = 0; i < quantidadeValue; i++){
        document.getElementById("cpfs").innerHTML += "" + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + "." + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + "." + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + "-" + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + "\n"
        }

}
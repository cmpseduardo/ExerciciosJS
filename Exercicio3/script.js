let numeroAleatorio = "9" + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + "-" + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9)


let dddInput = prompt("Digite o DDD")
let quantidadeInput = prompt("Digite a quantidade de números aleatórios que deseja gerar")

gerarNumeroAleatorio(dddInput, quantidadeInput)

function gerarNumeroAleatorio(dddInput, quantidadeInput){
    for(let i = 0; i < quantidadeInput; i++){
        console.log(`(${dddInput}) ` + "9" + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + "-" + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9))
    }
}

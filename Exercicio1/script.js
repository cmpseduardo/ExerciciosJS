let placa = prompt('Digite a placa')

const regexPlacaNova = /^[a-zA-Z]{3}[0-9]{4}$/
const regexPlacaAntiga = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/


if(regexPlacaNova.test(placa)){
    alert('Placa válida! ✔️')
} else if (regexPlacaAntiga.test(placa)) {
    alert('Placa válida! ❌')
} else {
    alert('Placa inválida!')
}
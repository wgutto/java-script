var badicionar = document.getElementById('b-adicionar')
var bfinalizar = document.getElementById('b-finalizar')
var resultado = document.getElementById('resultado')
var lista = document.getElementById('lista')
var txtnumero = document.getElementById('numero')
var valores = []

badicionar.addEventListener('click', adicionar)
bfinalizar.addEventListener('click', finalizar)

function adicionar() {

    resultado.innerHTML = ''

    if(txtnumero.value == '' || txtnumero.value > 100 || valores.includes(Number(txtnumero.value)) == true) {
        alert('[ERRO] Valor já adicionado, ou inválido.')
    } else {
        valores.push(Number(txtnumero.value))
        let option = document.createElement('option')
        option.innerHTML = `Número ${txtnumero.value} adicionado.`
        lista.appendChild(option)
    }

    txtnumero.value = ''
    txtnumero.focus()

}

function finalizar() {
    if(valores.length == 0) {
        alert('[ERRO] Adicione valores antes de continuar.')
    } else {
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0

        for(var pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior) {
                maior = valores[pos]
            } else {
                menor = valores[pos]
            }
        }
        media = soma / total

        if(resultado.innerHTML == '') {

            resultado.innerHTML += `<p>O total de números da lista é <strong>${total}</strong></p>`
            resultado.innerHTML += `<p>O maior valor da lista é <strong>${maior}</strong></p>`
            resultado.innerHTML += `<p>O menor valor da lista é <strong>${menor}</strong></p>`
            resultado.innerHTML += `<p>A soma dos valores da lista é <strong>${soma}</strong></p>`
            resultado.innerHTML += `<p>A média dos valores da lista é <strong>${media.toFixed(2)}</strong></p>`
        } else {
            alert('[ERRO] Clique em ADICIONAR para fazer uma nova operação.')
        }
    }
}





/*
function isNumero(n) {
    if(n > 0 && n <= 100) {
        return true
    } else {
        return false
    }
}

function isLista(n, l) {
    if(l.indexOf(Number(n)) == -1) {
        return false
    } else {
        return true
    }
}
*/
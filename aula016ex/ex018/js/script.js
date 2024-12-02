var badicionar = document.getElementById('b-adicionar')
var bfinalizar = document.getElementById('b-finalizar')
var lista = []
var txtnumero = document.getElementById('numero')
var arealista = document.getElementById('lista')
var resultado = document.getElementById('resultado')

badicionar.addEventListener('click', adicionar)
bfinalizar.addEventListener('click', finalizar)
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
function adicionar() {
    if(txtnumero.value > 0 && txtnumero.value <= 100 && lista.indexOf(Number(txtnumero.value)) == -1 ) {
        lista.push(Number(txtnumero.value))
        var item = document.createElement('option')
        item.text = `Valor adicionado é ${txtnumero.value}`
        arealista.appendChild(item)
        resultado.innerHTML = ''
    } else {
        alert(`[ERRO] valor inválido ou já adicionado.`)
    }
    txtnumero.value = ''
    txtnumero.focus()
}

function finalizar() {
    if(lista.length == '') {
        alert('erro')
    } else {
        var total = lista.length
        resultado.innerHTML = ''
        resultado.innerHTML += `<p> Ao todo temos ${total} números cadastrados`
    }
}
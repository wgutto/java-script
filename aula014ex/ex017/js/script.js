var botao = document.querySelector('main div #botao')

botao.addEventListener('click', gerar)

function gerar() {
    var txtnum = document.querySelector('main div #numero')
    var numero = Number(txtnum.value)
    var tabuada = document.querySelector('main div #tubuada')

    if(txtnum.value == 0) {
        alert('erro')
    } else {
        tabuada.innerHTML = ''
        for(var contador = 1; contador <= 10; contador++) {
            let item = document.createElement('option')
            item.innerHTML = `${numero} x ${contador} = ${numero*contador}`
            item.value = `tab${contador}`
            tabuada.appendChild(item)
        }

    }
}
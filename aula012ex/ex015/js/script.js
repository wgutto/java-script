var botao = document.querySelector('main input#botao')
var data = new Date()
var dataatual = data.getFullYear()
var txtano = document.querySelector('input#nascimento')
var image = document.querySelector('main div#resultado img')

botao.addEventListener('click', verificar)

function verificar() {
    var anonascimento = Number(txtano.value)
    var idade = dataatual - anonascimento

    if(idade >= 0 && idade <= 10) {
        image.src = 'images/bebe-m.jpg'
    } else {
    }
}


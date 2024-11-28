var botao = document.querySelector('main input#botao')

botao.addEventListener('click', verificar)


function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var txtano = document.querySelector('input#nascimento')
    var resultado = document.querySelector('main p#txtresultado')

    if(txtano.value == 0 || txtano.value > ano) {
        resultado.innerHTML = `[ERRO] Verifique as informações`
    } else {
        var sexo = document.getElementsByName('sexo')
        var genero = ''
        var image = document.querySelector('main div#resultado img')
        var idade = ano - Number(txtano.value)
        
        if(sexo[0].checked) {
            genero = 'HOMEM'

            if (idade >= 0 && idade <= 10) {
                image.src = 'images/bebe-m.jpg'
            } else if (idade > 10 && idade <= 21) {
                image.src = 'images/jovem-m.jpg'
            } else if (idade > 21 && idade <= 50) {
                image.src = 'images/adulto-m.jpg'
            } else if (idade > 50) {
                image.src = 'images/idoso-m.jpg'
            }
        } else if (sexo[1].checked) {
            genero = 'MULHER'

            if (idade >= 0 && idade <= 10) {
                image.src = 'images/bebe-f.jpg'
            } else if (idade > 10 && idade <= 21) {
                image.src = 'images/jovem-f.jpg'
            } else if (idade > 21 && idade <= 50) {
                image.src = 'images/adulto-f.jpg'
            } else if (idade > 50) {
                image.src = 'images/idoso-f.jpg'
            }
        }

        resultado.innerHTML = `Detectamos o sexo como <strong>${genero}</strong> com uma idade de <strong>${idade}</strong> anos.`
    }
}


function atualizar() {
    var agora = new Date()
    var dia = agora.getDay()
    var mes = agora.getMonth()
    var ano = agora.getFullYear()
    var hora = agora.getHours().toString().padStart(2, '0')
    var minutos = agora.getMinutes().toString().padStart(2, '0')
    var segundos = agora.getSeconds().toString().padStart(2, '0')
    var txthora = document.querySelector('main div#txthora')
    var txtdata = document.querySelector('main div#txtdata')
    var image = document.querySelector('main div#image img')

    switch(mes) {
        case 0:
            mes = 'Janeiro'
            break
        case 1:
            mes = 'Feveiro'
            break
        case 2:
            mes = 'Março'
            break
        case 3:
            mes = 'Abril'
            break
        case 4: 
            mes = 'Maio'
            break
        case 5:
            mes = 'Junho'
            break
        case 6:
            mes = 'Julho'
            break
        case 7:
            mes = 'Agosto'
            break
        case 8:
            mes = 'Setembro'
            break
        case 9:
            mes = 'Outubro'
            break
        case 10: 
            mes = 'Novembro'
            break
        case 11:
            mes = 'Dezembro'
            break
        default:
            mes = 'Inválido'
            break
    }

    txthora.innerHTML = `${hora}:${minutos}:${segundos}.`
    txtdata.innerHTML = `${dia}, ${mes}, ${ano}.`

    if(hora >= 0 && hora < 12) {
        image.src = 'images/image-manha.jpg'
        document.body.style.backgroundColor = '#c36c41'
    } else if (hora >= 12 && hora < 18) {
        image.src = 'images/image-tarde.jpg'
        document.body.style.backgroundColor = '#b78b68'
    } else {
        image.src = 'images/image-noite.jpg'
        document.body.style.backgroundColor = '#2c4049'
    }
}

setInterval(atualizar, 1000)
atualizar()
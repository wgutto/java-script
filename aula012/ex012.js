var agora = new Date()
var hora = agora.getHours()

if(hora > 4 && hora < 12) {
    console.log('Bom dia')
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde')
} else if (hora >= 18 && hora < 23.59) {
    console.log('Boa noite')
} else {
    console.log('Boa madrugada')
}


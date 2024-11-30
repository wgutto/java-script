var botao = document.querySelector('main div #botao')

botao.addEventListener('click', contar)

function contar() {
    var inicio = document.querySelector('main div#infos #inicio')
    var fim =   document.querySelector('main div#infos #fim')
    var passo = document.querySelector('main div#infos #passo')
    var resultado = document.querySelector('main div#resultado')

    if(inicio.value == 0 || fim.value == 0 || passo.value == 0) {
        resultado.innerHTML = `[ERRO] Insira os dados.`
    } else {
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        resultado.innerHTML = `Contando: `

        if(p < 0) {
            resultado.innerHTML = `[ERRO] Valor de passo inválido. Considerando valor 1. <br>`
            p = 1
        }

        if(i < f) {
            for(var contador = i; contador <= f; contador += p) {
                resultado.innerHTML += `${contador} `
            }
        } else {
            for(var contador = i; contador >= f; contador -= p) {
                resultado.innerHTML += `${contador} `
            }
        }
    }
}
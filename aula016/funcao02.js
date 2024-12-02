function somar(n1=0, n2=0) {
    let soma = n1 + n2

    if(soma%2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

let resultado = somar(3)

console.log(resultado)
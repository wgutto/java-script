let valores = [5, 6, 7]
// valores[3] = 8 

let txtnum = 6
let veri = valores.indexOf(txtnum)

if(veri == -1) {
    valores.push(txtnum)
    valores.sort(function(a, b) {return a-b})

    console.log(`O número ${txtnum} foi adicionado e agora a lista está assim: ${valores}`)
} else {
    console.log('O número já existe')
}
var num = [8,3,9,3,7,4,2]
num.push(8)
num.sort()


/*
for(let i = 0; i < num.length; i++) {
    console.log(`a posiçao ${i} tem o valor de ${num[i]}`)
} 
*/

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor de ${num[pos]}`)
}


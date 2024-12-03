let amigo = {
    nome: 'João',
    sobrenome: 'Lima',
    peso: 88.90,
    engordar(p=0) {
        this.peso += p
    }
}

amigo.engordar(2)
console.log(`Meu amigo ${amigo.nome} pesa ${amigo.peso}Kg`)
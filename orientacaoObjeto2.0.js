class Animal{
    constructor(tipo, peso, cor) {
        this.tipo = tipo
        this.peso = peso
        this.cor = cor
    }
    obterTipo() {
        return this.tipo
    }
    obterPeso() {
        return this.peso
    }
    obterCor() {
        return this.cor
    }
}
let meuPet = new Animal('anfibio', 0.5, 'verde')
let meuPet2 = new Animal('felino', 2.5, 'amarelo')
let meuPet3 = new Animal('reptil', 3.0, 'marrom')
console.log(meuPet)
console.log(meuPet2)
console.log(meuPet3)
console.log(meuPet.obterTipo()) // para receber apenas um metodo especifico
console.log(typeof meuPet) // tipo de dado
console.log(Animal.prototype) // para ver qual o dado usado na classe  
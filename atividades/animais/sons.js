// Object, String, Number, Array e as Functions - estruturas globais

const animal = new Array('gato', 'cachorro', 'rato') // forma canonica de fazer um array; estancionando a variavel animal em um array.
const animal2 = ['pato', 'leão', 'porco'] // forma tradicional
console.log(animal)
console.log(animal.filter(function(animal) {return animal === 'rato'}))

const animais = {
    som: 'um som de animal',
    tipo: 'animal',
    emitirSom: function() {
        console.log(this.som)
    }
}
animais.emitirSom()

const gato = {
    som: 'miau',
    tipo: 'gato',
}
Object.setPrototypeOf(gato, animais)
gato.emitirSom()
console.log(gato.tipo)

const cachorro = {
    som: 'Auau',
    tipo: 'cachorro',
}
Object.setPrototypeOf(cachorro, animais)
cachorro.emitirSom()
console.log(cachorro.tipo)

const gatoRaivoso = {
    tipo: 'Gato Raivoso',
    miarForte: function() {
        console.log(this.som.toUpperCase())
    }
}
Object.setPrototypeOf(gatoRaivoso, gato)
gatoRaivoso.miarForte()
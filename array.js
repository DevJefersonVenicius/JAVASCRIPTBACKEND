// estudando arrays
let meuArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(meuArray)
console.log(meuArray[4]) // chamando array com indice

let novoArray = meuArray.slice()
console.log(novoArray)

let frutas = ["Banana", "Laranja", "Limão", "Maçã", "Manga"]
let fruta = frutas.slice(0, 3) // copia um array por completo ou pode copiar partes do array por meio dos indices
console.log(fruta)

// NO FINAL DO ARRAY
meuArray.pop() // pop - remove o ultimo item do array
meuArray.push(100) // push - adiciona no final do array
console.log(meuArray)

// INICIO DO ARRAY
novoArray.unshift(10, 11, 12, 13, 14) // adiciona itens no inicio do array
novoArray.shift() // removi itens no inicio do array

console.log(novoArray)
console.log(meuArray)

console.table(novoArray)
console.table(meuArray)

for (indice in meuArray) {
    console.log(indice)
}

for (valor of meuArray) {
    console.log(valor)
}

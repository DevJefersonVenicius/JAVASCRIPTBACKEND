// estudando arrays
let meuArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(meuArray)
console.log(meuArray[4]) // chamando array com indice

let novoArray = meuArray.slice()
console.log(novoArray)

// NO FINAL DO ARRAY
meuArray.pop() // pop - remove o ultimo item do array
meuArray.push(100) // push - adiciona no final do array
console.log(meuArray)

// INICIO DO ARRAY
novoArray.unshift(10, 11, 12, 13, 14, 15) // unshift - insere itens no inicio do array
novoArray.shift()
console.log(novoArray)
console.log(meuArray)

for (indice in meuArray) {
    console.log(meuArray[indice])
}

for (indice of meuArray) {
    console.log(indice)
}

console.table(novoArray)
console.table(meuArray)

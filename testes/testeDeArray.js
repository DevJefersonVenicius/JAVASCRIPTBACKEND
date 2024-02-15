const prompt = require('prompt-sync')()
let meuArray = ['Oi', 'eu', 'sou', 'Goku']
let array2 = ['Dragon', 'Ball', 'Z']
let objeto = {'CR7' : 'Cristiano Ronaldo'}
meuArray.push('e', 'sou', 'o', 'mais', 'forte', 'do', 'universo!') // Adicionando novos itens no fim do arrays
console.log(meuArray)
meuArray.pop() // removi apenas o ultimo item do array
console.log(meuArray)
meuArray.shift()  // removi o primeiro item do array
console.log(meuArray)
meuArray.unshift(array2) // Adiciona itens no inicio do array e adiciona arrays e objetos
console.log(meuArray)
meuArray.unshift(objeto) // Adicionando objeto ao array
console.log(meuArray)
let novoArray = meuArray.slice() // retorna um novo array e pode retornar por elementos selecionados
console.log(novoArray)

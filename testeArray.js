const prompt = require('prompt-sync')()
let oneArray = [1, 2, 3, 4, 'Oi', 'eu', 'sou', 'Goku!', true, false]
console.log(oneArray)
console.table(oneArray)

oneArray.pop() // removendo o ultimo indice do array
oneArray.push(300, 400, 100) // adicionandos novos indices no final do array

oneArray.unshift(0, 0.1, 0.2) // adicionando novos indices no inicio do array
oneArray.shift() // removi o primeiro indice do array

let twoArray = oneArray.slice() // copiando o primeiro array para o segundo
console.log(twoArray)

let threeArray = [5, 6, 7, 8, 9]
console.log(`${threeArray + oneArray}`)

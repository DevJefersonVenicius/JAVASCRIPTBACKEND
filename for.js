// usando estrutura de repetição for
for (let i = 0; i < 11; i++) {
//  contador / condição / soma para funcionamento da estrutura 
    console.log(i)
}

let meuArray = ['a', 'e', 'i', 'o', 'u']

for (let i = 0; i < meuArray.length; i++) {
    if (meuArray[i] === 'i') {
        continue
    }
    if (meuArray[i] === 'u') {
        break
    }
    console.log(meuArray[i])
}

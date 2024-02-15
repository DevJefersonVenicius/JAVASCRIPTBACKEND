// spread - é uma sintaxe que permite espelhamento de objetos interaveis
let meuArray = [1, 2, 3, 4]
let novoArray = [...meuArray, 5, 6, 7, 8, 9]
console.log(novoArray)

let meuObjeto = {
    'nome' : 'Jeferson',
    'idade' : 19,
    'estuda' : 'JavaScript',
}

let novoObjeto = {
    ...meuObjeto,
    'nasceu em' : 'março',
}
console.log(novoObjeto)

let maisNovoObjeto = {
    ...novoObjeto,
    'mora' : 'Amontada',
}
console.log(maisNovoObjeto)

let juntandoArraysEObjetos = {
    ...meuArray,
    ...novoArray,
    ...meuObjeto,
    ...novoObjeto,
    ...maisNovoObjeto,
}
console.log(juntandoArraysEObjetos)

const cadastroDePets = (info) => {
    let novosDados = {
        ...info,
        tipoRacao: 'Canina',
        enfermidade: 'Não',
        nivelDeSaude: 10,
    }
    return  novosDados
}
console.log(cadastroDePets({nome: 'Bob', sobrenome: 'Marley', idade: 7, raca: 'Pug',}))
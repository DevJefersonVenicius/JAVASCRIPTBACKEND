// map - é um metodo que tem uma função interna que intera com cada elemento de um Array ou Objeto
//é a interação com cada elemento do Array ou Objeto 
const listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const tabuadaDoSeis = listaDeNumeros.map((item) => {
    return item * 6
})
const tabuadaDoSete = listaDeNumeros.map((item) => {
    return item * 7
})
console.table(tabuadaDoSeis)
console.table(tabuadaDoSete)

const encotrarNumero = listaDeNumeros.find((item) => { // buscar um valor especifico no Array
    return item === 7
})
console.log(`Sai do find quando encontrei o ${encotrarNumero}`)

const somaArray = listaDeNumeros.reduce((total, proximoValor) => { // soma itens do Array
    return total + proximoValor
})
console.log(somaArray)
// Estudando objetos
const objeto = {
    nome : 'Jeferson',
    sobrenome  : 'Magalhães',
    idade : 19,
    estuda : 'JavaScript',
}
console.log(objeto) // imprimindo o objeto por completo
console.log(objeto.nome) // imprimindo o valor de um item especifico

const chaves = Object.keys(objeto) // object.keys - metodo que imprime as chaves do objeto
console.log(chaves) // imprimindo as chaves do objeto
const valores = Object.values(objeto) // object.values - metodo que imprime os valores do objeto
console.log(valores) // imprimindo os valores do objeto
const entradas = Object.entries(objeto) // Retorna o objeto em Arrays cada Array com chave e valor
console.log(entradas) // imprimindo o objeto em Arrays
// hasOwnProperty - retorna true ou false em determinado objeto
console.log(objeto.hasOwnProperty("idade")); // true
console.log(objeto.hasOwnProperty("salario")); // false
chaves.Object.values(0)
console.log(chaves)
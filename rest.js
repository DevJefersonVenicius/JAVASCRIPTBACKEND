// rest - é uma sintaxe que permite representar um número de argumentos indefinidos em um Array
const cadastrar = (usuarios, ...novosUsuarios) => {
    let totalDeUsuarios = [
        ...usuarios,
        ...novosUsuarios,
    ]
    console.log(totalDeUsuarios)
}
let usuarios = ['Neyva', 'Lara', 'Levi']
let novosUsuarios = cadastrar(usuarios, 'Sedex', 'Gabriel', 'Kayro')
novosUsuarios = cadastrar(usuarios, 'Sedex', 'Gabriel', 'Kayro', 'Jeferson', 'Junior', 'Anderson')

let numeros = (...meusNumeros) => {
    console.log(meusNumeros.length)
}
let novosNumeros = numeros(1, 2, 3, 4, 5, 6, 7, 8, 9)
novosNumeros = numeros(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
novosNumeros = numeros(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
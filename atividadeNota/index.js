import { Livro } from "./Livros.js"
let livro = new Livro('Biblioteca Viva', 'Os três porquinhos', 'José Albino', 1920, 'Infantil', 30, new Date('March 09, 2024 19:00:00'), new Date('March 11, 2024 19:00:00'))
console.log(livro)
livro.emprestar()

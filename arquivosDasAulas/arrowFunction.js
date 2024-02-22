// Funções literais
function soma(a, b) {
    return a + b
}
console.log(soma(2, 5))

// Funções Anonimas
const minhaFuncao = function(a, b) { return a + b }
console.log(minhaFuncao(5, 10))

// Escopo das funções
// this - é uma palavra reservada que faz referencias ao PAI de um elemento. E quando o this é utilizado em funções comuns, seu PAI será o elemento local.
function aluno(nomeAluno, idadeAluno, notaAluno) {
    this.nomeAluno = nomeAluno
    this.idadeAluno = idadeAluno
    this.notaAluno = notaAluno

    console.log(this.nomeAluno)
    console.log(this.idadeAluno)
    console.log(this.notaAluno)

    this.dadosAnonimos = function() {
        setTimeout( function(){
            console.log(this.nomeAluno)
            console.log(this.idadeAluno)
            console.log(this.notaAluno)
        }, 1000)
    }

    // arrow function - são funções de ESCOPO ABERTO
    this.dadosArrow = () => {
        setTimeout(() => {
            console.log(this.nomeAluno)
            console.log(this.idadeAluno)
            console.log(this.notaAluno)
        }, 1000)
    }
}

const aluno01 = new aluno('Neyva', 19, 7.0)
aluno01.dadosAnonimos()
aluno01.dadosArrow()

// Sobre arrow function
// 1 - tem return embutido
const dobro = (a) =>  2  * a
console.log(dobro(5))
// 2 - argumento implicito
let multiplicar = _ => 2 * 2
console.log(multiplicar())

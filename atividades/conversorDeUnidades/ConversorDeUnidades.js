import PromptSync from "prompt-sync"
const prompt = PromptSync()

class Unidades {
    constructor(nomeUnidade, unidadeConvertidadaPara, tamanhoUnidade) {
        this.nomeUnidade = nomeUnidade
        this.unidadeConvertidadaPara = unidadeConvertidadaPara
        this.tamanhoUnidade = tamanhoUnidade
    }
    get obterNomeUnidade() {
        return this.nomeUnidade
    }
    get obterUnidadeConvertidaPara() {
        return this.unidadeConvertidadaPara
    }
    get obterTamanhoUnidade() {
        return this.tamanhoUnidade
    }
    /**
     * @param {any} valorFinal
     */
    set alterarUnidadeConvertidaPara(valorFinal) {
        this.unidadeConvertidadaPara = valorFinal
    }
    /**
     * @param {any} valorInicial
     */
    set alterarNomeUnidade(valorInicial) {
        this.nomeUnidade = valorInicial
    }
    /**
     * @param {any} tamanho
     */
    set alterarTamanhoUnidade(tamanho) {
        this.tamanhoUnidade = tamanho
    }
}
function inicio() {
    let tamanho = Number(prompt('Informe um número: '))
    let valorInicial = prompt(`
        Informe a unidade inicial: 
            km para quilometros
            m para metros
            cm para centimetros
            mm para milimetros 
    `)
    let valorFinal = prompt(`
        Informe a unidade destino:
            km para quilometros
            m para metros
            cm para centimetros
            mm para milimetros 
    `)
    if (valorInicial === 'km' && valorFinal === 'm') {
        console.log(`${tamanho * 1000}`)
    } else if (valorInicial === 'm' && valorFinal === 'km') {
        console.log(tamanho / 1000)
    } else {
        console.log('Unidades não indentificadas.')
        }
    }
const converter = new Unidades()
inicio()

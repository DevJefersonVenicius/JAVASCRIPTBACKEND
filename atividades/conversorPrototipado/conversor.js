import PromptSync from "prompt-sync"
const prompt = PromptSync()
const conversor = {
    unidade: '',
    valor: 0,
}
const metros = {
    converterDeMPara: function() {
        this.valor = Number(prompt('Digite um número: '))
        this.unidade = prompt('Converter de metros para: ')
        if (this.unidade.toLowerCase() === 'km') {
            console.log(`${this.valor}m para "${this.unidade}" é igual a ${this.valor / 1000}${this.unidade}`)
        } else if (this.unidade.toLowerCase() === 'cm') {
            console.log(`${this.valor}m convertidos para "${this.unidade}" é igual a ${this.valor * 100}${this.unidade}`)
        } else if (this.unidade.toLowerCase() === 'mm') {
            console.log(`${this.valor}m convertidos para "${this.unidade}" é igual a ${this.valor * 1000}${this.unidade}`)
        } else {
            console.log('Unidades não identificadas ou valor invalido.')
        }
    }
}
const kilometros = {
    converterDeKmPara: function() {
        this.valor = Number(prompt('Digite um número: '))
        this.unidade = prompt('Converter de kilometros para: ')
        if (this.unidade.toLowerCase() === 'm') {
            console.log(`${this.valor}km para "${this.unidade}" é igual a ${this.valor * 1000}${this.unidade}`)
        }
    }
}

Object.setPrototypeOf(conversor, metros)
Object.setPrototypeOf(conversor, kilometros)
metros.converterDeMPara()
kilometros.converterDeKmPara()
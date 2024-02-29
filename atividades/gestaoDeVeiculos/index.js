import {Veiculos} from './Veiculos.js'
import {Carros} from './Carros.js'
import {Motos} from './Motos.js'
import { VeiculosNovos } from './VeiculosNovos.js'
let barco = new Veiculos('Barco de vela', 'De madeira', 'GHJ-4729', 'Vermelho', 2005, 'Gasolina', 1, '')
console.log(barco.obterMarca)
console.log(`A quantidade atual de barcos é ${barco.quantidadeDeVeiculos}`)
barco.alterarQuantidadeDeVeiculos = -3
console.log(barco.quantidadeDeVeiculos)
barco.alterarQuantidadeDeVeiculos = 5
console.log(barco.quantidadeDeVeiculos)
barco.alterarQuantidadeDeVeiculos = -10
console.log(barco.quantidadeDeVeiculos)
console.log(barco)

console.log("===".repeat(20))

let carro = new Carros('Ferrari', 'SUV', 'GKM-908', 'Vermelha', 2023, 'Gasolina', 1, '', 'Carro esportivo', 'É um carro exportivo.')
console.log(carro)

console.log("===".repeat(20))

let moto = new Motos('Honda', 'CG-150', 'HZM-083', 'Vermelha', 2024, 'Gasolina', 1, '', 'Moto de passeio.', 'É uma moto de passeio.')
console.log(moto)

console.log("===".repeat(20))

let civic = new VeiculosNovos('Honda', 'Touring', null, 'Branco', 2024, 'Flex', 10, 265000, 'patio')
console.table(civic)
civic.alterarStatusDeVenda = true
civic.alterarQuantidadeDeVeiculos = -1
civic.alterarTaxaDeEmplacamento = 3000
civic.alterarEmplacamento = true
civic.alterarPlaca = 'YUT-0945'
console.table(civic)

console.log("===".repeat(20))

console.table(civic)
civic.alterarStatusDeVenda = true
civic.alterarQuantidadeDeVeiculos = -4
civic.alterarTaxaDeEmplacamento = 6000
civic.alterarEmplacamento = true
civic.alterarPlaca = 'YUT-0945'
console.table(civic)


console.log('==========================')
civic.alterarStatusDeVenda = true
civic.alterarQuantidadeDeVeiculos = -2
civic.alterarTaxaDeEmplacamento = 6000.00
civic.alterarEmplacamento = true
civic.alterarPlaca = ['WER-1521', 'TYG-5432']

console.table(civic)
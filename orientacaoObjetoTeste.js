class Veiculo{
    constructor(nome, modelo, pintura, motor) {
        this.nome = nome
        this.modelo = modelo
        this.pintura = pintura
        this.motor = motor
    }
    obterNome() {
        return this.nome // metodos 
    }
    obterModelo() {
        return this.modelo
    }
    obterPintura() {
        return this.pintura
    }
    obterMotor() {
        return this.motor
    }
}
class Carro extends Veiculo {
    constructor(nome, modelo, pintura, motor, placa) {
      super(nome, modelo, pintura, motor)
      this.placa = placa;
    }
  }
const meuCarro = new Carro('Honda', 'Civic', 'Vermelha', '149.2 cc', 'HZR-12R');
console.log(meuCarro.obterNome())
console.log(meuCarro.obterModelo())
console.log(meuCarro.obterPintura())
console.log(meuCarro.obterMotor())
console.log(meuCarro.placa)
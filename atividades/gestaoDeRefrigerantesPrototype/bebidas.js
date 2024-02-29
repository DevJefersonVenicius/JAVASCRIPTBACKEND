const bebidas = {
    nome: "Nome da bebida",
    marca: "Marca da bebida",
    sabor: "Sabor da bebida",
    preco: "Preço da bebida",
    validade: "Validade da bebida",
    tipoDeEmbalagem: "Embalagem da bebida",
    tipoDeBebida: "Tipo da bebida",
    estoque: "Quantidade de bebidas",
    dataDeFabricacao: new Date(''),
    setDataFabricacao: function(validade) {
        if (validade > this.dataDeFabricacao) {
            console.log('Está okay')
        } else {
            console.log('Fora da validade')
        }    
    },
    setEstoque: function(novoEstoque) {
        if ( this.estoque != 0) {
            if (novoEstoque > 0) {
                this.estoque += novoEstoque
                return true
            } else {
                if ( this.estoque < Math.abs(novoEstoque)) {
                    console.log(`Você tem ${this.estoque} impossivel retirar ${ Math.abs(novoEstoque) }`)
                    return false
                } else {
                    this.estoque += novoEstoque
                    return true
                }
            }
        } else {
            if ( novoEstoque > 0 ) {
                this.estoque += novoEstoque
                return true
             } else {
                console.log(`Você tem ${ this.estoque } impossivel retirar ${ Math.abs(novoEstoque) }`)
                return false
            }
        }
    }
}

const refrigerante = {
    volumeRefrigerante: "Unidades de refrigerante",
    statusDeVenda: false,
    vendas: 0,
    vendaDeBebida: function(estoque) {
        if (this.setEstoque(estoque) === true) {
            this.statusDeVenda = true
        }
    }
}

Object.setPrototypeOf(refrigerante, bebidas)

refrigerante.nome = 'Fanta'
refrigerante.marca = 'Coca-Cola'
refrigerante.sabor = 'Laranja'
refrigerante.preco = 5.0
refrigerante.validade = '60 dias'
refrigerante.tipoDeEmbalagem = 'Plastico'
refrigerante.tipoDeBebida = 'Bebida com gás'
refrigerante.volumeRefrigerante = '2 Litros'
refrigerante.dataDeFabricacao = new Date('2024-03-03')
refrigerante.setDataFabricacao(new Date('2024-05-02'))
refrigerante.estoque = 20
refrigerante.vendaDeBebida(-10)
refrigerante.statusDeVenda
refrigerante.vendas
console.log(refrigerante)
console.log(`Nome: ${refrigerante.nome}; Marca: ${refrigerante.marca}; Sabor: ${refrigerante.sabor}; Preço: ${refrigerante.preco}; Validade: ${refrigerante.validade}; 
Tipo de Embalagem: ${refrigerante.tipoDeEmbalagem}; Tipo de Refrigerante: ${refrigerante.tipoDeBebida}; Volume: ${refrigerante.volumeRefrigerante}; 
Data de Fabricação: ${refrigerante.dataDeFabricacao}; Estoque: ${refrigerante.estoque}; Vendas: ${refrigerante.vendaDeBebida()}; Status de Vendas: ${refrigerante.statusDeVenda}.`)

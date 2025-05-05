const meuJSON = require('./json.json')
console.log(meuJSON)
 
const meuJSONEmString = JSON.stringify(meuJSON) // Transformando arquivo JSON em String
console.log(meuJSONEmString)

const meuObjetoJSON = JSON.parse(meuJSONEmString) // Transformando em arquivo JSON
console.log(meuObjetoJSON)

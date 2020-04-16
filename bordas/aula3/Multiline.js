const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Binca é casada com Habib
Shi... João gosta de javascript, tinha que ser o Js
`

console.log(texto.match(/\n/g))
console.log(texto.match(/^(\w).+\1$/gi))

// multiline vai considerar cada uma das linha de forma independente
console.log(texto.match(/^(\w).+\1$/gim))

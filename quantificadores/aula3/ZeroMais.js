const texto = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOOO!'
const text = 'There is a big fog in NYC'

// * -> zero ou mais

const regex = /fogo*/gi

console.log(texto.match(regex))
console.log(text.match(regex))

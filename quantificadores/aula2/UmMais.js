const texto = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOOO!'
const text = 'There is a big fog in NYC'

// + -> Um ou mais

const regex = /fogo+/gi

console.log(texto.match(regex))
console.log(text.match(regex))

const numbers = 'The Numbers: 0123456789 9876543210'
console.log(numbers.match(/[0-9]/g))
console.log(numbers.match(/[0-9]+/g))
console.log(numbers.match(/\d+/g))

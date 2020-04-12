const texto = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOOO!'
const text = 'There is a big fog in NYC'

// ? -> zero ou um

const regex = /fogo?/gi
// a letra do lado do '?' (o?) que dizer que a palavra pode ter um 'o' ou nenhum 'o'

console.log(texto.match(regex))
console.log(text.match(regex))

const texto = 'Supermercado, Hipermercado, Minimercado, Supermarket e Mercado.'

console.log(texto.match(/(super|hiper|mini)?(mercado|market)/gi))
console.log(texto.match(/((su|hi)per|mini)?m[ea]r(cado|ket)/gi))

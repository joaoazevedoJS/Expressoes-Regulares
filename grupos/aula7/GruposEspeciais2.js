const texto = 'Supermercado superação hiperMERCADO'

console.log(texto.match(/(?=super)[\wÀ-ú]+/gi))

// Positive LookBehind

console.log(texto.match(/(?<=super)[\wÀ-ú]+/gi)) // Procure qualquer palavra que tenha antes a palavra super

// Negative LookBehind
console.log(texto.match(/(?<!super)mercado/gi)) // Procure qualquer palavra que não tenha antes a palavra super


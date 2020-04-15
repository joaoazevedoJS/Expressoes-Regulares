const texto = 'João é calmo, mas jogando fica nervoso.'

console.log(texto.match(/[\wÀ-ú]+/gi))

// Positive lookahead

console.log(texto.match(/[\wÀ-ú]+(?=,)/gi)) // Procure uma palavra que tenha virgula na frente
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi)) // Procure uma palavra que tenha ponto na frente
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi))

// Negative lookahead

console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi)) // Pegue todas as palavras que não tenha virgula na frente
// ele não pegou o é porque ele é uma borda

console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi))
console.log(texto.match(/[\wÀ-ú]+(?!,)/gi))

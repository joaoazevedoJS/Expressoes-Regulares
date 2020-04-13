const texto = `Lista telefônica:
	- (11) 98756-1212
	- 12 23211-1321
	- 98765-4321`

console.log(texto.match(/\(\d{2}?\)\s\d+-\d{4}|\d+-\d{4}/g))
console.log(texto.match(/\(.+\)\s\d+-\d{4}|\d+-\d{4}/g))


// RESOLUÇÃO DO PROFESSOR

// O \(? quer dizer que o '(' é opcional, assim como \s? que dizer que ele é opcional
console.log(texto.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g))

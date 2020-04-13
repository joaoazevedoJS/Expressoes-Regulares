const texto = `CPF dos aprovados:
	- 600.567.890-12
	- 765.998.345-23
	Bug erro 404 - tente novamente`

console.log(texto.match(/\d{3}.+\d{2}/g)) // mais facil
console.log(texto.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g)) // Mais seguro
console.log(texto.match(/\d.+/g)) // menos seguro

// RESOLUÇÃO DO PROFESSOR

console.log(texto.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g))

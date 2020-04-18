const texto = `
Lista telefônica:
	- (21) 12345-6789
	- (11) 62300-2234
	- 5678-7771
	- 1777 8765
	- (85)3333-7890
	- (1) 4321-1234
`

// Minha resolução
console.log(texto.match(/(\(\d{2}\))?\s?\d{4,5}[-\s]?\d{4}/g))

// Resolução do professor

console.log(texto.match(/(\(\d{2}\)\s?)?\d{4,5}-\d{4}/g))

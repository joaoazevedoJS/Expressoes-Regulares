const texto = `1,2,3,4,5,6,a.b c!d?e\r\f	-
f_g`

console.log(texto.match(/\d/g)) // Todos os números (digitos) [0-9]
console.log(texto.match(/\D/g)) // Tudo o que não é números [^0-9]

console.log(texto.match(/\w/g)) // Todos os caracteres [a-zA-Z0-9_]
console.log(texto.match(/\W/g)) // Não caracteres [^a-zA-Z0-9_]

console.log(texto.match(/\s/g)) // conjunto em branco [ \t\n\r\f]
console.log(texto.match(/\S/g)) // conjunto que não são branco [^ \t\n\r\f]

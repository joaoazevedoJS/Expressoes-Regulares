// no início ...
// Um byte (8 bits) - 256 caracteres
// Símbolos, Pontuação, A-Z, a-z, 0-9

// Dois bytes (16 bits) - 65500+ cacteres
// +Símbolos, +Pontuação, A-Z, a-z, 0-9

// Unicode
// Quantidade de bytes variável - Expansível
// Suporta mais de 1 Milhão cacteres
// Atualmente tem mais de 100 mil caractes atribuidos

// https://unicode-table.com/pt/

const texto = 'aʬc௵d'
console.log(texto.match(/\u02AC|\u0BF5/g))

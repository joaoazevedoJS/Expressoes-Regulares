const texto = '0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f'

const regexNove = RegExp('9')

console.log('Métodos da RegExp... ')
console.log(regexNove.test(texto)) // vai conferir se estar no texto
console.log(regexNove.exec(texto)) // vai executar e retonar onde está no texto

const regexLetras = /[a-f]/g // Pegar todas as letras entre 'a' e 'f'

console.log('Métodos da String... ')
console.log(texto.match(regexLetras))
console.log(texto.search(regexLetras)) // indice do primeiro elemento
console.log(texto.replace(regexLetras, 'Achei'))
console.log(texto.split(regexLetras))
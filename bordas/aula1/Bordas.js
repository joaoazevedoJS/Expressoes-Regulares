const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/r/gi))
console.log(texto.match(/^r/gi)) // fora do conjunto o ^ significa inicio de linha/string
console.log(texto.match(/r$/g)) // já o $ significa final de linha/string

// vai da nulo pois o ponto ( . ) não pega o \n
console.log(texto.match(/^r.*r$/gi)) // problema do dotall

console.log(texto.match(/^r(.|\s)*r$/gi)) // minha solução

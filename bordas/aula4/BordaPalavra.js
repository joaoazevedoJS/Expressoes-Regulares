const texto1 = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

console.log(texto1.match(/\bdia\w+/gi)) // todas palavras que começa com 'dia' e tenha uma ou mais letras
console.log(texto1.match(/\w+dia\b/gi)) // palavras que termina dia
console.log(texto1.match(/\w+dia\w+/gi))
console.log(texto1.match(/\bdia\b/gi)) // começa com dia e termina com dia

// Borda ele é o oposto do não \w, que é [^A-Za-z0-9_]... temos problemas com acentos!

const texto2 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial'
console.log(texto2.match(/\bdia\b/gi)) // selecionou mais de um, pois o acentos são considerado como bordas

// Estrategias para resolver o problema

console.log(texto2.match(/(\S*)?dia(\S*)?/gi)) // a vírgula entra!
console.log(texto2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi))

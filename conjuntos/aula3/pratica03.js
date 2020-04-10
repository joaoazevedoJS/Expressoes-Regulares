const metacaracteres = '.$[+*]?^-^'

console.log(metacaracteres.match(/[$-\-]/g))
console.log(metacaracteres.match(/[$-\^]./g))
console.log(metacaracteres.match(/[$-\[\]]./g))

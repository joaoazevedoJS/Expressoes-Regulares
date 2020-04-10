const metacaracteres = '.$+*?-'

console.log(metacaracteres.match(/[+.?*$]./g)) // Não precisa de espace dentro do conjunto
console.log(metacaracteres.match(/[.]./g))
console.log(metacaracteres.match(/[$-?]/g)) //  Isso é um intervalo (range)

// Não é um intervalo (range)...
console.log(metacaracteres.match(/[$\-?]/g))
console.log(metacaracteres.match(/[-?]/g))

// Pode precisar de escape dentro do conjunto - [] ^

const myName = 'João Joãooo Jooão Joãão Jão'

console.log(myName.match(/João?/gi))
console.log(myName.match(/Jo?ão/gi))
console.log(myName.match(/João{0,1}/gi))
console.log(myName.match(/João?/gi))
console.log(myName.match(/Joã{1,}o/gi))

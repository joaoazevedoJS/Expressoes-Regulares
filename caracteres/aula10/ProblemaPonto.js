const text = "Good\nMorning"
const texto1 = "bom\ndia"
const texto2 = "bom\tdia"

console.log(text.match(/./gi))
console.log(text.match(/.../gi))
console.log(texto1.match(/..../gi)) // o ponto não engloba o \n
console.log(texto2.match(/..../gi))

// dotall - algumas linguagens tem uma flag /exp/s, mas o JS não!

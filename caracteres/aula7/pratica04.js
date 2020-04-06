const text = `one	tab	, two spaces  , three break lines


, for tabs			and five spaces     `

console.log(text.match(/\w+\t|\t\w+/g))
console.log(text.match(/spaces\s/g))
console.log(text.match(/\w+\n/g))

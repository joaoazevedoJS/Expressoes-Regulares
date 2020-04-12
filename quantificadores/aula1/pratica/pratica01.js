const text = `
Hello joão,


Hey lest go the movie!      Really?					incredible!


`

console.log(text)

const format1 = text.replace(/\n{2,}| {2,}|\t{2,}/g, ' ')

const format2 = text.replace(/\s{2,}/g, ' ')

console.log(format1)
console.log(format2)

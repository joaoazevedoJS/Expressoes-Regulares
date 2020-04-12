const text = `abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ
0123456789 _+-.,!@#$%^&*();\/|<>"'`

console.log(text.match(/\w+/gi))
console.log(text.match(/\W{1,}/gi))
console.log(text.match(/[A-_]+/gi))

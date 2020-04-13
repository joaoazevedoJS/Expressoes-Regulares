const text = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46.'

// Para definir um quantificador usa {} ou + ? *

console.log(text.match(/\d{1,2}/g)) // ele ta pegando o 12 e 0 do 120
console.log(text.match(/[0-9]{2}/g)) // numeros que tenha 2 digitos
console.log(text.match(/\d{1,}/g))

console.log(text.match(/\w{7}/g)) // não achou a palavra milhões, pois o 'õ' não está no \w
console.log(text.match(/[\wõ]{7,}/g))


// no futuro usando borda...
console.log(text.match(/\b\d{1,2}\b/g))
console.log(text.match(/\b[\wõ]{7}\b/g))

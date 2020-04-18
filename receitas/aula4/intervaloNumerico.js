const numeros = '0 1 10 192 199 201 249 255 256 312 1010 1512'

// Números entre 0-255
console.log(numeros.match(/\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\b/g))

const ips = `
Inválidos:
192.268.0.1
1.333.1.1
192.168.0.256

Válidos:
192.168.0.1
127.0.0.1
10.0.0.255
10.11.12.0
255.255.255.255
0.0.0.0
`
const n = '(\\d{1,2}|1\\d{2}|2[0-4]\\d|25[0-5])' // dentro da string precisa por 2 barras
const ipv4 = RegExp(`\\b${n}\\.${n}\\.${n}\\.${n}`, 'g')
console.log(ips.match(ipv4))

console.log(ips.match(/\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\.\1\.\1\.\1\b/g))


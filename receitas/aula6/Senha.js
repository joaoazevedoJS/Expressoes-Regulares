// Requisitos: Letra maiuscula, minuscula, números, no minimo 1 símbolo e no Min 6 caracteres e Max 20

const senhas = `
123456
cod3r
QUASE123!
#OpA1
#essaSenhaEGrande1234

#OpA1?
Foi123!
eitA#^12
`

// Mais simples, Que pega senhas de 6 e 20 caracteres
console.log(senhas.match(/^.{6,20}$/gm))

// Pegar senhas que tenha uma letra maiuscula e que tenha no max 20 caracteres
console.log(senhas.match(/^(?=.*[A-Z]).{6,20}$/gm))

// Que tenha obrigatoriamente uma letra maiuscula, minuscula, digitos, caracteres especiais e no max 20 caracteres
console.log(senhas.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%!^&*]).{6,20}$/gm))

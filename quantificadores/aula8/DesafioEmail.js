const texto = `Os e-mails dos convidados são:
	- fulano@cod3r.com.br
	- xico@gmail.com
	- Empresa.joao@alo.com.br erro.404@user.com`

console.log(texto.match(/\w+[@\.].+/gi))

// RESOLUÇÃO DO PROFESSOR

console.log(texto.match(/[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]{2,4}/g))
console.log(texto.match(/\w+@\w+\.\w{2,4}/g))
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}/g))
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g))

// no futuro ...
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}(\.\w{2})?/g)) // melhor solução!

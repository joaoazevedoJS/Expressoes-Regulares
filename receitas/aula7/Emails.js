const emails = `
Os e-mails dos convidados são:
	- fulano@cod3r.com.br
	- xico@gmail.com
	- Empresa.joao@alo.com.br
	- maria_silva@registro.br
	- fulano+de+tal@escola.ninja.br
	- rafa.sampaio@yahoo.com erro.404@user.com
`

console.log(emails.match(/\S+@\w+\.\w{2,6}(\.\w{2})?/g))

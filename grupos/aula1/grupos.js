const texto1 = 'O José Simão é muito engraçado... hehehehehehe'

console.log(texto1.match(/hehe+/g)) // sem grupo
console.log(texto1.match(/(hehe)+/g)) // com grupo

const texto2 = 'http://www.site.info, www.escola.ninja.br, google.com.ag, https://www.google.com'

console.log(texto2.match(/(https?:\/\/)?(www)?[\w.]+/g))

// Resolução do professor

console.log(texto2.match(/(https?:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g))

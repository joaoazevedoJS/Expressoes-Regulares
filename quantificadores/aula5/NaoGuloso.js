const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

// Quantificadores SÃO gulosos por padrão (greedy)...
console.log(texto.match(/<div>.+<\/div>/g))
console.log(texto.match(/<div>.*<\/div>/g))
console.log(texto.match(/<div>.{0,100}<\/div>/g))

// Quantificadores NÃO gulosos (lazy)...
console.log(texto.match(/<div>.+?<\/div>/g))
console.log(texto.match(/<div>.*?<\/div>/g))
console.log(texto.match(/<div>.{0,100}?<\/div>/g))

const lorem = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quia harum hic voluptas possimus, totam sunt facere ratione eos tempore nostrum autem velit? Deserunt, dolore quo corporis dolores non natus?'

console.log(lorem.match(/lorem/gi))

const text = lorem.split(' ')

const todasPalavras = []

for (let key of text) {
  let palavra = lorem.match(key)
  todasPalavras.push(palavra[0])
}

console.log(todasPalavras)

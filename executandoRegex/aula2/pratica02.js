const text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quia harum hic voluptas possimus, totam sunt facere ratione eos tempore nostrum autem velit? Deserunt, dolore quo corporis dolores non natus?'

const regexDolor = RegExp('dolor')

console.log(regexDolor.test(text)) 
console.log(regexDolor.exec(text)) 

const textSplit = text.split(' ')

console.log(RegExp('word', 'gi'))

const repeatedWord = []

for(let word of textSplit) {
  let key = RegExp(word, 'gi')
  
  let repeated = text.match(key)

  repeatedWord.push({ words: repeated[0], total: repeated.length })
}

console.log('\n\n\t\t Total of repeated words!\n\n')

let total = 0;

for(let repeated of repeatedWord) {
  if(repeated.total != 1) {
    total += repeated.total
  } 
}

console.log(`In total has: ${total} repeated words!`)
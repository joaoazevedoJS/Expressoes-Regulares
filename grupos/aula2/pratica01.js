const text = 'O João é muito louco quando se trata de programação, ele estuda dia e noite... este joão!'

console.log(text.match(/(jo[aã]o).+\1./gi))

console.log(text.match(/(jo[aã]o).+(ele)/gi))

console.log(text.replace(/(ele).(estuda)/gi, '$1 joga'))

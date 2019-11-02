const file = require('./utils/file')

var champions = {}

let champs_data = file.read('app/champions/.json', true)
champs_data.forEach(champ => {
    champions[champ] = require(`./app/champions/${champ}`)
})

let p1 = new champions["Annie"]
let p2 = new champions["Annie"]

console.table(p1.stats)
console.table(p2.stats)


p1.useSpell(0, p2, undefined)

console.table(p1.stats)
console.table(p2.stats)
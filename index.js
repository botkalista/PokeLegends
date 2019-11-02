const file = require('./utils/file')

var champions = {}

let champs_data = file.read('app/champions/.json', true)
champs_data.forEach(champ => {
    champions[champ] = require(`./app/champions/${champ}`)
})

let annie = new champions["Annie"]
console.log(annie.getStats())
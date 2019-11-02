const Champion = require('../champion.js')
const simple = require('../../utils/simple')

class Annie extends Champion {
    constructor() {
        const stats = [90, 140, 10, 20, 10, 12, 100]
        const spells = getSpells()
        super("Annie", "Fire", stats, spells)
    }
}

function getSpells() {


    const Q = {
        name: 'Spell-Q',
        cost: [0, 40],
        cast: function (caster, target, args) {
            simple.simpleDamage(caster, target, 20, [caster.getAP()], 'Magic', 'Fire', 100, args)
        }
    }

    const W = {
        name: 'Spell-Q',
        cost: [0, 40],
        cast: function (caster, target, args) {
            simple.simpleDamage(caster, target, 20, [caster.getAP()], 'Magic', 'Fire', 100, args)
        }
    }

    const E = {
        name: 'Spell-Q',
        cost: [0, 40],
        cast: function (caster, target, args) {
            simple.simpleDamage(caster, target, 20, [caster.getAP()], 'Magic', 'Fire', 100, args)
        }
    }

    const R = {
        name: 'Spell-Q',
        cost: [0, 40],
        cast: function (caster, target, args) {
            simple.simpleDamage(caster, target, 20, [caster.getAP()], 'Magic', 'Fire', 100, args)
        }
    }


    return [Q, W, E, R]
}

module.exports = Annie
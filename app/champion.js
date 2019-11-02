class Champion {

    constructor(name, type, stats, spells) {
        this.name = name
        this.type = type
        this.baseStats = stats
        this.stats = stats
        this.level = 1
        this.exp = 0
        this.maxExp = 100
        this.spells = spells
    }

    getHP() { return this.stats[0] }
    getMana() { return this.stats[1] }
    getAD() { return this.stats[2] }
    getAP() { return this.stats[3] }
    getARMOR() { return this.stats[4] }
    getMR() { return this.stats[5] }
    getPREC() { return this.stats[6] }

    useSpell(n, target, args) {
        const hp_cost = this.spells[n].cost[0]
        const mana_cost = this.spells[n].cost[1]
        let hp = this.stats[0]
        let mana = this.stats[1]

        if (hp > hp_cost && mana >= mana_cost) {
            this.stats[0] -= hp_cost
            this.stats[1] -= mana_cost
            this.spells[n].cast(this, target, args)
        }

    }

    getDamage(value, damage_type, type) {

    }

    getStats() {
        return this.stats
    }

    levelup() {
        this.level++
        this.maxExp = 100 + this.level * (15 + this.level)
    }

    addExp(val) {
        this.exp += val
        while (this.exp >= this.maxExp) {
            this.exp -= this.maxExp
            this.levelup()
        }
    }
}



module.exports = Champion
class Champion {

    constructor(name, type, stats) {
        this.name = name
        this.type = type
        this.baseStats = stats
        this.stats = stats
        this.level = 1
        this.exp = 0
        this.maxExp = 100
        this.spells = []
    }

    useSpell(n, target, args) {
        this.spells[n].cast(target, args)
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
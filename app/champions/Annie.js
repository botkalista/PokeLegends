const Champion = require('../champion.js')

class Annie extends Champion {
    constructor() {
        super("Annie", "Fire", [90, 140, 10, 20, 10, 12, 100])
    }
}

module.exports = Annie
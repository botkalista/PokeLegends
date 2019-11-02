


function simpleDamage(caster, target, damage, scalings, damage_type, type, precision, args) {
    let allscalings = 0
    scalings.forEach(scaling => {
        allscalings += scaling
    })
    target.getDamage(damage + allscalings, damage_type, type)
}




module.exports = {
    simpleDamage
}
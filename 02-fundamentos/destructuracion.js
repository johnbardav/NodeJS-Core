let deadpool = {
    name: 'Wade',
    lastName: 'Winston',
    ability: 'Regeneration',
    getName: function() {
        return `${this.name} ${this.lastName} - Ability: ${this.ability}`
    }
}
console.log(deadpool.getName());

let { name: firstName, lastName, ability } = deadpool;
console.log(firstName, lastName, ability);
function sum(a, b) {
    return a + b;
}

let sum2 = (a, b) => {
    return a + b;
}

let sum3 = (a, b) => a + b;

let sayHello = () => 'HelloWorld';

let sayHelloTo = (name) => `Hello ${name}`;

console.log(sum(10, 20), sum2(10, 20), sum3(10, 20), sayHello(), sayHelloTo('John'));

let deadpool = {
    name: 'Wade',
    lastName: 'Winston',
    ability: 'Regeneration',
    getName() {
        return `${this.name} ${this.lastName} - Ability: ${this.ability}`
    }
}
console.log(deadpool.getName());
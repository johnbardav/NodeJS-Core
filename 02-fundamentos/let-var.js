let name = 'John';

if (true) {
    name = 'Nick';
}
console.log(name);

for (let i = 0; i <= 5; i++) { //con la declaracion de (i) como let, solo existe dentro del ciclo
    console.log(`i: ${i}`);
}

// si la declaración de (i) se hubiese hecho con var, la declaración de (i) existiría
// console.log(i);
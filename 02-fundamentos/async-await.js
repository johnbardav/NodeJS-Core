/*
 * Async Await
 */

let getName = async() => {
    throw new Error("The name doesn't exist in the database.");
    return 'John';
};

getName().then(name => {
    console.log(name);
}).catch(error => console.log(`Async Error: ${error}`));

// getName() and getNamePromise() are equals, both define a promise
let getNamePromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('JohnDoe');
        }, 3000);
    });
};
/*
getNamePromise().then(name => {
    console.log(name);
}).catch(error => console.log(`Async Error: ${error}`));
*/

// This function is called when name is available
let sayHello = async() => {
    let name = await getNamePromise();
    return `Hola ${name}`;
};

sayHello().then(message => {
    console.log(message);
}).catch(error => console.log(`Async Error: ${error}`));
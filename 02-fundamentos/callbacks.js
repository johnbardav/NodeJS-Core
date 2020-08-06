setTimeout(() => {
    console.log('HelloWorld');
}, 50000);

let getUserById = (id, callback) => {
    let user = {
        name: 'Test',
        id //this is equal to 'id: id'
    }

    if (id === 30) {
        callback(`The user ${id}, doesn't exists.`)
    } else {
        callback(null, user);
    }
}

getUserById(30, (error, user) => {
    if (error) {
        return console.log(error);
    }
    console.log('User in database is: ', user);
});
const fs = require('fs');

let listFile = (base, limit = 10) => {
    for (let i = 0; i <= limit; i++) {
        console.log(`${base} * ${i} = ${ base * i }\n`);
    }
};

let createFile = (base, limit = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('Wrong parameter to create file');
            return;
        }

        let data = '';

        for (let i = 0; i <= limit; i++) {
            data += `${base} * ${i} = ${ base * i }\n`;
        }

        fs.writeFile(`./tables/table-${base}-to-${limit}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`table-${base}-to-${limit}.txt`);
        });
    });
};

module.exports = {
    createFile,
    createFileWithOtherName: createFile,
    listFile
};
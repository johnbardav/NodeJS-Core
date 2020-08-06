const argv = require('./config/yargs').argv;
const { createFile, createFileWithOtherName, listFile } = require('./multiply/multiply');

let command = argv._[0];

switch (command) {
    case 'list':
        console.log('List');
        listFile(argv.base, argv.limit);
        break;

    case 'create':
        console.log('Create');
        createFile(argv.base, argv.limit)
            .then(file => console.log(`The file is created ${file}`))
            .catch(error => console.log(error));
        break;

    default:
        console.log('Undefined Command');
        break;
}
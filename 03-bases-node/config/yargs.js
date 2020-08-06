const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('list', 'Print multiplication table in console', opts)
    .command('create', 'Create a multiplication table and save to file', opts)
    .help()
    .argv;

module.exports = {
    argv
}
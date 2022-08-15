const yargs = require("yargs")

/*
***** Notes APP ******
1. Create methods
2. Add, Remove, List, Read
*/

// Create a command for add

yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Title and Body: ' + argv.title + ":" + argv.body)
    }
})

// Create a command for remove

yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: function() {
        console.log('Removing a note')
    }
})

// Create a command for read

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Read a note')
    }
})

// Create a command for list

yargs.command({
    command: 'list',
    describe: 'List a note',
    handler: function() {
        console.log('List a note')
    }
})

yargs.parse()
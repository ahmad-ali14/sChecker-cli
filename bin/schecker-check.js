/**
 *  sub-commands for (check) command
 */

const porogram = require('commander');
const key = require('../commands/key.js');


porogram
    /**
     * register price command and its description 
     * this is a sub-command (or option) for the -check command.
     */
    .command('price')
    .description('Check Price for Coins')

    /**
     * register the action for that command, simply a function. 
     */
       
    .action(key.set)


/**
 * parse user input
 */
porogram.parse(process.argv);
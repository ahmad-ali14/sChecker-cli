/**
 *  sub-commands for (check) command
 */

const porogram = require('commander');
const check = require('../commands/check.js');


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
       
    .action(check.price)


/**
 * parse user input
 */
porogram.parse(process.argv);
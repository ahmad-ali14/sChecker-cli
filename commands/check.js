/**
 * this file contains sub-commands' action functions for the main command (key) inside the 
 *  file ./bin/schecker-key.js .
 */

const inquirer = require('inquirer');
const colors = require('colors');
const isRequired = require('../utils/validation').isRequired;

const check = {
    price(cmd){
        console.log( cmd.coin, cmd.cur)
    }

}


module.exports = check;
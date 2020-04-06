#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');


program

/*
* add -V option for version, -h for help
* or --version, --help
* require package.json and assign commander version to it. 
*/

.version(pkg.version)

/* 

*/

.parse(process.argv)

/*
 get the arguments from user input
*/

//console.log(process.argv);

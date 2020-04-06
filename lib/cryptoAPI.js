
/**
 * This file contains the library that will deal with nomics API then supplies the functionality to the command actions in the 
 *  file ./commands/check.js
 */
const axios = require('axios');
const colors = require('colors');

class CryptoAPI{
    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
    }
}
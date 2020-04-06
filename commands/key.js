/**
 * this file contains sub-commands' action functions for the main command (key) inside the 
 *  file bin/schecker-key.js .
 */

 const KeyManager = require('../lib/KeyManager.js');
 const inquirer = require('inquirer');
 const colors = require('colors');
 const isRequired = require('../utils/validation').isRequired;

const key = {
    async set(){
        /**
         * instanciate a new KeyManager
         */
        const keyManager = new KeyManager();

        /** prompting the user for API key using inquirer, we need to wait until the user give the answer
        */ 
       const input = await inquirer
                            /**
                             * provide the inquirer with questions to ask the user.
                             * the questions should be an array, each question is an object 
                              */    
                            .prompt([{
                                type: 'input',
                                name: 'key', 
                                message: 'Enter API key'.green +' https://nomics.com/',
                                validate: isRequired
                            }])
                            
        /**
         *  extracting the key from input and store it in our configstore
         */
        const key = keyManager.setKey(input.key);

        /**
         * success message
         */
        if(key){
            console.log('API Key Set'.blue);
        }

    },
    show(){
        /**
         * 
         */
        try{
            /**
             * instanciate a new KeyManager
             */
            const keyManager = new KeyManager();
            /**
             * extract saved key  
             */
        } catch (err){

        }
    },
    remove(){
        console.log('remove !!');
    }
}

module.exports = key;
/**
 * This file contains our validation functions
 */

 /**
  * required values, if input is empty => don't continue - return with a message
  *  Else, return true => continue
  */
 const isRequired = input => input === '' ? 'This vlaue is required' : true;
 
 
 module.exports ={
     isRequired
 }
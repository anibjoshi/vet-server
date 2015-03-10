/**
* Client.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  		name : 'string',
  		address: 'string',
  		dateOfBirth : 'date',
  		contact: 'integer',
  		email:'email',
  		pets: {
  			collection:'patient',
  			via: 'owner'
  		},
  		dueAmount:'integer',
  		preferredDoctor : 'string'
  }
};


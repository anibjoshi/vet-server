/**
* Doctor.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  		name : {
  			type: 'string',
  			required: 'true'
  		},
  		address: {
  			type: 'string',
  			required:'true'
  		},
  		image : 'string',
  		education : 'string',
  		joiningDate: 'date',
  		email: 'email',
  		dateOfBirth:'date',
  		username:'string',
  		password:'string',

      employer : {
          model:'Clinic'
      }
  }
};


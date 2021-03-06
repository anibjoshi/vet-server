/**
* Clinic.js
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
  		contacts : {
  			collection: 'contact',
  			via: 'owner'
  		},
  		image : 'string',
		doctors : {
			collection : 'doctor',
			via : 'employer'
		},
		staff : {
			collection : 'staff',
			via : 'employer'
		},
		website:'string',
		email:'email'
  }
};


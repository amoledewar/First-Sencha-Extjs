
var itemsPerPage = 2;
Ext.define('Myapp.store.UserStore', {
	extend : 'Ext.data.Store',
//	model : 'Myapp.model.UserModel',
	alias : 'store.users',
	 pageSize: itemsPerPage,
	requires : [ 'Myapp.model.UserModel' ],
	config : {
		storeId : 'UserModel',
//		model : 'Myapp.model.UserModel',
		autoLoad : true,
		data : [{
			id : '1',
			fname : 'Jean',
			mname : 'jasss',
			lname : 'Luc',
			dob : '02-10-1997',
			address1 : 'address1',
			address2 : 'address2',
			city : "Pune",
			state : 'MH'
		}, {
			id : '2',
			fname : 'Worf',
			mname : 'mass',
			lname : 'Kad',
			dob : "02/10/1998",
			address1 : 'address1',
			address2 : 'address2',
			city : "Pune",
			state : 'MH'
		}, {
			id : '3',
			fname : 'Deanna',
			mname : 'kne',
			lname : 'Puut',
			dob : '09-08-1999',
			address1 : 'address1',
			address2 : 'address2',
			city : "Pune",
			state : 'MH'
		}, {
			id : '4',
			fname : 'Data',
			mname : 'ouyt',
			lname : 'Part',
			dob : "02/10/1990",
			address1 : 'address1',
			address2 : 'address2',
			city : "Pune",
			state : 'MH'
		}]
	}
});

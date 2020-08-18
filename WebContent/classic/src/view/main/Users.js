/**
 * This view is an example list of people.
 */

var addBtn = Ext.create('Ext.Button', {
	text : 'ADD',
	handler : function() {
		Ext.getCmp('name').setValue("");
		Ext.getCmp('email').setValue("");
		Ext.getCmp('phone').setValue("");
		win.show();

	}
});
var editBtn = Ext.create('Ext.Button', {
	text : 'EDIT',
	handler : 'editClick'
});
var deleteBtn = Ext.create('Ext.Button', {
	text : 'DELETE',
	handler : 'deleteClick'
});

Ext.define('Myapp.view.main.Users', {
	extend : 'Ext.form.Panel',
	// extend: 'Ext.grid.Panel',
	xtype : 'userList',
	store : [ 'users' ],
	requires : [ 'Myapp.store.UserStore' ],
	items : [ {
		xtype : 'grid',
		title : 'Users',
		margin : '5 0 0 0',
		id : 'usergrid',
		store : {
			type : 'users'
		},
		selModel : {
			checkOnly : false,

			mode : 'SIMPLE'
		},
		selType : 'checkboxmodel',
		columns : [ {
			text : 'Id',
			dataIndex : 'id'
		}, {
			text : 'First Name',
			dataIndex : 'fname',
			flex : 1
		}, {
			text : 'Middle Name',
			dataIndex : 'mname',
			flex : 1
		}, {
			text : 'Last Name',
			dataIndex : 'lname',
			flex : 1
		}, {
			text : 'Date Of Birth',
			dataIndex : 'dob',
			flex : 1
		}, {
			text : 'Address1',
			dataIndex : 'address1',
			flex : 1
		},{
			text : 'Address2',
			dataIndex : 'address2',
			flex : 1
		},{
			text : 'City',
			dataIndex : 'city',
			flex : 1
		},{
			text : 'State',
			dataIndex : 'state',
			flex : 1
		}],
		bbar : {
			xtype : 'pagingtoolbar',
			displayInfo : true
		},

		listeners : {
			select : 'onItemSelected'
		}
	}, deleteBtn ]

});
//
//var store = Ext.getCmp('usergrid').getStore();
//store.load({
//	params : {
//		start : 0,
//		limit : 2
//	}
//});

win = new Ext.Window({
	title : 'Student Info',
	layout : 'form',
	width : 400,
	closeAction : 'close',
	target : document.getElementById('buttonId'),
	plain : true,

	items : [ {
		xtype : 'textfield',
		fieldLabel : 'Name',
		name : 'name',
		id : 'name'
	}, {
		xtype : 'textfield',
		fieldLabel : 'Email',
		name : 'email',
		id : 'email'
	}, {
		xtype : 'textfield',
		fieldLabel : 'phone',
		name : 'phone',
		id : 'phone'
	}, ],

	buttons : [ {
		text : 'Submit',
		handler : 'submitClick'
	}, {
		text : 'Cancel',
		handler : function() {
			win.close();
		}
	} ],
	buttonAlign : 'center',
});

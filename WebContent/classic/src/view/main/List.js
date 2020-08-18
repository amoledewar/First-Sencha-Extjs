/**
 * This view is an example list of people.


 */

Ext.define('Myapp.view.main.List', {
	extend: 'Ext.form.Panel',
	xtype : 'mainlist',
	id:'userForm',
	requires : [ 'Myapp.store.Personnel' ],

	title : 'Personnel',
	fieldDefaults:
    {
        xtype: 'textfield',
        msgTarget: 'side',
        labelAlign: 'top',
        labelStyle: 'font-weight:bold'
    },
    defaultType: 'textfield',
    items: [{
            xtype: 'fieldcontainer',
            layout: 'hbox',
            defaultType: 'textfield',
            width: '100%',
            items: [{
                fieldLabel: 'Id',
                id: 'id',
//                readOnly: true,
                width: 55,
                hideField:true
                
                
            },
            {
                fieldLabel: 'First Name',
                flex: 1,
                id: 'fname',
                margin: '0 0 0 5',
                allowBlank: false
            },
                {
            	id: 'mname',
                    width: 150,
                    margin: '0 0 0 5',
                    fieldLabel: 'Middle Name:',
                    allowBlank: false
                },
                {
                    fieldLabel: 'Last Name',
                    flex: 1,
                    margin: '0 0 0 5',
                    id: 'lname',
                    allowBlank: false
                }]
        },
            {
                xtype: 'datefield',
                fieldLabel: 'Date of Birth',
                id: 'dob',
                allowBlank: false
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Address',
                width: '100%',
                id: 'address1',
                allowBlank: false
            },
            {
                xtype: 'textfield',
                hideLabel: true,
                id: 'address2',
                width: '100%',
                fieldLabel: 'address2'

            },
            {
                xtype: 'textfield',
                fieldLabel: 'City',
                width: '100%',
                id: 'city',
                allowBlank: false
            },
            {
                xtype: 'textfield',
                fieldLabel: 'state',
                width: '100%',
                id: 'state',
                allowBlank: false
            }
    ],
    buttons: [{
        text: 'SUBMIT',
        itemId: 'btnCreate',
       
        handler: 'submitClick'
    },
       
    {
        text: 'Clear',
        itemId: 'btnClear',
        handler: 'onClearClick'
    }]
    
});


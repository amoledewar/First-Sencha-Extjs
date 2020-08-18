/**
 * This class is the controller for the main view for the application. It is
 * specified as the "controller" of the Main view class.
 * 
 * TODO - Replace this content of this view to suite the needs of your
 * application.
 */
Ext.define('Myapp.view.main.MainController', {
	extend : 'Ext.app.ViewController',

	alias : 'controller.main',

// onItemSelected : function(sender, record) {
// Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
// },

	onConfirm : function(choice) {
		if (choice === 'yes') {
			//
		}
	},
	
	submitClick : function() {
		var store = Ext.getCmp('usergrid').getStore();
		var val= Ext.getCmp('id').getValue();
		var index=store.find('name',val);
			if(index>0){
				var record=store.getAt(index);
					record.data.name = Ext.getCmp('name').getValue();
					record.data.email = Ext.getCmp('email').getValue();
					record.data.phone = Ext.getCmp('phone').getValue();
					Ext.getCmp('usergrid').getView().refresh();
		}else{
			var rec = new Myapp.model.UserModel({
				id :Ext.getCmp('id').getValue(),
				fname : Ext.getCmp('fname').getValue(),
				mname : Ext.getCmp('mname').getValue(),
				lname : Ext.getCmp('lname').getValue(),
				dob : Ext.getCmp('dob').getValue(),
				address1 : Ext.getCmp('address1').getValue(),
				address2 : Ext.getCmp('address2').getValue(),
				city : Ext.getCmp('city').getValue(),
				state : Ext.getCmp('state').getValue(),
				
			});
			store.insert(store.config.data.length + 1, rec);
			Ext.getCmp('usergrid').getView().refresh();
			Ext.getCmp('userForm').getForm().reset();
			Ext.Msg.alert('Save Data', 'User Information saved successfully', 'onConfirm', this);
		}
		
			win.close();
	},
	
	editClick:function(){
	
		var select=Ext.getCmp('usergrid').getSelection();
		if(select.length==0){
			Ext.Msg.confirm('Error', 'Please Select Record from Grid', 'onError', this);
			return false;
		}
		if(select.length==1){
			win.show();
			select.map(item=>{
				 Ext.getCmp('name').setValue(item.get('name'));
				 Ext.getCmp('email').setValue(item.get('email'));
				 Ext.getCmp('phone').setValue(item.get('phone'));
             });
		}
		
	},
	deleteClick:function(){
		var store = Ext.getCmp('usergrid').getStore();
		var select=Ext.getCmp('usergrid').getSelection();
		var val;
		if(select.length>0){
			for(var index=0;index<select.length;index++){
			val=select[index].data.id;
			var dataIndex=store.find('id',val);
			store.removeAt(dataIndex);
			Ext.getCmp('usergrid').getView().refresh();
			}
		}
		
		
	}

});

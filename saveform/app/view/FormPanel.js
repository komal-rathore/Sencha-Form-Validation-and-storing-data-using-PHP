/*
 * File: app/view/MyContainer.js
 *
 * This file was generated by Sencha Architect version 2.2.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.FormPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.FormPanel',
 
    config: {
        itemId: 'registrationform',
        items: [
            {
                xtype: 'fieldset',
                title: 'Registration Form',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Username',
                        labelWrap: true,
                        name: 'username',
                        placeHolder: 'Enter Username'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Password',
                        labelWrap: true,
                        name: 'password',
                        placeHolder: 'Enter Password'
                    },
                    {
                        xtype: 'emailfield',
                        label: 'Email',
                        labelWrap: true,
                        name: 'email',
                        placeHolder: 'email@example.com'
                    },
                    {
                        xtype: 'urlfield',
                        label: 'Website',
                        labelWrap: true,
                        name: 'website',
                        placeHolder: 'http://example.com'
                    },
                    {
                        xtype: 'textareafield',
                        label: 'About You',
                        labelWrap: true,
                        name: 'aboutyou',
                        placeHolder: 'Tel me about yourself'
                    }
						
                ]
            },
            {
                xtype: 'button',
                itemId: 'save',
                width: '30%',
                text: 'Save'
            }
        ],
		listeners: [
            {
                fn: 'onFormSave',
                event: 'tap',
                delegate: '#save'
            },{
							xtype: "panel",
							id: "output",
							label:"user responce",
							scrollable: true,
							flex:1
					}
        ]
    },
	onFormSave: function(button,e,options){
 
		var formObj = button.up('FormPanel');
		var formData = formObj.getValues();
		 
		var usr = Ext.create('MyApp.model.User',{
			 username: formData.username,
			 password: formData.password,
			 email:formData.email,
			 website:formData.website,
			 aboutyou: formData.aboutyou
		});
		 
		var errs = usr.validate();
		var msg = '';
		 
		if (!errs.isValid()) {
		   errs.each(function (err) {
		   msg += err.getField() + ' : ' + err.getMessage() + '<br/>';
		   });
		 
		   Ext.Msg.alert('ERROR', msg);
		 
		} else {
		var request = {
					                    url: 'http://localhost/touch-2.3.1/saveform/saveForm.php',
					                    method: 'POST',

					// commenting this out will simply send this form with normal params
					// when this is true new HTML5 FormData object is created to send all fields
					                    xhr2: true,

					                    success: function(form, response) 
										{
						                   var out = Ext.getCmp("output");
						                   if(response) out.setHtml(response.message);
					                    },
					                 failure: function(form, response) {
						                    var out = Ext.getCmp("output");
						                        out.setHtml(response.message);
					                    }
				                       } ;
			 /*var userStore = Ext.getStore('userstore');
			 userStore.add(usr);
			 userStore.sync();*/
			 formObj.submit(request);
			 // Ext.Msg.alert('SUCCESS', 'Data Saved to Local Storage Successfully');
		}
 
	}
});
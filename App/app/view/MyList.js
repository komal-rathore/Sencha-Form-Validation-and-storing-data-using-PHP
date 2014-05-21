Ext.define('App.view.MyList',{
 
    extend:'Ext.Panel',
 
    xtype:'MyList',
 
    requires:['Ext.dataview.List','Ext.data.Store'],
 
    config:{
 
        title:'My List',
 
        layout:'fit',
 
        items:[
 
        {
 
             xtype:'list',
 
             store:'MyStore',
 
             itemTpl:'<b>{name}<b>'
 
        }
 
        ]
 
    }
 
});
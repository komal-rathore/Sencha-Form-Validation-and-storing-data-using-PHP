Ext.define('App.store.MyStore',{
 
    extend:'Ext.data.Store',
   requires:['Ext.data.Model'],
    config:{
 
        model:'MyModel',
 
        autoLoad:true,
 
        data:[
 
            {name:'t1'},
 
            {name:'t2'}
 
        ],
 
        proxy:{
 
        type:'localstorage'
 
        }
 
    }
 
});
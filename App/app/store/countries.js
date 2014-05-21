Ext.define('App.store.Countries', {
    extend: 'Ext.data.TreeStore',
     
    config: {
     model: 'App.model.Country',
	 data       : [ {text:'John',Time:'11:00'}, //Pairs
                     {text:'Jill1' ,Time:'11:00'},
                     {text:'Susan',Time:'11:00' },
                     {text:'Alex',Time:'11:00' }
                   ]

    
    }    
 
});
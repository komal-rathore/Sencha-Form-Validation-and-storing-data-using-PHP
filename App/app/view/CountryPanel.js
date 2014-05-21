Ext.define('App.view.CountryPanel', {
    extend: 'Ext.dataview.NestedList',
    alias : 'widget.countryPanel',
     
    config: {
     store : 'Countries',
     title: 'Schedule',
	  iconCls: 'compose',
      cls: 'home',
        displayField: 'Time',
          
     detailCard: {
            html: 'You can see detail information here!'
        } 
     
    } 
});
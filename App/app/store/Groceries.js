Ext.define('App.store.Groceries', {
    extend: 'Ext.data.TreeStore',
    config: {
        model: 'App.model.Grocery',
        defaultRootProperty: 'items',
        proxy: {
            type: 'ajax',
            url: 'http://localhost/groceries.php'
        },
        autoLoad: true,
        root: {
            text:'Groceries'
        }
    }
});
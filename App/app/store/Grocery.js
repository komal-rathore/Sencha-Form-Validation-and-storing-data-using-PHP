Ext.define('App.store.Groceries', {
    extend: 'Ext.data.TreeStore',
    config: {
        model: 'App.model.Grocery',
        defaultRootProperty: 'items',
        proxy: {
            type: 'ajax',
            url: '../../services/groceries.php'
        },
        autoLoad: true,
        root: {
            text:'Groceries'
        }
    }
});
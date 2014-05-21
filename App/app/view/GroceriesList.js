Ext.define('App.view.GroceriesList', {
    extend: 'Ext.NestedList',
    alias: "widget.grocerieslist",
    config: {
        fullscreen: true,
        title: 'Groceries',
        displayField: 'text',
        store: 'Groceries'
    }
});

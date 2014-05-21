    //CREATE DATA STORE WITH 4 RECORDS-------------------------
    /*var peopleStore = new Ext.data.Store({
      fields     : ['id', 'name', 'age', 'city'],//Instead Model
      data       : [ {name:'John' , age:'35', id:'1' }, //Pairs
                     {name:'Jill1', age:'50', id:'4' },
                     {name:'Susan', age:'40', id:'2' },
                     {name:'Alex' , age:'50', id:'3' }
                   ]
    });*/
	Ext.define('peopleStore', {
    extend: 'Ext.data.Store',
    config: {
      
        
		fields     : ['id', 'name', 'age', 'city'],//Instead Model
        data       : [ {name:'John' , age:'35', id:'1' }, //Pairs
                     {name:'Jill1', age:'50', id:'4' },
                     {name:'Susan', age:'40', id:'2' },
                     {name:'Alex' , age:'50', id:'3' }
                   ],
       
        autoLoad: true,
       
    }
});
Ext.define('Search', {
  extend: 'Ext.dataview.List',
  xtype: 'searchpage',
  id: 'search-form',
  config: {
    title: 'Search',
    layout:  'vbox',
    itemTpl: '<div class="name">{name}</div>',
    store: 'peopleStore'
  }
});
/*
Ext.define('App.view.Main', {
  extend: 'Ext.tab.Panel',
  xtype: 'recipetabpanel',

  config: {
    title: 'Recipes',
    tabBarPosition: 'bottom',
    activeItem: 0,    
    items: [{
        title: 'Recipes',
        iconCls: 'bookmarks',
        layout : 'fit',
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            items: [
			{ xtype: 'spacer' },
			{
                xtype: 'searchfield',
                placeHolder: 'Search...'
                    },
             { xtype: 'spacer' }
                  ]
                   
				},
            {
            xtype: 'searchpage'
            }
        ]
      },
      {
        title: 'Settings',
        iconCls: 'settings',
        html: 'Settings screen'
      }
    ]
  }
});
*/
	

Ext.define('App.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: ['Ext.TitleBar','Ext.Video','Ext.dataview.List','Ext.data.Store','Ext.data.Model' ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2'
                },

                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            },
            {
                title: 'Get Started',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            },
			{
                title: 'Schedule',
                iconCls: 'compose',
                layout:'fit',
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Bathak Schedule',
						layout:'fit',
						
                    }
             
                ]
            }
        ]
    }
});

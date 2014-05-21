Ext.define('App.controller.TheWorld', {
 extend : 'Ext.app.Controller',
  
 config: {
  profile: Ext.os.deviceType.toLowerCase(),
  stores : ['Countries'],
  models : ['Country'],
  refs: {
   myContainer: 'countryPanel'
  },
        control: {
   'countryPanel': {
             activate: 'onActivate',
             leafitemtap: 'onDetailDisplay'
            }
        }  
   
    },
     
 onActivate: function() {
     console.log('Main container is active');
    },
     
    onDetailDisplay: function(nestedList, list, index, target, record) {
        var detailCard = nestedList.getDetailCard();
        detailCard.setHtml('Here is the detail information for ' + 
          record.get('text'));
    },
     
    onItemTap: function(view, list, index, target, record, event) {
     console.log('Item was tapped on the Data View');
     console.log(view, list, index, target, record, event);
     if(event.target.type == "button"){
      Ext.Msg.alert('You clicked on the Button ...', 
        'The country code selected is: ' + event.target.name);
     }
     else {
      Ext.Msg.alert('You clicked on the Row ...', 
        'The country code selected is: ' + record.get('code'));
     }
     //return false;
    },
     
    init: function() {
     console.log('Controller initialized');
    },
    
});
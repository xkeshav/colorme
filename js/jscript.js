$(function(){
    console.log('inside jquery script');
    var injected = false;
    if(!injected) { // Make sure it's only executed once
      injected = true;
      chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
        console.log(scriptOptions);
        console.log('jquery : sun raha hoon main');
        if(message.action == "bodyColor") {
           $('body').removeClass().addClass(scriptOptions.selectedClass);
           sendResponse({farewell : "jquery : sun chuka hoon main"});
        }
      });
    }
})


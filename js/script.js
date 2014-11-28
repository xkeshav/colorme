console.log(scriptOptions);
injected = false;
if(!injected) { // Make sure it's only executed once
  injected = true;
  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    console.log('sun raha hoon main');
    if(message.action == "bodyColor") {
      document.body.setAttribute('class', scriptOptions.selectedClass);
       sendResponse({farewell : "sun chuka hoon main"});
    }
  });
}


debugger;

function click(e) {
  var cl = e.target.className; // this.className both gives the same result that is OK.
  chrome.tabs.query({ active: true, currentWindow: true }, function(thisTab) {
    console.log(JSON.stringify(thisTab, ['active', 'id', 'index', 'windowId', 'title', 'url'], 4));
      chrome.tabs.executeScript(thisTab[0].id, {
        code : "var scriptOptions = { selectedClass:" + JSON.stringify(cl) + " }" }, function() {
          /* NOTE: change script.js with jscript.js  and see jquery code working */
          chrome.tabs.executeScript(thisTab[0].id, { file: "js/script.js" }, function(){
            console.log('sun raha hai na tun!');
            chrome.tabs.sendMessage(thisTab[0].id, { action: "bodyColor" }, function(resp) {
              console.log('fir se ' + resp.farewell);
            }); // !-- tabs.sendMessage
          }); // !-- INNER tabs.execeuteScripts
      }); // !-- OUTER tabs.execeuteScripts
  }); // ! --tabs.query
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded.');
    var li = document.querySelectorAll('li');
    for (var i = 0; i < li.length; i++) {
        li[i].addEventListener('click', click);
    }
});

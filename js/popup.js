debugger;

function click(e) {
  var cl = e.target.className; // this.className both gives the same result that is OK.
  chrome.tabs.query({ active: true, highlighted: true, currentWindow: true }, function(htab) {
    // console.log(JSON.stringify(htab, ['active', 'id', 'index', 'windowId', 'title', 'url'], 4));
    chrome.tabs.executeScript(htab[0].id, {
      code : "var scriptOptions = { selectedClass:" + JSON.stringify(cl) + " }" }, function() {
          chrome.tabs.executeScript(htab[0].id, { file: "js/script.js" }, function(){
            console.log('sun raha hai na tun!');
            chrome.tabs.sendMessage(htab[0].id, { action: "bodyColor" }, function(resp) {
              console.log('ye ' + resp.farewell);
            });
          });
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded.');
    var li = document.querySelectorAll('li');
    for (var i = 0; i < li.length; i++) {
        li[i].addEventListener('click', click);
    }
});

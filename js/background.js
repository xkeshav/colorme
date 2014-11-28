debugger;
// chrome.browserAction.setBadgeText({text: "color"});
var imgURL = chrome.extension.getURL("foto/foto.png");
document.getElementById("fotu").src = imgURL;


// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.browserAction.getTitle({tabId: tabs[0].id}, function(result) {
//         console.log( tabId + "==Browser action title==", result);
//     });
// });

/*
To add a popup to your browser action, create an HTML file with the popup's contents. Specify the HTML file in the default_popup field of browser_action attribute in the manifest.json

OR  call the browserAction.setPopup method.
 chrome.browserAction.setPopup({'popup' :'popup.html'});
*/

/*
Fired when a browser action icon is clicked.
@url https://developer.chrome.com/extensions/browserAction#event-onClicked
note:  This event will not fire if the browser action has a popup.
 */
// chrome.browserAction.onClicked.addListener(function(tab) {
//     console.log('browers action tab called');
// });

// chrome.browserAction.onClicked.addListener(function(tab) {
//   var viewTabUrl = chrome.extension.getURL('background.html');
//   var imageUrl = "https://www.hhhhold.com/km";

//   // Look through all the pages in this extension to find one we can use.
//   var views = chrome.extension.getViews();
//   for (var i = 0; i < views.length; i++) {
//     var view = views[i];

//     // If this view has the right URL and hasn't been used yet...
//     if (view.location.href == viewTabUrl && !view.imageAlreadySet) {

//       // ...call one of its functions and set a property.
//       view.setImageUrl(imageUrl);
//       view.imageAlreadySet = true;
//       break; // we're done
//     }
//   }
// });

// chrome.browserAction.getTitle({}, titleShow);
// function titleShow(t){
//  console.log('tab title:' + t);
// }

// function doit() {
//   chrome.tabs.create({url:"http://www.google.com"});
// }
// chrome.browserAction.onClicked.addListener( doit  );

// chrome.browserAction.setTitle({'title': 'maskkk me'});

// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.browserAction.getTitle({tabId: tabs[0].id}, function(result) {
//         console.log("Browser action title:", result);
//     });
// });

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//   // If the URL has changed, we may update the UI.
//   if (uiReady && changeInfo.status == 'complete') {
//     console.log('tab title after getting ' + tab.title);
//   }
// });


